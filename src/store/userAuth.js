import axios from "axios";
import router from "../router";

export default {
    state() {
        return {
            users: {}
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        updateUsers(state, data) {
            state.users = data
        }
    },
    actions: {
        register({commit}, params) {
            axios.post('http://localhost:3000/register', params)
                .then(res => {
                    localStorage.setItem('accessToken', res.data.accessToken)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    router.push({
                        name: 'login_page'
                    })
                })
        },
        login({commit}, params) {
            axios.post('http://localhost:3000/login', params)
                .then(res => {
                    commit('updateUsers', res.data.user)
                    localStorage.setItem('accessToken', res.data.accessToken)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    router.push({
                        name: 'home_page'
                    })
                })
        }
    }

}
