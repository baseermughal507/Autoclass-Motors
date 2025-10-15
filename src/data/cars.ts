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
    title: 'Toyota Fortuner 2019',
    main_image: '/cars/fortuner/1.jpg',
    images: [
    "/cars/fortuner/2.jpg",
    "/cars/fortuner/3.jpg",
    "/cars/fortuner/4.jpg",
    '/cars/fortuner/5.jpg',
    '/cars/fortuner/6.jpg',
    '/cars/fortuner/7.jpg',
    '/cars/fortuner/8.jpg',
    '/cars/fortuner/9.jpg'

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
    title: 'Toyota Corolla 2014',
    main_image: '/cars/corolla14/1.jpg',
    images: [
    "/cars/corolla14/2.jpg",
    "/cars/corolla14/3.jpg",
    "/cars/corolla14/4.jpg",
    '/cars/corolla14/5.jpg',
    '/cars/corolla14/6.jpg',
    '/cars/corolla14/7.jpg',
    '/cars/corolla14/8.jpg'

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
    title: 'Toyota Mark X Premium 2010',
    main_image: '/cars/MarkX_premium/1.jpg',
    images: [
    "/cars/MarkX_premium/2.jpg",
    "/cars/MarkX_premium/3.jpg",
    "/cars/MarkX_premium/4.jpg",
    '/cars/MarkX_premium/5.jpg',
    '/cars/MarkX_premium/6.jpg',
    '/cars/MarkX_premium/7.jpg',
    '/cars/MarkX_premium/8.jpg',
    '/cars/MarkX_premium/9.jpg',
    '/cars/MarkX_premium/10.jpg',
    '/cars/MarkX_premium/11.jpg',
    '/cars/MarkX_premium/12.jpg',
    '/cars/MarkX_premium/13.jpg'


  ],
    price: 1850000,
    description: 'Fuel-efficient Suzuki Cultus, perfect for city driving. Low mileage, well maintained with complete service record.',
    short_description: 'Fuel-efficient, low mileage, city perfect',
    is_sold: false,
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
    title: 'Toyota Corolla GLI 2019',
    main_image: '/cars/corolla19/1.jpg',
    images: [
    "/cars/corolla19/2.jpg",
    "/cars/corolla19/3.jpg",
    "/cars/corolla19/4.jpg",
    '/cars/corolla19/5.jpg',
    '/cars/corolla19/6.jpg',
    '/cars/corolla19/7.jpg',
    '/cars/corolla19/8.jpg',
    '/cars/corolla19/9.jpg',
    '/cars/corolla19/10.jpg'

  ],
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
    title: 'Toyota Hilux Vigo Champ 2014',
    main_image: '/cars/hilux14/1.jpg',
    images: [
    "/cars/hilux14/2.jpg",
    "/cars/hilux14/3.jpg",
    "/cars/hilux14/4.jpg",
    '/cars/hilux14/5.jpg',
    '/cars/hilux14/6.jpg'

  ],
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
    title: 'Toyota Revo V 2019',
    main_image: '/cars/Revo_V_19/1.jpg',
    images: [
    "/cars/Revo_V_19/2.jpg",
    "/cars/Revo_V_19/3.jpg",
    "/cars/Revo_V_19/4.jpg",
    '/cars/Revo_V_19/5.jpg',
    '/cars/Revo_V_19/6.jpg',
    '/cars/Revo_V_19/7.jpg',
    '/cars/Revo_V_19/8.jpg',
    '/cars/Revo_V_19/9.jpg'

  ],
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
    title: 'Honda Civic 2018 UG ',
    main_image: '/cars/civic18_AJ76/1.jpg',
    images: [
    "/cars/civic18_AJ76/2.jpg",
    "/cars/civic18_AJ76/3.jpg",
    "/cars/civic18_AJ76/4.jpg",
    '/cars/civic18_AJ76/5.jpg',
    '/cars/civic18_AJ76/6.jpg',
    '/cars/civic18_AJ76/7.jpg',
    '/cars/civic18_AJ76/8.jpg',
    '/cars/civic18_AJ76/9.jpg',
    '/cars/civic18_AJ76/10.jpg',
    '/cars/civic18_AJ76/11.jpg',
    '/cars/civic18_AJ76/12.jpg',
    '/cars/civic18_AJ76/13.jpg',


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    title: 'Toyota Land Cruiser Grand 2005',
    main_image: '/cars/cruiser_Grand/1.jpg',
    images: [
    "/cars/cruiser_Grand/2.jpg",
    "/cars/cruiser_Grand/3.jpg",
    "/cars/cruiser_Grand/4.jpg",
    '/cars/cruiser_Grand/5.jpg',
    '/cars/cruiser_Grand/6.jpg',
    '/cars/cruiser_Grand/7.jpg',
    '/cars/cruiser_Grand/8.jpg',
    '/cars/cruiser_Grand/9.jpg',
    '/cars/cruiser_Grand/10.jpg',
    '/cars/cruiser_Grand/11.jpg'

  ],
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
    title: 'Honda Vezel 2014',
    main_image: '/cars/vezel14/1.jpg',
    images: [
    "/cars/vezel14/2.jpg",
    "/cars/vezel14/3.jpg",
    "/cars/vezel14/4.jpg",
    '/cars/vezel14/5.jpg',
    '/cars/vezel14/6.jpg',
    '/cars/vezel14/7.jpg',
    '/cars/vezel14/8.jpg',
    '/cars/vezel14/9.jpg'

  ],
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
    title: 'Honda Civic 2023 Oriel',
    main_image: '/cars/civic23/1.jpg',
    images: [
    "/cars/civic23/2.jpg",
    "/cars/civic23/3.jpg",
    "/cars/civic23/4.jpg",
    '/cars/civic23/5.jpg',
    '/cars/civic23/6.jpg',
    '/cars/civic23/7.jpg'

  ],
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
    title: 'Honda Civic 2016',
    main_image: '/cars/civic16/1.jpg',
     images: [
    "/cars/civic16/1.jpg",
    "/cars/civic16/2.jpg",
    "/cars/civic16/3.jpg",
    "/cars/civic16/4.jpg",
    "/cars/civic16/5.jpg",
    "/cars/civic16/6.jpg",
    "/cars/civic16/7.jpg",
    "/cars/civic16/8.jpg",
    "/cars/civic16/9.jpg"
   
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
    title: 'Toyota Vigo 2011',
    main_image: '/cars/vigo11/1.jpg',
    images: [
    "/cars/vigo11/2.jpg",
    "/cars/vigo11/3.jpg",
    "/cars/vigo11/4.jpg",
    '/cars/vigo11/5.jpg'

  ],
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
    id: '13',
    title: 'Toyota Vigo 2007 Thailand Variant',
    main_image: '/cars/vigo7_Thai/1.jpg',
    images: [
    "/cars/vigo7_Thai/2.jpg",
    "/cars/vigo7_Thai/3.jpg",
    "/cars/vigo7_Thai/4.jpg"


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '14',
    title: 'Toyota Hilux vigo 2010 PK Variant ',
    main_image: '/cars/vigo10_pk/1.jpg',
    images: [
    "/cars/vigo10_pk/2.jpg",
    "/cars/vigo10_pk/3.jpg",
    "/cars/vigo10_pk/4.jpg",
    '/cars/vigo10_pk/5.jpg'


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '15',
    title: 'Toyota Passo 2010 ',
    main_image: '/cars/passo10/1.jpg',
    images: [
    "/cars/passo10/2.jpg",
    "/cars/passo10/3.jpg",
    "/cars/passo10/4.jpg",
    '/cars/passo10/5.jpg',
    '/cars/passo10/6.jpg',
    '/cars/passo10/7.jpg',
    '/cars/passo10/8.jpg'


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '16',
    title: 'Toyota Passo 2010 ',
    main_image: '/cars/passo10/1.jpg',
    images: [
    "/cars/passo10/2.jpg",
    "/cars/passo10/3.jpg",
    "/cars/passo10/4.jpg",
    '/cars/passo10/5.jpg',
    '/cars/passo10/6.jpg',
    '/cars/passo10/7.jpg',
    '/cars/passo10/8.jpg'


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '17',
    title: 'Honda Civic 2021 Oriel UG ',
    main_image: '/cars/civic21/1.jpg',
    images: [
    "/cars/civic21/2.jpg",
    "/cars/civic21/3.jpg",
    "/cars/civic21/4.jpg",
    '/cars/civic21/5.jpg',
    '/cars/civic21/6.jpg',
    '/cars/civic21/7.jpg',
    '/cars/civic21/8.jpg'


  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '18',
    title: 'Toyota Tundra 2010 ',
    main_image: '/cars/tundra10/1.jpg',
    images: [
    "/cars/tundra10/2.jpg",
    "/cars/tundra10/3.jpg",
    "/cars/tundra10/4.jpg",
    '/cars/tundra10/5.jpg',
    '/cars/tundra10/6.jpg',
    '/cars/tundra10/7.jpg',
    '/cars/tundra10/8.jpg',
    '/cars/tundra10/9.jpg'

  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '19',
    title: 'Honda Civic 2017 ',
    main_image: '/cars/civic17_hardtop/1.jpg',
    images: [
    "/cars/civic17_hardtop/2.jpg",
    "/cars/civic17_hardtop/3.jpg",
    "/cars/civic17_hardtop/4.jpg",
    '/cars/civic17_hardtop/5.jpg',
    '/cars/civic17_hardtop/6.jpg',
    '/cars/civic17_hardtop/7.jpg',
    '/cars/civic17_hardtop/8.jpg',
    '/cars/civic17_hardtop/9.jpg',
    '/cars/civic17_hardtop/10.jpg',
    '/cars/civic17_hardtop/11.jpg',
    '/cars/civic17_hardtop/12.jpg',
    '/cars/civic17_hardtop/13.jpg',
    '/cars/civic17_hardtop/14.jpg',
    '/cars/civic17_hardtop/15.jpg',
    '/cars/civic17_hardtop/16.jpg'

  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '20',
    title: 'Honda Civic 2018 Oriel  ',
    main_image: '/cars/civic18/1.jpg',
    images: [
    "/cars/civic18/2.jpg",
    "/cars/civic18/3.jpg",
    "/cars/civic18/4.jpg",
    '/cars/civic18/5.jpg',
    '/cars/civic18/6.jpg',
    '/cars/civic18/7.jpg'
  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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
    id: '21',
    title: 'Toyota Revo V 2022  ',
    main_image: '/cars/revo22_V/1.jpg',
    images: [
    "/cars/revo22_V/2.jpg",
    "/cars/revo22_V/3.jpg",
    "/cars/revo22_V/4.jpg"

  ],
    price: 7200000,
    description: 'Rugged Toyota Hilux pickup, perfect for business and adventure. Powerful engine, excellent condition.',
    short_description: 'Powerful pickup, business ready',
    is_sold: false,
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

    
  }

];
