// import { createStore } from 'vuex';
// import { fetchTodos, addTodo, updateTodo, deleteTodo } from '@/api/todo'; // Ensure the correct path
// import { API_URL } from '@/api/todo'; // Import API_URL

// const store = createStore({
//   state() {
//     return {
//       todos: [],
//       todoDetail: null,
//       currentPage: 1,
//       totalPages: 1,
//     };
//   },
//   mutations: {
//     setTodos(state, todos) {
//       state.todos = todos;
//     },
//     setTodoDetail(state, todo) {
//       state.todoDetail = todo;
//     },
//     setCurrentPage(state, page) {
//       state.currentPage = page;
//     },
//     setTotalPages(state, totalPages) {
//       state.totalPages = totalPages;
//     },
//     clearTodoDetail(state) {
//       state.todoDetail = null;
//     },
//   },
//   actions: {
//     async fetchTodos({ commit, state }, { page, limit }) {
//       try {
//         const response = await fetchTodos(page, limit);
//         commit('setTodos', response);
//         commit('setCurrentPage', page);
//         commit('setTotalPages', Math.ceil(200 / limit)); // Example total count: 200
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     },
//     async addTodo({ dispatch }, todo) {
//       try {
//         await addTodo(todo);
//         dispatch('fetchTodos', { page: 1, limit: 10 }); // Refresh the list after adding
//       } catch (error) {
//         console.error('Error adding todo:', error);
//       }
//     },
//     async updateTodo({ dispatch }, { id, todo }) {
//       try {
//         await updateTodo(id, todo);
//         dispatch('fetchTodos', { page: 1, limit: 10 }); // Refresh the list after updating
//       } catch (error) {
//         console.error('Error updating todo:', error);
//       }
//     },
//     async deleteTodo({ dispatch }, id) {
//       try {
//         await deleteTodo(id);
//         dispatch('fetchTodos', { page: 1, limit: 10 }); // Refresh the list after deleting
//       } catch (error) {
//         console.error('Error deleting todo:', error);
//       }
//     },
//     async loadTodoDetail({ commit }, id) {
//       try {
//         const response = await fetch(`${API_URL}/${id}`);
//         const data = await response.json();
//         commit('setTodoDetail', data);
//       } catch (error) {
//         console.error('Error loading todo detail:', error);
//       }
//     },
//   },
//   getters: {
//     todos(state) {
//       return state.todos;
//     },
//     todoDetail(state) {
//       return state.todoDetail;
//     },
//     currentPage(state) {
//       return state.currentPage;
//     },
//     totalPages(state) {
//       return state.totalPages;
//     },
//   },
// });

// export default store;
