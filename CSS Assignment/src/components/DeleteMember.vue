<template>
  <section>
    <div class="details">
      <label class="toproundleft">Name: </label><p class="toproundright">{{name}}</p>
      <label>Surname: </label><p>{{surname}}</p>
      <label>Date of Birth: </label><p>{{dob}}</p>
      <label>Gender: </label><p>{{gender}}</p>
      <label>ID Number: </label><p>{{idCard}}</p>
      <label>Mobile Number: </label><p> + {{mobile}}</p>
      <label>Email: </label><p>{{email}}</p>
      <label>Nationality: </label><p>{{nationality}}</p>
      <label>Club: </label><p>{{club}}</p>
      <label class="bottomroundleft">Status: </label><p class="bottomroundright">{{status}}</p>

      <button  style="margin: 5% 5% 0 0" data-toggle="modal" data-target="#myModal" type="button" @click="deleteMember" class="btn btn-success" data-dismiss="modal">Yes</button>
      <button style="margin: 5% 0 0 0" type="button" @click="back" class="btn btn-danger" data-dismiss="modal">No</button>
    </div>

  </section>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-body">
          <p v-if="updateMode!==true">Member deleted in Firebase</p>>
        </div>
        <div class="modal-footer">
          <button type="button" @click="afterModal" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  data(){
    return{
      name: '',
      surname: '',
      dob: '',
      gender: '',
      idCard: '',
      mobile: '',
      email: '',
      nationality: '',
      club: '',
      status: '',
      updateMode: false
    };
  },

  methods:{
//we can connect this to a button as well
    afterModal(){
      this.$router.push('/');
    },

    back(){
      this.$router.back();
    },


    async deleteMember(){

      const id = this.$route.params.memberId;

      return fetch('https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact/' + id + '.json', {
        method: 'DELETE'
      })
          .then(response => response.json());
    },

    async getData(){
      console.log("Getting data");
      const id = this.$route.params.memberId;
      try{
        const response = await fetch('https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact/' + id + '.json',{
          method: 'GET'
        }) //the below will parse the data thats part of the response if it is in json format; returns a promise
        const responseData = await response.json();
        if(!response.ok){
          console.log("Something went wrong")
        }

        this.memId = id,
            this.idCard = responseData.idCard,
            this.name = responseData.name,
            this.surname = responseData.surname,
            this.dob = responseData.dob,
            this.nationality = responseData.nationality,
            this.gender = responseData.gender,
            this.email = responseData.email,
            this.mobile = responseData.mobile,
            this.status = responseData.status,
            this.club = responseData.club

      }catch(error){
        console.log(error);
      }
    },
  },
  //when component is fully initialised call method
  mounted(){
    this.getData();
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.details{
  width: 40%;
  height: auto;
  margin: 5% 35%
}

label{
  float: left;
  width: 30%;
  padding: 20px 10px;
  background-color: #333;
  color: white;
}

p{
  float: right;
  width: 70%;
  padding: 20px 10px;
  background-color: #ff6961;
  color: white;
}

.toproundleft{
  border-radius: 10px 0 0 0
}

.toproundright{
  border-radius: 0 10px 0 0
}

.bottomroundright{
  border-radius: 0 0 10px 0
}

.bottomroundleft{
  border-radius: 0 0 0 10px
}

button{
  width: 45%;
}
@media only screen and (max-width: 1100px) {
  .details{
    width: 90%;
    margin: 5%;
  }
}
</style>