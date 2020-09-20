import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaed: true,
  state: {
    name: 'farhan ammar',
    token: localStorage.getItem('token') || null
  },
  getters: {
    isLogin (state) {
      if (state.token !== null) {
        return true
      } else {
        return false
      }
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/user/login', payload).then(response => {
          localStorage.setItem('token', response.data.tokenLogin)
          resolve(response.data.message)
          console.log(response.data.message)
        }).catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('gagal login')
        })
      })
    },
    logout () {
      return new Promise((resolve) => {
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
})
