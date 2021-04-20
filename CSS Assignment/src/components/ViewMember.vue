<template>
  <transition name="view">
    <section>


      <table  class="table table-bordered" >

        <thead class="thead-light">
        <tr>
          <th>Personal Info</th>
          <th></th>
        </tr>
        </thead>
        <tr>
          <th>Identification:</th>
          <td>{{idCard}}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{{name}}</td>
        </tr>
        <tr>
          <th>Surname:</th>
          <td>{{surname}}</td>
        </tr>
        <tr>
          <th>Date Of Birth:</th>
          <td>{{dob}}</td>
        </tr>
        <tr>
          <th>Nationality:</th>
          <td>{{nationality}}</td>
        </tr>
        <tr>
          <th>Gender:</th>
          <td>{{gender}}</td>
        </tr>

        <thead class="thead-light">
        <tr>
          <th>Contact Info</th>
          <th></th>
        </tr>
        </thead>


        <tr>
          <th >Email:</th>
          <td>{{email}}</td>
        </tr>
        <tr>
          <th>Telephone No/ Mobile:</th>
          <td> +{{mobile}}</td>
        </tr>


        <thead class="thead-light">
        <tr>
          <th>Player Info</th>
          <th></th>
        </tr>
        </thead>

        <tr>
          <th>Player Status:</th>
          <td>{{status}}</td>
        </tr>
        <tr>
          <th>Club:</th>
          <td>{{club}}</td>
        </tr>

      </table>
      <button @click="back" type="button" class="btn btn-secondary">Back</button>
    </section>
  </transition>
</template>


<script>
export default {
  data() {
    return {
      name:'',
      surname:'',
      dob:'',
      gender:'',
      idCard:'',
      mobile:'',
      email:'',
      nationality:'',
      club:'',
      status:''
    };
  },

  methods: {
    back() {
      this.$router.back();
    },

    async getData() {
      console.log("Getting data");
      const id = this.$route.params.memberId;
      try {
        const response = await fetch("https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact/"+id+".json", {
          method: 'GET'
        })
        const responseData = await response.json();
        if (!response.ok) {
          console.log("Something went wrong")
        }

        this.name = responseData.name.toUpperCase();
        this.surname = responseData.surname;
        this.dob = responseData.dob;
        this.gender = responseData.gender;
        this.idCard = responseData.idCard;
        this.mobile = responseData.mobile;
        this.email = responseData.email;
        this.nationality = responseData.nationality;
        this.club = responseData.club.substring(0,3).toUpperCase();
        this.status = responseData.status;

      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.table-bordered{
  position: center;
  position: relative;
  width: 70%;
  left: 15%;
}

.btn-secondary{
  position: relative;
  left: 47%;
}
</style>