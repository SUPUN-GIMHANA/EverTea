// types/index.ts
export interface GrowthRecord {
    date: string;
    status: string;
    growth: string;
  }
  
  export interface PlantData {
    id: string | number;
    name: string;
    height: number;
    status: string;
    growthHistory: number[];
    previousDetails: GrowthRecord[];
  }