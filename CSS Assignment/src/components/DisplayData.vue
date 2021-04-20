<template>
  <section v-if="this.results.length" ref='table'>
    <div class='table-responsive'>
    <table class="table" id='tableRecords'>
      <thead>
      <tr>
        <th scope="col">View</th>
        <th scope="col">Identification</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="res in results" :key="res.id">
        <td><button @click="viewMember(res)" class='btn btn-primary'>View</button></td>
        <td>{{res.idCard}}</td>
        <td>{{res.name}}</td>
        <td>{{res.surname}}</td>
        <td>{{res.email}}</td>
        <td><button @click="updateMember(res)" class='btn btn-primary'>Update</button></td>
        <td><button @click="deleteMember(res)" class="btn btn-danger">Delete</button></td>
        <!--<delete-member :visable="visable" @delete-data="deleteMember(res.id)"></delete-member>-->
      </tr>
      </tbody>
    </table>
    </div>
  </section>
  <section v-else-if="!this.results.length">
    No data to show
  </section>
</template>

<script>


export default {
  data(){
    return{
      results: [],
      deletingId: '',
      isDeleting: false,
      reload: 0,
      deleteIndex: 0,
    };
  },

  methods:{
    updateMember(member){
      console.log(member);
      const memId = member.id;
      this.$router.push('/updateMember/' + memId);
    },
    viewMember(member){
      console.log(member);
      const memId = member.id;
      this.$router.push('/viewMember/' + memId);
    },
    deleteMember(member){
      console.log(member);
      /*this.deleteIndex = res.index;
      this.isDeleting = true;
      this.deletingId = res.id;
      deleteMember.methods.showModal(res.id);*/
      const memId = member.id;
      this.$router.push('/deleteMember/' + memId);
    },
    deleteRowId(id) {
      //console.log("Deleting row 84: " + id);
      document.getElementById("tableRecords").deleteRow(id);
    },

    async getData(){
      console.log("Getting data");
      try{
        const response = await fetch("https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact.json",{
          method: 'GET'
        })
        const responseData = await response.json();
        if(!response.ok){
          console.log("Something went wrong")
        }
        const results = [];
        for (const id in responseData){
          results.push({
            id:id,
            idCard: responseData[id].idCard,
            name: responseData[id].name,
            surname: responseData[id].surname,
            email:responseData[id].email,
          });
          this.results = results;
        }
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
section {
  margin: 2rem auto;
  max-width: 80rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}

.btn-secondary{
  background-color: #ff0000;
}

@media only screen and (max-width: 812px){
    section{
      width: 80%;

    }
}


</style>