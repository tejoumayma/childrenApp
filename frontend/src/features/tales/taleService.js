import axios from "axios";

const API_URL = "/api/tale/";

// Create new tale
const createTale = async (taleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, taleData, config);
  return response.data;
};

// Get users tales
const getTales = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete tale
const deleteTale = async (taleId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + taleId, config);
  return response.data;
};

const taleService = {
  createTale,
  getTales,
  deleteTale,
};

export default taleService;
