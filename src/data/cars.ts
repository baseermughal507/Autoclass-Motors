export interface Car {
  id: string;
  title: string;
  main_image: string;
  images?: string[]; 
  price: number;
  description: string;
  short_description: string;
  is_sold: boolean;
  year: number;
  mileage: string;
  fuel_type: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'CNG' | 'LPG';
  transmission: 'Automatic' | 'Manual';
  city: string;
  province: string;
  color: string;
  assembly: 'Local' | 'Imported';
  engine_capacity: string;
  body_type: 'Sedan' | 'Hatchback' | 'SUV' | 'Crossover' | 'Coupe' | 'Convertible' | 'Wagon' | 'Van' | 'Pickup';
}

export const cars: Car[] = [
  {
    id: '1',
    title: 'Toyota Corolla 2012',
    main_image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
     images: [
    "/cars/corolla1.jpg",
    "/cars/corolla2.jpg",
    "/cars/corolla2.jpg"
  ],
    price: 2500000,
    description: 'Well maintained Toyota Corolla in excellent condition. Regular service history, accident-free. Perfect family car with great fuel economy.',
    short_description: 'Well maintained, excellent condition, accident-free',
    is_sold: false,
    year: 2012,
    mileage: '85,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Karachi',
    province: 'Sindh',
    color: 'Silver',
    assembly: 'Local',
    engine_capacity: '1800cc',
    body_type: 'Sedan',
    
  },
  {
    id: '2',
    title: 'Honda Civic 2016',
    main_image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
     images: [
    "/cars/corolla1.jpg",
    "/cars/corolla2.jpg",
    "/cars/corolla2.jpg",
    "/cars/corolla1.jpg"
  ],
    price: 4200000,
    description: 'Stunning Honda Civic with sunroof, leather seats, and premium sound system. Single owner, all original documents.',
    short_description: 'Premium features, single owner, sunroof',
    is_sold: false,
    year: 2016,
    mileage: '62,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Lahore',
    province: 'Punjab',
    color: 'Black',
    assembly: 'Local',
    engine_capacity: '1800cc',
    body_type: 'Sedan',
    
  },
  {
    id: '3',
    title: 'Suzuki Cultus 2018',
    main_image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    price: 1850000,
    description: 'Fuel-efficient Suzuki Cultus, perfect for city driving. Low mileage, well maintained with complete service record.',
    short_description: 'Fuel-efficient, low mileage, city perfect',
    is_sold: true,
    year: 2018,
    mileage: '45,000 km',
    fuel_type: 'Petrol',
    transmission: 'Manual',
    city: 'Islamabad',
    province: 'Federal',
    color: 'White',
    assembly: 'Local',
    engine_capacity: '1000cc',
    body_type: 'Hatchback'
  },
  {
    id: '4',
    title: 'Toyota Fortuner 2019',
    main_image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    price: 8500000,
    description: 'Powerful Toyota Fortuner 4x4 with all premium features. Perfect for long drives and family trips. Pristine condition.',
    short_description: '4x4, premium SUV, pristine condition',
    is_sold: false,
    year: 2019,
    mileage: '38,000 km',
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    city: 'Karachi',
    province: 'Sindh',
    color: 'Pearl White',
    assembly: 'Imported',
    engine_capacity: '2700cc',
    body_type: 'SUV'

  },
  {
    id: '5',
    title: 'Honda City 2015',
    main_image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    price: 3100000,
    description: 'Reliable Honda City with excellent fuel economy. Well maintained with complete service history and original paint.',
    short_description: 'Excellent fuel economy, original paint',
    is_sold: false,
    year: 2015,
    mileage: '72,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Faisalabad',
    province: 'Punjab',
    color: 'Gray',
    assembly: 'Local',
    engine_capacity: '1500cc',
    body_type: 'Sedan'
  },
  {
    id: '6',
    title: 'Suzuki Alto 2020',
    main_image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
    price: 1650000,
    description: 'Brand new condition Suzuki Alto, barely used. Perfect first car with excellent fuel average and easy maintenance.',
    short_description: 'Like new, perfect first car, fuel efficient',
    is_sold: false,
    year: 2020,
    mileage: '18,000 km',
    fuel_type: 'Petrol',
    transmission: 'Manual',
    city: 'Multan',
    province: 'Punjab',
    color: 'Red',
    assembly: 'Local',
    engine_capacity: '660cc',
    body_type: 'Hatchback'
  },
  {
    id: '7',
    title: 'Toyota Hilux 2017',
    main_image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: true,
    year: 2017,
    mileage: '95,000 km',
    fuel_type: 'Diesel',
    transmission: 'Manual',
    city: 'Peshawar',
    province: 'KPK',
    color: 'Silver',
    assembly: 'Local',
    engine_capacity: '2800cc',
    body_type: 'Pickup'

    
  },
  {
    id: '8',
    title: 'Honda BR-V 2018',
    main_image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    price: 3900000,
    description: 'Spacious 7-seater Honda BR-V, ideal for large families. Comfortable, fuel-efficient, and well maintained.',
    short_description: '7-seater, spacious, family perfect',
    is_sold: false,
    year: 2018,
    mileage: '55,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Lahore',
    province: 'Punjab',
    color: 'Blue',
    assembly: 'Local',
    engine_capacity: '1500cc',
    body_type: 'SUV'

 
  },
  {
    id: '9',
    title: 'Suzuki Wagon R 2019',
    main_image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    price: 1950000,
    description: 'Practical Suzuki Wagon R with spacious interior despite compact size. Great for city driving and parking.',
    short_description: 'Compact but spacious, city friendly',
    is_sold: false,
    year: 2019,
    mileage: '42,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Karachi',
    province: 'Sindh',
    color: 'Silver',
    assembly: 'Local',
    engine_capacity: '1000cc',
    body_type: 'Hatchback',

   
  },
  {
    id: '10',
    title: 'Toyota Prado 2015',
    main_image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
    price: 12500000,
    description: 'Luxury Toyota Prado with all premium features. Leather interior, sunroof, navigation system. Imported and pristine.',
    short_description: 'Luxury SUV, all premium features, imported',
    is_sold: false,
    year: 2015,
    mileage: '68,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Islamabad',
    province: 'Federal',
    color: 'Black',
    assembly: 'Imported',
    engine_capacity: '4000cc',
    body_type: 'SUV'
  },
    {
    id: '11',
    title: 'Toyota Fortuner 2019',
    main_image: '/cars/fortuner/1.jpg',
     images: [
    "/cars/fortuner/1.jpg",
    "/cars/fortuner/2.jpg",
    "/cars/fortuner/3.jpg",
    "/cars/fortuner/4.jpg",
    "/cars/fortuner/5.jpg",
    "/cars/fortuner/6.jpg",
    "/cars/fortuner/7.jpg",
    "/cars/fortuner/8.jpg",
    "/cars/fortuner/9.jpg"
   
  ],
    price: 10500000,
    description: 'Toyota Fortuner 2019 2.8D Sigma Islamabad Registered',
    short_description: 'Well maintained, excellent condition, accident-free',
    is_sold: false,
    year: 2019,
    mileage: '105000 km',
    fuel_type: 'Diesel',
    transmission: 'Automatic',
    city: 'Islamabad',
    province: 'Pakistan',
    color: 'White',
    assembly: 'Local',
    engine_capacity: '2.8cc',
    body_type: 'SUV',
    
  },
  {
    id: '12',
    title: 'Suzuki Wagon R 2019',
    main_image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    price: 1950000,
    description: 'Practical Suzuki Wagon R with spacious interior despite compact size. Great for city driving and parking.',
    short_description: 'Compact but spacious, city friendly',
    is_sold: false,
    year: 2019,
    mileage: '42,000 km',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    city: 'Karachi',
    province: 'Sindh',
    color: 'Silver',
    assembly: 'Local',
    engine_capacity: '1000cc',
    body_type: 'Hatchback',

   
  }
];
