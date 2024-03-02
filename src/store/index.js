import { createStore } from 'vuex';

const store = createStore({
    state: {
        // Your state properties go here
        counter: 0,
        userId: "1",
        persons: [
            {
                id: "1", title: "Alice", img: "/perosn__1.jpeg"
                , messages: []
            },
            { id: "2", title: "Bob", img: "/person__2.jpeg", messages: [] },
            { id: "3", title: "Charlie", img: "/person__3.jpeg", messages: [] },
            { id: "4", title: "David", img: "/person__4.jpeg", messages: [] },
            { id: "5", title: "Eva", img: "/person__5.jpeg", messages: [] },
            { id: "6", title: "Frank", img: "/person__6.jpeg", messages: [] },
            { id: "7", title: "Grace", img: "/person__7.jpeg", messages: [] },
            { id: "8", title: "Hank", img: "/person__8.jpeg", messages: [] },
            { id: "9", title: "Ivy", img: "/person__9.jpeg", messages: [] },
        ],
    },
    mutations: {
        addMessage(state, { personId, message }) {
            const person = state.persons.find((p) => p.id === personId);
            if (person) {
                person.messages.push(message);
            }
        },
    },
    actions: {
        // Your actions go here
        asyncIncrement(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
    },
    getters: {
        // Your getters go here
        getCounter: (state) => state.counter,
        getPersons: (state) => state.persons,
        getPersonById: (state) => (id) => {
            return state.persons.find(person => person.id === id);
        },
        getMessagesByPersonId: (state) => (id) => {
            const person = state.persons.find((p) => p.id === id);
            return person ? person.messages : [];
        },
        getCurrentUserId: (state) => state.userId,
    },
});

export default store;
