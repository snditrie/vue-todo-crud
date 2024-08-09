<template>
  <div>
    <todo-form :todo="currentTodo" :editMode="editMode" @save="saveTodo" />
    <todo-list :todos="todos" @edit="editTodo" @delete="deleteTodo" />
    <button @click="prevPage" :disabled="!hasPreviousPage">Previous</button>
    <button @click="nextPage" :disabled="!hasNextPage">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return {
      currentTodo: {},
      editMode: false,
    };
  },
  computed: {
    ...mapGetters([
      "todos",
      "totalTodos",
      "currentPage",
      "hasNextPage",
      "hasPreviousPage",
    ]),
  },
  methods: {
    ...mapActions(["loadTodos", "addTodo", "updateTodo", "deleteTodo"]),
    saveTodo(todo) {
      if (this.editMode) {
        this.updateTodo({ id: todo.id, todo });
      } else {
        this.addTodo(todo);
      }
      this.currentTodo = {};
      this.editMode = false;
    },
    editTodo(todo) {
      this.currentTodo = { ...todo };
      this.editMode = true;
    },
    async prevPage() {
      if (this.hasPreviousPage) {
        this.$store.commit("SET_CURRENT_PAGE", this.currentPage - 1);
        await this.loadTodos();
      }
    },
    async nextPage() {
      if (this.hasNextPage) {
        this.$store.commit("SET_CURRENT_PAGE", this.currentPage + 1);
        await this.loadTodos();
      }
    },
  },
  created() {
    this.loadTodos();
  },
};
</script>
