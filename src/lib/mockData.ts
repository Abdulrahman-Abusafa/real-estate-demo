export interface Agent {
    id: string;
    name: string;
    avatar: string; // URL
    phone: string;
    whatsapp: string;
    verified: boolean;
}

export interface Property {
    id: string;
    title: string;
    titleAr: string;
    price: number;
    location: string;
    locationAr: string;
    type: "Rent" | "Buy" | "Commercial";
    bedrooms: number;
    bathrooms: number;
    area: number; // m2
    images: string[];
    agent: Agent;
    isVerified: boolean;
    isTruCheck: boolean;
    features: string[];
}

export const PROPERTIES: Property[] = [
    {
        id: "1",
        title: "Luxury Villa in Al Malqa",
        titleAr: "فيلا فاخرة في الملقا",
        price: 3500000,
        location: "Al Malqa, Riyadh",
        locationAr: "الملقا، الرياض",
        type: "Buy",
        bedrooms: 5,
        bathrooms: 6,
        area: 450,
        images: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"],
        agent: {
            id: "a1",
            name: "Ahmed Al-Saud",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
            phone: "+966500000001",
            whatsapp: "966500000001",
            verified: true,
        },
        isVerified: true,
        isTruCheck: true,
        features: ["Pool", "Smart Home", "Garden"],
    },
    {
        id: "2",
        title: "Modern Apartment in Jeddah",
        titleAr: "شقة حديثة في جدة",
        price: 85000,
        location: "Al Rawdah, Jeddah",
        locationAr: "الروضة، جدة",
        type: "Rent",
        bedrooms: 3,
        bathrooms: 3,
        area: 180,
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"],
        agent: {
            id: "a2",
            name: "Sara Khalil",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
            phone: "+966500000002",
            whatsapp: "966500000002",
            verified: true,
        },
        isVerified: true,
        isTruCheck: false,
        features: ["Gym", "Parking", "Security"],
    },
    {
        id: "3",
        title: "Commercial Office Space",
        titleAr: "مساحة مكتبية تجارية",
        price: 120000,
        location: "Olaya, Riyadh",
        locationAr: "العليا، الرياض",
        type: "Commercial",
        bedrooms: 0,
        bathrooms: 2,
        area: 200,
        images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"],
        agent: {
            id: "a3",
            name: "Riyadh Real Estate",
            avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop",
            phone: "+966500000003",
            whatsapp: "966500000003",
            verified: true,
        },
        isVerified: false,
        isTruCheck: false,
        features: ["Central AC", "View"],
    },
    {
        id: "4",
        title: "Cozy Studio in Downtown",
        titleAr: "ستوديو مريح في وسط المدينة",
        price: 45000,
        location: "Al Murabba, Riyadh",
        locationAr: "المربع، الرياض",
        type: "Rent",
        bedrooms: 1,
        bathrooms: 1,
        area: 60,
        images: ["https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2071&auto=format&fit=crop"],
        agent: {
            id: "a1", // Same agent
            name: "Ahmed Al-Saud",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
            phone: "+966500000001",
            whatsapp: "966500000001",
            verified: true,
        },
        isVerified: true,
        isTruCheck: true,
        features: ["Furnished", "Near Metro"],
    },
];
