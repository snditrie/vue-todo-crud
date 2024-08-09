<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <router-link :to="{ name: 'TodoDetail', params: { id: todo.id } }">
          {{ todo.title }}
        </router-link>
        <button @click="edit(todo)">Edit</button>
        <button @click="delete todo.id">Delete</button>
      </li>
    </ul>
    <button :disabled="currentPage === 1" @click="previousPage">
      Previous
    </button>
    <button :disabled="currentPage === totalPages" @click="nextPage">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["todos", "currentPage", "totalPages"]),
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
    async edit(todo) {
      this.$router.push({ name: "EditTodo", params: { id: todo.id } });
    },
    async delete(id) {
      await this.deleteTodo(id);
    },
    async previousPage() {
      if (this.currentPage > 1) {
        await this.fetchTodos({ page: this.currentPage - 1, limit: 10 });
      }
    },
    async nextPage() {
      if (this.currentPage < this.totalPages) {
        await this.fetchTodos({ page: this.currentPage + 1, limit: 10 });
      }
    },
  },
  created() {
    this.fetchTodos({ page: 1, limit: 10 });
  },
};
</script>
