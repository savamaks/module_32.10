interface TicketTime {
    startTime: string;
    endTime: string;
}

interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    time: TicketTime;
    duration: number;
    transplant: number | null;
}

export const data: Array<Ticket> = [
    {
        id: 1,
        from: "Rim",
        to: "Praha",
        company: "S7 Airlines",
        price: 23500,
        time: {
            startTime: "18:00",
            endTime: "20:50",
        },
        duration: 170,
        transplant: 1,
    },
    {
        id: 2,
        from: "Berlin",
        to: "Moscow",
        company: "Победа",

        price: 15200,
        time: {
            startTime: "12:00",
            endTime: "16:30",
        },
        duration: 120,
        transplant: 2,
    },
    {
        id: 3,
        from: "Riga",
        to: "Tbilisi",
        company: "Red Wings",
        price: 98100,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 280,
        transplant: 0,
    },
    {
        id: 4,
        from: "New York",
        to: "Tokyo",
        company: "Победа",
        price: 84500,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 230,
        transplant: 3,
    },
    {
        id: 5,
        from: "Naples",
        to: "Tokyo",
        company: "Red Wings",
        price: 122300,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 290,
        transplant: 0,
    },
    {
        id: 6,
        from: "Rim",
        to: "Praha",
        company: "S7 Airlines",
        price: 73200,
        time: {
            startTime: "18:00",
            endTime: "20:50",
        },
        duration: 425,
        transplant: 1,
    },
    {
        id: 7,
        from: "Berlin",
        to: "Moscow",
        company: "Победа",
        price: 85300,
        time: {
            startTime: "12:00",
            endTime: "16:30",
        },
        duration: 350,
        transplant: 2,
    },
    {
        id: 8,
        from: "Milan",
        to: "Kaunas",
        company: "Red Wings",
        price: 45100,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 150,
        transplant: 0,
    },
    {
        id: 9,
        from: "London",
        to: "Jakarta",
        company: "Победа",
        price: 155000,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 280,
        transplant: 3,
    },
    {
        id: 10,
        from: "Bangkok",
        to: "Astana",
        company: "Red Wings",
        price: 78100,
        time: {
            startTime: "10:00",
            endTime: "17:30",
        },
        duration: 160,
        transplant: 1,
    },
    {
        id: 1,
        from: "Berlin",
        to: "Moscow",
        company: "Победа",
        price: 85300,
        time: {
            startTime: "12:00",
            endTime: "16:30",
        },
        duration: 350,
        transplant: 0,
    },
];
