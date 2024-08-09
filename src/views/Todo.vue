import { fetchTodos, addTodo, updateTodo, deleteTodo } from '@/api/todo.js'

<template>
  <div>
    <todo-form :todo="currentTodo" :editMode="editMode" @save="saveTodo" />
    <todo-list
      :todos="todos"
      :totalTodos="totalTodos"
      @edit="editTodo"
      @delete="deleteTodo"
    />
  </div>
</template>

<script>
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "@/api/todo.js";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return {
      todos: [],
      totalTodos: 0,
      currentTodo: {},
      editMode: false,
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    async loadTodos() {
      try {
        console.log("Fetching todos...");
        this.todos = await this.$http.get("/todos");
        this.totalTodos = this.todos.length;
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    },
    async saveTodo(todo) {
      try {
        console.log("Saving todo...", todo);
        if (this.editMode) {
          await this.$http.put(`/todos/${todo.id}`, todo);
        } else {
          await this.$http.post("/todos", todo);
        }
        this.loadTodos();
        this.currentTodo = {};
        this.editMode = false;
      } catch (error) {
        console.error("Error saving todo:", error);
      }
    },
    async deleteTodo(id) {
      try {
        console.log("Deleting todo with ID:", id);
        await this.$http.delete(`/todos/${id}`);
        this.loadTodos();
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
    editTodo(todo) {
      this.currentTodo = { ...todo };
      this.editMode = true;
    },
  },
};
</script>
