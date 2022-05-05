import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPosts = async () => {
  try {
    const response = await instance.get("/posts");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const postPosts = async (data) => {
  try {
    const response = await instance.post("/posts", data);
    console.log(response);
    fetchPosts();
  } catch (error) {
    console.log(error);
  }
};
