import counter from "./counter";

const state = {
    history: [],
}
const getters = {
    activeIndexes: (state) => (payload) => {
        let indexes = []
        state.history.forEach((number, index) => {
            if (number === payload)
            {
                indexes.push(index)
            }
        })
        return indexes
    }
}
const actions = {

}
const mutations = {
    addToCounter (state) {
        state.history.push(counter.state.counter)
    },
    subtractFromCounter (state) {
        state.history.push(counter.state.counter)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}