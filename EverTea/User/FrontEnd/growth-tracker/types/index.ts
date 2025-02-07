// types/index.ts
export interface GrowthRecord {
    date: string;
    status: 'Good' | 'Warning';
    growth: string;
  }
  
  export interface PlantData {
    id: string;
    name: string;
    height: number;
    status: 'Good' | 'Warning';
    growthHistory: number[];
    previousDetails: GrowthRecord[];
  }