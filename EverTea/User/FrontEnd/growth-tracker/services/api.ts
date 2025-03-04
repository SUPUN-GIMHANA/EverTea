import axios from 'axios';
import { PlantData, GrowthRecord } from '../types';

//Base URL for your API
const API_BASE_URL = "http://localhost:8080/api";

//create an axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//API function
export const fetchPlantDetails  = async (plantId: string): Promise<PlantData> => {
    try {
        const response = await api.get(`/plants/${plantId}`);
        const data = response.data;
        
        // Transform backend data to match your frontend model
        return {
          id: data.id,
          name: data.name,
          height: data.currentHeight,
          status: data.status,
          growthHistory: data.growthHistory,
          previousDetails: data.previousDetails.map((record: any) => ({
            date: record.date,
            status: record.status,
            growth: record.growth,
          })),
        };
      } catch (error) {
        console.error('Error fetching plant details:', error);
        throw error;
      } 
};

// Update plant height
export const updatePlantHeight = async (plantId: string, height: number): Promise<{status: string}> => {
    try {
      const response = await api.put(`/plants/${plantId}/height`, { height });
      return { status: response.data.status };
    } catch (error) {
      console.error('Error updating plant height:', error);
      throw error;
    }
};

// Check plant status based on current height (without updating)
export const checkPlantStatus = async (plantId: string, height: number): Promise<string> => {
    try {
      const response = await api.get(`/plants/${plantId}/status?height=${height}`);
      return response.data; // Status string: "Good" or "Warning"
    } catch (error) {
      console.error('Error checking plant status:', error);
      throw error;
    }
};


  


export default api