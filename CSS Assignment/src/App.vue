<template>
  <the-navigation></the-navigation>
  <router-view v-slot='slotProps'>
    <transition name='fade'>
      <component :is='slotProps.Component'></component>
    </transition>
  </router-view>
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue';


  export default {
    components: {
      TheNavigation
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out, trnasform 0.5s ease;
}
.fade-enter-from, .fade-leave-to  {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-to, .fade-leave-from  {
  opacity: 1;
  transform: translateY(0);
}

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>