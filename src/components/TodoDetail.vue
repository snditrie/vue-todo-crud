<template>
  <div v-if="todoDetail">
    <h2>Todo Detail</h2>
    <p><strong>ID:</strong> {{ todoDetail.id }}</p>
    <p><strong>Title:</strong> {{ todoDetail.title }}</p>
    <p><strong>Completed:</strong> {{ todoDetail.completed ? "Yes" : "No" }}</p>
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
  },
  created() {
    const id = this.$route.params.id;
    this.loadTodoDetail(id);
  },
};
</script>
