const state = {
    items: [
        {
            name: 'fitfood',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Donec quam felis, ultricies nec!',
            title: 'FitFood',
            pictures:['./../assets/img/joey.jpg', './../assets/img/joey.jpg'],
            projectButtons:[
                {
                    buttonText: 'Bekijk api op Github',
                    buttonLink:"https://github.com/joeydeckers/FitFood_api",
                },
            ],
        },
        {
            name: 'codingquiz',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Donec quam felis, ultricies nec!',
            title: 'Codingquiz',
            pictures:['./../assets/img/joey.jpg', './../assets/img/joey.jpg'],
            projectButtons:[
                {
                    buttonText: 'Bekijk api op Github',
                    buttonLink:"https://github.com/joeydeckers/FitFood_api",
                },
            ],
        }
    ]
};

const getters = {
    // allTodos: (state    ) => {
    //     return state.items;
    //     //return state.todos.filter(todo => todo.name);
    // }
    getAllProjects:(state) =>{
        return state.items;
    },
    getSpecificItem(state){
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