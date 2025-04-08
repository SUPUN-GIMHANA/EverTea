// // services/api.js
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8081/api/v1/viewPlantation';

// export const getPlantations = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/get-plantation`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching plantations:', error);
//     throw error;
//   }
// };

// export const savePlantation = async (plantationData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/save-plantation`, plantationData);
//     return response.data;
//   } catch (error) {
//     console.error('Error saving plantation:', error);
//     throw error;
//   }
// };

// export const deletePlantation = async (plantationId) => {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/delete-plantation/${plantationId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting plantation:', error);
//     throw error;
//   }
// };