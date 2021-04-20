<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link  to="/">List of Members</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addMember">Add Members</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/localData">Local Data</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default{
  data(){
    return{
      show: false
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  opacity: 1;
}


ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration:none;
  background: transparent;
  /*border: 1px solid transparent;*/
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active{
  color: #FF5733;
  height: 10px;
}
</style>