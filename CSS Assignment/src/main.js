import { createApp } from 'vue';
import App from './App.vue';
import { VuelidatePlugin } from '@vuelidate/core'
// register router which was installed and define the routes we want to have in app
import { createRouter, createWebHistory } from 'vue-router'
import AddMember from './components/AddMember.vue'
import DisplayData from './components/DisplayData.vue'
import UpdateMember from './components/UpdateMember';
import ViewMember from './components/ViewMember.vue'
import DeleteMember from './components/DeleteMember';
import LocalData from './components/LocalData';



const router = createRouter({
  // used to handle the previous pages visited e.g. back button (using the browser built-in support)
  history: createWebHistory(),
  routes: [
    { path: '/', component: DisplayData },
    { path: '/addMember', component: AddMember },
    { path:'/updateMember/:memberId', component: UpdateMember },
    { path:'/deleteMember/:memberId', component: DeleteMember },
    { path:'/viewMember/:memberId', component: ViewMember },
    { path:'/localData/', component: LocalData },

  ]
})
const app = createApp(App)
app.use(router)
app.use(VuelidatePlugin)

app.mount('#app')