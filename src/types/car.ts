export interface Car {
  id: number;
  name: string;            // e.g., "Toyota Corolla 2015"
  price: number;           // e.g., 2500000
  year: number;            // e.g., 2015
  model: string;           // e.g., "GLi"
  mileage: string;         // e.g., "85,000 km"
  fuelType: string;        // e.g., "Petrol"
  transmission: string;    // e.g., "Automatic"
  engine: string;          // e.g., "1.6L"
  color: string;           // e.g., "White"
  brand: string;           // e.g., "Toyota"
  condition: string;       // e.g., "Used"
  location: string;        // e.g., "Lahore"
  description: string;     // Short description
  image: string;           // Image URL or local path
}

export interface CarFilters {
  search: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
}
