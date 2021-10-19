import axios from "axios";

const state = {
    counter: 0,
}
const getters = {

}
const actions = {
    async addRandomNumber (context) {
        const data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
        context.commit("addToCounter", data.data)
    }
}
const mutations = {
    addToCounter (state, payload) {
        state.counter = state.counter + payload
    },
    subtractFromCounter (state, payload) {
        state.counter = state.counter - payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}