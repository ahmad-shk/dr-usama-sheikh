import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Common Error Handler
const handleError = (error, endpoint) => {
  console.error(`API call failed [${endpoint}]:`, error);
  throw error.response ? error.response.data : error;
};

// GET all
export const getAll = async (endpoint, config = {}) => {
  try {
    const res = await api.get(endpoint, config);
    return res.data;
  } catch (err) {
    handleError(err, endpoint);
  }
};

// GET by ID
export const getById = async (endpoint, id, config = {}) => {
  try {
    const res = await api.get(`${endpoint}/${id}`, config);
    return res.data;
  } catch (err) {
    handleError(err, `${endpoint}/${id}`);
  }
};

// POST (Create)
export const createData = async (endpoint, body, config = {}) => {
  try {
    const res = await api.post(endpoint, body, config);
    return res.data;
  } catch (err) {
    handleError(err, endpoint);
  }
};

// PUT (Update)
export const updateData = async (endpoint, id, body, config = {}) => {
  try {
    const res = await api.put(`${endpoint}/${id}`, body, config);
    return res.data;
  } catch (err) {
    handleError(err, `${endpoint}/${id}`);
  }
};

// PATCH (Partial Update)
export const patchData = async (endpoint, id, body, config = {}) => {
  try {
    const res = await api.patch(`${endpoint}/${id}`, body, config);
    return res.data;
  } catch (err) {
    handleError(err, `${endpoint}/${id}`);
  }
};

// DELETE (by ID)
export const deleteById = async (endpoint, id, config = {}) => {
  try {
    const res = await api.delete(`${endpoint}/${id}`, config);
    return res.data;
  } catch (err) {
    handleError(err, `${endpoint}/${id}`);
  }
};
