import axios from 'axios';
import { PlantData } from '../types';

// Base URL for  API
// For Android emulator, use 10.0.2.2 instead of localhost
// For iOS simulator, use localhost
// For physical devices, use your computer's IP address
const API_BASE_URL = "http://10.0.2.2:8080/api"; // Change this based on your setup

// Create an axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000 // 10 seconds timeout
});

// API functions
export const fetchPlantDetails = async (plantId: string): Promise<PlantData> => {
    try {
        const response = await api.get(`/plants/${plantId}`);
        const data = response.data;
        
        // Transform backend data to match your frontend model
        return {
            id: data.id.toString(),
            name: data.name,
            height: data.currentHeight || 0, // Default to 0 if null
            status: data.status || "Good", // Default status
            growthHistory: data.growthHistory || [],
            previousDetails: data.previousDetails?.map((record: any) => ({
                date: record.date,
                status: record.status,
                growth: record.growthAmount || record.growth, // Handle different property names
            })) || [],
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
        return { 
            status: response.data.status || "Good" // Default to "Good" if status is not returned
        };
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

export default api;