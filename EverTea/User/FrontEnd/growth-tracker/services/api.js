// services/api.js
import axios from 'axios';

// Base URL of your backend
const API_BASE_URL = 'http://your-backend-url:8080';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const growthTrackerApi = {
  // Check growth status
  checkGrowth: async (plantationId, month, height) => {
    try {
      const response = await apiClient.post('/growth/check', {
        plantationID: plantationId,
        month: month,
        height: height,
      });
      return response.data;
    } catch (error) {
      console.error('Error checking growth:', error);
      throw error;
    }
  },
  
  // Get growth logs for a plantation
  getGrowthLogs: async (plantationId) => {
    try {
      const response = await apiClient.get(`/growth/logs/${plantationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching growth logs:', error);
      throw error;
    }
  },
};