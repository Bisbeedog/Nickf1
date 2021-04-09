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
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Portuguese Grand Prix",
            Date: "2021-05-02",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Spanish Grand Prix",
            Date: "2021-05-09",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Monaco Grand Prix",
            Date: "2021-05-23",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Azerbaijan Grand Prix",
            Date: "2021-06-06",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Canadian Grand Prix",
            Date: "2021-06-13",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "French Grand Prix",
            Date: "2021-06-27",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Austrian Grand Prix",
            Date: "2021-07-04",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "British Grand Prix",
            Date: "2021-07-18",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Magyar Grand Prix",
            Date: "2021-08-01",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Belgian Grand Prix",
            Date: "2021-08-29",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Dutch Grand Prix",
            Date: "2021-09-05",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
           //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Italian Grand Prix",
            Date: "2021-09-12",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Russian Grand Prix",
            Date: "2021-09-26",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Singapore Grand Prix",
            Date: "2021-10-03",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Japanese Grand Prix",
            Date: "2021-10-10",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "United States Grand Prix",
            Date: "2021-10-24",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Mexican Grand Prix",
            Date: "2021-10-31",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Sao Paulo Grand Prix",
            Date: "2021-11-07",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Australian Grand Prix",
            Date: "2021-11-21",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Saudi Arabian Grand Prix",
            Date: "2021-12-05",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        },
        {
            Name: "Abu Dhabi Grand Prix",
            Date: "2021-12-12",
            // Finish: [44, 77, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 18, 22, 31, 33, 47, 55, 63, 99],
            // Picks: [
            //     { Player: "Nick", Drivers: [4, 99, 11] },
            //     { Player: "Bridget", Drivers: [18, 63, 44] },
            //     { Player: "DOD", Drivers: [33, 14, 22] },
            //     { Player: "Logan", Drivers: [77, 5, 31] },
            //     { Player: "Pud", Drivers: [3, 16, 7] }
            // ]
        }
    ]
}