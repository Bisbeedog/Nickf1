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
            Number: 7,
            Name: "Kimi Raikkonen",
            Team: "Alfa Romeo"
        },
        {
            Number: 9,
            Name: "Nikita Mazepin",
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
            Number: 33,
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
            Number: 63,
            Name: "George Russel",
            Team: "Williams"
        },
        {
            Number: 99,
            Name: "Antonio Giovinazzi",
            Team: "Alfa Romeo"
        },
        {
            Number: 77,
            Name: "Valtteri Bottas",
            Team: "Mercedes"
        },
        {
            Number: 88,
            Name: "Robert Kubica",
            Team: "Alfa Romeo"
        }
    ],
    Race: [
        {
            Name: "Bahrain Grand Prix",
            Date: "2021-03-28",
            Finish: [44, 33, 77, 4, 11, 16, 3, 55, 22, 18, 7, 99, 31, 63, 5, 10, 6, 47, 14, 9],
            Picks: [
                { Player: "Nick", Drivers: [4, 11, 99] },
                { Player: "Bridget", Drivers: [44, 18, 63] },
                { Player: "DOD", Drivers: [33, 22, 14] },
                { Player: "Logan", Drivers: [77, 31, 5] },
                { Player: "Pud", Drivers: [16, 3, 7] }
            ]
        },
        {
            Name: "Emilia-Romagna Grand Prix",
            Date: "2021-04-18",
            Finish: [33, 44, 4, 16, 55, 3, 10, 18, 31, 14, 11, 22, 7, 99, 5, 47, 9, 77, 63, 6],
            Picks: [
                { Player: "Nick", Drivers: [4, 11, 99] },
                { Player: "Bridget", Drivers: [44, 18, 63] },
                { Player: "DOD", Drivers: [33, 14, 22] },
                { Player: "Logan", Drivers: [31, 5, 77] },
                { Player: "Pud", Drivers: [16, 3, 7] }
            ]
        },
        {
            Name: "Portuguese Grand Prix",
            Date: "2021-05-02",
            Finish: [44, 33, 77, 11, 4, 16, 31, 14, 3, 10, 55, 99, 5, 18, 22, 63, 47, 6, 9, 7],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 99] },
                 { Player: "Bridget", Drivers: [44, 18, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 31, 5] },
                 { Player: "Pud", Drivers: [16, 3, 7] }
             ]
        },
        {
            Name: "Spanish Grand Prix",
            Date: "2021-05-09",
            Finish: [44, 33, 77, 16, 11, 3, 55, 4, 31, 10, 18, 7, 5, 63, 99, 6, 14, 47, 9, 22],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 99] },
                { Player: "Bridget", Drivers: [44, 18, 63] },
                { Player: "DOD", Drivers: [33, 14, 22] },
                { Player: "Logan", Drivers: [77, 31, 5] },
                { Player: "Pud", Drivers: [16, 3, 7] }
            ]
        },
        {
            Name: "Monaco Grand Prix",
            Date: "2021-05-23",
            Finish: [33, 55, 4, 11, 5, 10, 44, 18, 31, 99, 7, 3, 14, 63, 6, 22, 9, 47, 77, 16],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 99] },
                 { Player: "Bridget", Drivers: [44, 18, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [5, 31, 77] },
                 { Player: "Pud", Drivers: [7, 3, 16] }
             ]
        },
        {
            Name: "Azerbaijan Grand Prix",
            Date: "2021-06-06",
            Finish: [11, 5, 10, 16, 4, 14, 22, 55, 3, 7, 99, 77, 47, 9, 44, 6, 63, 33, 18, 31],
            Picks: [
            { Player: "Nick", Drivers: [11, 4, 99] },
            { Player: "Bridget", Drivers: [44, 63, 18] },
            { Player: "DOD", Drivers: [14, 22, 33] },
            { Player: "Logan", Drivers: [5, 77, 31] },
            { Player: "Pud", Drivers: [16, 3, 7] }
            ]
        },
        {
            Name: "French Grand Prix",
            Date: "2021-06-20",
            Finish: [33, 44, 11, 77, 4, 3, 10, 14, 5, 18, 55, 63, 22, 31, 99, 16, 7, 6, 47, 9],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 99] },
                 { Player: "Bridget", Drivers: [44, 18, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 5, 31] },
                 { Player: "Pud", Drivers: [3, 16, 7] }
             ]
        },
        {
            Name: "Styrian Grand Prix",
            Date: "2021-06-27",
            Finish: [33, 44, 77, 11, 4, 55, 16, 18, 14, 22, 7, 5, 3, 31, 99, 47, 6, 9, 63, 10],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 99] },
                 { Player: "Bridget", Drivers: [44, 18, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 5, 31] },
                 { Player: "Pud", Drivers: [16, 7, 3] }
             ]
        },
        {
            Name: "Austrian Grand Prix",
            Date: "2021-07-04",
            Finish: [33, 77, 4, 44, 55, 11, 3, 16, 10, 14, 63, 22, 18, 99, 6, 7, 5, 47, 9, 31],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 99] },
                 { Player: "Bridget", Drivers: [44, 63, 18] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 5, 31] },
                 { Player: "Pud", Drivers: [3, 16, 7] }
             ]
        },
        {
            Name: "British Grand Prix",
            Date: "2021-07-18",
            Finish: [44, 16, 77, 4, 3, 55, 14, 18, 31, 22, 10, 63, 99, 6, 7, 11, 9, 47, 5, 33],
            Picks: [
                 { Player: "Nick", Drivers: [4, 99, 11] },
                 { Player: "Bridget", Drivers: [44, 18, 63] },
                 { Player: "DOD", Drivers: [14, 22, 33] },
                 { Player: "Logan", Drivers: [77, 31, 5] },
                 { Player: "Pud", Drivers: [16, 3, 7] }
             ]
        },
        {
            Name: "Magyar Grand Prix",
            Date: "2021-08-01",
            Finish: [31, 44, 55, 14, 10, 22, 6, 63, 33, 7, 3, 47, 99, 9, 4, 11, 18, 16, 77, 5],
            Picks: [
                 { Player: "Nick", Drivers: [99, 4, 11] },
                 { Player: "Bridget", Drivers: [44, 63, 18] },
                 { Player: "DOD", Drivers: [14, 22, 33] },
                 { Player: "Logan", Drivers: [31, 5, 77] },
                 { Player: "Pud", Drivers: [7, 3, 16] }
             ]
        },
        {
            Name: "Belgian Grand Prix",
            Date: "2021-08-29",
            Finish: [33, 63, 44, 3, 5, 10, 31, 16, 6, 55, 14, 77, 99, 4, 22, 47, 9, 18, 7, 11],
            Picks: [
                 { Player: "Nick", Drivers: [4, 18, 11] },
                 { Player: "Bridget", Drivers: [63, 44, 55] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [5, 31, 77] },
                 { Player: "Pud", Drivers: [3, 10, 16] }
             ]
        },
        {
            Name: "Dutch Grand Prix",
            Date: "2021-09-05",
            Finish: [33, 44, 77, 10, 16, 14, 55, 11, 31, 4, 3, 18, 5, 99, 88, 6, 63, 47, 22, 9],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 18] },
                 { Player: "Bridget", Drivers: [44, 55, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 31, 5] },
                 { Player: "Pud", Drivers: [10, 16, 3] }
             ]
        },
        {
            Name: "Italian Grand Prix",
            Date: "2021-09-12",
            Finish: [3, 4, 77, 16, 11, 55, 18, 14, 63, 31, 6, 5, 99, 88, 47, 9, 44, 33, 10, 22],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 18] },
                 { Player: "Bridget", Drivers: [55, 63, 44] },
                 { Player: "DOD", Drivers: [14, 33, 22] },
                 { Player: "Logan", Drivers: [77, 31, 5] },
                 { Player: "Pud", Drivers: [3, 16, 10] }
             ]
        },
        {
            Name: "Russian Grand Prix",
            Date: "2021-09-26",
            Finish: [44, 33, 55, 3, 77, 14, 4, 7, 11, 63, 18, 5, 10, 31, 16, 99, 22, 9, 6, 47],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 18] },
                 { Player: "Bridget", Drivers: [44, 55, 63] },
                 { Player: "DOD", Drivers: [33, 14, 22] },
                 { Player: "Logan", Drivers: [77, 5, 31] },
                 { Player: "Pud", Drivers: [3, 10, 16] }
             ]
        },
        {
            Name: "Turkish Grand Prix",
            Date: "2021-10-10",
            Finish: [77, 33, 11, 16, 44, 10, 4, 55, 18, 31, 99, 7, 3, 22, 63, 14, 6, 5, 47, 9],
             Picks: [
                 { Player: "Nick", Drivers: [11, 4, 18] },
                 { Player: "Bridget", Drivers: [44, 55, 63] },
                 { Player: "DOD", Drivers: [33, 22, 14] },
                 { Player: "Logan", Drivers: [77, 31, 5] },
                 { Player: "Pud", Drivers: [16, 10, 3] }
             ]
        },
        {
            Name: "United States Grand Prix",
            Date: "2021-10-24",
            Finish: [33, 44, 11, 16, 3, 77, 55, 4, 22, 5, 99, 18, 7, 63, 6, 47, 9, 14, 31, 10],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 18] },
                 { Player: "Bridget", Drivers: [44, 55, 63] },
                 { Player: "DOD", Drivers: [33, 22, 14] },
                 { Player: "Logan", Drivers: [77, 5, 31] },
                 { Player: "Pud", Drivers: [16, 3, 10] }
            ]
        },
        {
            Name: "Mexican Grand Prix",
            Date: "2021-11-07",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 18] },
            //     { Player: "Bridget", Drivers: [55, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 10] }
            // ]
        },
        {
            Name: "Brazilian Grand Prix",
            Date: "2021-11-14",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 18] },
            //     { Player: "Bridget", Drivers: [55, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 10] }
            // ]
        },
        {
            Name: "Qatar Grand Prix",
            Date: "2021-11-21",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 18] },
            //     { Player: "Bridget", Drivers: [55, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 10] }
            // ]
        },
        {
            Name: "Saudi Arabian Grand Prix",
            Date: "2021-12-05",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 18] },
            //     { Player: "Bridget", Drivers: [55, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 10] }
            // ]
        },
        {
            Name: "Abu Dhabi Grand Prix",
            Date: "2021-12-12",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 11, 18] },
            //     { Player: "Bridget", Drivers: [55, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 10] }
            // ]
        }
    ]
}