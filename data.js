var data = {
    Player: [
        { Name: "Nick" },
        { Name: "DOD" },
        { Name: "Pud" },
        { Name: "Logan" },
        { Name: "Bridget" }
    ],
    Driver: [
        {
            Number: 3,
            Name: "Daniel Ricciardo",
            Team: "McLaren"
        },
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren"
        },
        {
            Number: 5,
            Name: "Sebastian Vettel",
            Team: "Aston Martin"
        },
        {
            Number: 6,
            Name: "Nicholas Latifi",
            Team: "Williams"
        },
        {
            Number: 24,
            Name: "Zhou Guanyu",
            Team: "Alfa Romeo"
        },
        {
            Number: 20,
            Name: "Kevin Magnussen",
            Team: "Haas"
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "AlphaTauri"
        },
        {
            Number: 11,
            Name: "Sergio Perez",
            Team: "Red Bull"
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Alpine"
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari"
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin"
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "AlphaTauri"
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Alpine"
        },
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull"
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Mercedes"
        },
        {
            Number: 47,
            Name: "Mick Schumacher",
            Team: "Haas"
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Ferrari"
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams"
        },
        {
            Number: 77,
            Name: "Valterri Bottas",
            Team: "Alfa Romeo"
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes"
        },
        {
            Number: 27,
            Name: "HUUUUUULKENBURG",
            Team: "Aston Martin"
        }
    ],
    Race: [
        {
            Name: "Bahrain Grand Prix",
            Date: "2022-03-20",
            Finish: [16, 55, 44, 63, 20, 77, 31, 22, 14, 24, 47, 18, 23, 3, 4, 6, 27, 11, 1, 10],
            Picks: [
                { Player: "Nick", Drivers: [24, 2, 11] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [22, 14, 1] },
                { Player: "Logan", Drivers: [44, 20, 10] },
                { Player: "Pud", Drivers: [16, 55, 18] }
            ]
        },
        {
            Name: "Saudi Arabian Grand Prix",
            Date: "2022-03-27",
            // Finish: [33, 44, 4, 16, 55, 3, 10, 18, 31, 14, 11, 22, 7, 99, 5, 47, 9, 77, 63, 6],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [31, 5, 77] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Australian Grand Prix",
            Date: "2022-04-10",
            // Finish: [44, 33, 77, 11, 4, 16, 31, 14, 3, 10, 55, 99, 5, 18, 22, 63, 47, 6, 9, 7],
            // Picks: [
            //      { Player: "Nick", Drivers: [11, 4, 99] },
            //      { Player: "Bridget", Drivers: [44, 18, 63] },
            //      { Player: "DOD", Drivers: [33, 14, 22] },
            //      { Player: "Logan", Drivers: [77, 31, 5] },
            //      { Player: "Pud", Drivers: [16, 3, 7] }
            //  ]
        },
        {
            Name: "Gran Premio del Emilia-Romagna",
            Date: "2022-04-24",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Miami Grand Prix",
            Date: "2022-05-08",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Gran Premio de Espana",
            Date: "2022-05-22",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Grand Prix de Monaco",
            Date: "2022-05-29",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]        
        },
        {
            Name: "Styrian Grand Prix",
            Date: "2022-06-27",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Azerbaijan Gran Prix",
            Date: "2022-06-12",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Grand Prix du Canada",
            Date: "2022-06-19",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "British Gran Prix",
            Date: "2022-07-03",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Grosser Preis von Osterreich",
            Date: "2022-07-10",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Grand Prix de France",
            Date: "2022-08-24",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Magyar Nagydig",
            Date: "2022-07-31",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Belgian Grand Prix",
            Date: "2022-08-28",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Dutch Grand Prix",
            Date: "2022-09-04",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Gran Premio D'Italia",
            Date: "2022-9-11",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Singapore Grand Prix",
            Date: "2022-10-02",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Japanese Grand Prix",
            Date: "2022-10-09",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "United States Grand Prix",
            Date: "2022-10-23",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Gran Premio de la Ciudad de Mexico",
            Date: "2022-10-30",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Grande Premio de Sao Paulo",
            Date: "2022-11-13",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        },
        {
            Name: "Abu Dhabi Grand Prix",
            Date: "2022-11-20",
            // Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            // Picks: [
            //     { Player: "Nick", Drivers: [11, 4, 99] },
            //     { Player: "Bridget", Drivers: [44, 18, 63] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 31, 5] },
            //     { Player: "Pud", Drivers: [16, 3, 7] }
            // ]
        }
    ]
}