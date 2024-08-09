import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (page, limit) => {
  try {
    const response = await axios.get(API_URL, {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
