<template>
  <section>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Profile Image</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="player in players" :key="player.id">
        <td>{{player.iD}}</td>
        <td>{{player.name}}</td>
        <td>{{player.surname}}</td>
        <td><img :src=player.profileImage></td>
      </tr>
      </tbody>
    </table>
   <div class='row' id='buttonRow'>
    <button @click="back" type="button" class="btn btn-secondary">Back</button>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      players:[
        {
          id:1,
          iD:111111,
          name:"Ryan",
          surname:"Cassar",
          profileImage: require("../images/image1.jpg")
        },

        {
          id:2,
          iD:222222,
          name:"John",
          surname:"Borg",
          profileImage: require("../images/image2.jpg")
        },

        {
          id:3,
          iD:333333,
          name:"Jack",
          surname:"Smith",
          profileImage: require("../images/image3.jpg")
        },
      ]
    };
  },

  props:{
    iD:{
      type: Number,
      required:true
    },
    name:{
      type:String,
      required: true
    },
    surname:{
      type:String,
      required:true
    },
    profileImage:{
      type:String
    }
  },

  methods:{
    back(){
      this.$router.back();
    }
  }
};
<img src='../images/image1.jpg' height='4744' width='3163' />,
<img src='../images/image2.jpg' height='4744' width='3163' />,
<img src='../images/image3.jpg' height='4744' width='3163' />
</script>

<style scoped>
img{
width: 100px;
  height: 100px;
}
#buttonRow{
  position: relative;
  left: 47%;
}

section{
  position: relative;
  width: 70%;
  left: 15%;
  justify-items: center;

}
</style>