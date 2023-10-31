import axios from "axios";

export const loadUserApi = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/posts");

export const createUserApi = async (user) =>
  await axios.post("https://jsonplaceholder.typicode.com/posts", user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${userId}`, userId);

export const searchUserApi = async (query) =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`);

