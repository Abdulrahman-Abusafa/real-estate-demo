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
        images: ["/placeholder/villa1.jpg"],
        agent: {
            id: "a1",
            name: "Ahmed Al-Saud",
            avatar: "",
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
        images: ["/placeholder/apt1.jpg"],
        agent: {
            id: "a2",
            name: "Sara Khalil",
            avatar: "",
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
        images: ["/placeholder/office1.jpg"],
        agent: {
            id: "a3",
            name: "Riyadh Real Estate",
            avatar: "",
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
        images: ["/placeholder/studio1.jpg"],
        agent: {
            id: "a1", // Same agent
            name: "Ahmed Al-Saud",
            avatar: "",
            phone: "+966500000001",
            whatsapp: "966500000001",
            verified: true,
        },
        isVerified: true,
        isTruCheck: true,
        features: ["Furnished", "Near Metro"],
    },
];
