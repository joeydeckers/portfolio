const state = {
    items: [
        {
            name: 'fitfood',
            text: 'hallo!'
        }
    ]
};

const getters = {
    // allTodos: (state    ) => {
    //     return state.items;
    //     //return state.todos.filter(todo => todo.name);
    // }
    item(state){
        return projectName => state.items.filter(item => {
            return item.name === projectName;
        })
    }
};

const actions = {

};

const mutations = {
 
};

export default {
    state,
    getters,
    actions,
    mutations
}