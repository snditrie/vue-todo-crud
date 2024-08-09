<template>
  <div>
    <input v-model="form.title" placeholder="Enter todo title" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    editMode: Boolean,
  },
  data() {
    return {
      form: { ...this.todo },
    };
  },
  methods: {
    save() {
      this.$emit("save", this.form);
    },
  },
  watch: {
    todo(newTodo) {
      this.form = { ...newTodo };
    },
  },
};
</script>
