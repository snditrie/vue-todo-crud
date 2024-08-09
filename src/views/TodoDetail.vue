<template>
  <div v-if="todo">
    <h2>Todo Detail</h2>
    <p><strong>ID:</strong> {{ todo.id }}</p>
    <p><strong>Title:</strong> {{ todo.title }}</p>
    <p><strong>Completed:</strong> {{ todo.completed ? "Yes" : "No" }}</p>
    <router-link to="/">Back to List</router-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["todoDetail"]),
  },
  methods: {
    ...mapActions(["loadTodoDetail"]),
    fetchTodoDetail() {
      const id = this.$route.params.id;
      this.loadTodoDetail(id);
    },
  },
  created() {
    this.fetchTodoDetail();
  },
};
</script>
