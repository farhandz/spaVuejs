import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'farhan ammar'
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/user/login', payload).then(response => {
          console.log(response.data)
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
})
