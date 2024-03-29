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
            Number: 45,
            Name: "Nyck de Vries",
            Team: "Williams"
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
                { Player: "Nick", Drivers: [24, 4, 11] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [22, 14, 1] },
                { Player: "Logan", Drivers: [44, 20, 10] },
                { Player: "Pud", Drivers: [16, 55, 18] }
            ]
        },
        {
            Name: "Saudi Arabian Grand Prix",
            Date: "2022-03-27",
            Finish: [1, 16, 55, 11, 63, 31, 4, 10, 20, 44, 24, 27, 18, 23, 77, 14, 3, 6, 22, 47],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 77, 3] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [10, 20, 44] },
                 { Player: "Pud", Drivers: [16, 55, 18] }
             ]
        },
        {
            Name: "Australian Grand Prix",
            Date: "2022-04-10",
            Finish: [16, 11, 63, 44, 4, 3, 31, 77, 10, 23, 24, 18, 47, 20, 22, 6, 14, 1, 5, 55],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 3, 77] },
                { Player: "DOD", Drivers: [22, 1, 14] },
                { Player: "Logan", Drivers: [44, 10, 5] },
                { Player: "Pud", Drivers: [16, 18, 55] }
            ]
        },
        {
            Name: "Gran Premio del Emilia-Romagna",
            Date: "2022-04-24",
            Finish: [1, 11, 4, 63, 77, 16, 22, 5, 20, 18, 23, 10, 44, 31, 24, 6, 47, 3, 14, 55],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [1, 22, 14] },
                { Player: "Logan", Drivers: [5, 10, 44] },
                { Player: "Pud", Drivers: [16, 18, 55] }
            ]
        },
        {
            Name: "Miami Grand Prix",
            Date: "2022-05-08",
            Finish: [1, 16, 55, 11, 63, 44, 77, 31, 23, 18, 14, 22, 3, 6, 47, 20, 5, 10, 4, 24],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 5, 10] },
                { Player: "Pud", Drivers: [16, 55, 18] }
            ]
        },
        {
            Name: "Gran Premio de Espana",
            Date: "2022-05-22",
            Finish: [1, 11, 63, 55, 44, 77, 31, 4, 14, 22, 5, 3, 10, 47, 18, 6, 20, 23, 24, 16],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 5, 10] },
                { Player: "Pud", Drivers: [55, 18, 16] }
            ]
        },
        {
            Name: "Grand Prix de Monaco",
            Date: "2022-05-29",
            Finish: [11, 55, 1, 16, 63, 4, 14, 44, 77, 5, 10, 31, 3, 18, 6, 24, 22, 23, 47, 20],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 5, 10] },
                { Player: "Pud", Drivers: [55, 16, 18] }
            ]        
        },
        {
            Name: "Azerbaijan Gran Prix",
            Date: "2022-06-12",
            Finish: [1, 11, 63, 44, 10, 5, 14, 3, 4, 31, 77, 23, 22, 47, 6, 18, 20, 24, 16, 55],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 3, 77] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 10, 5] },
                { Player: "Pud", Drivers: [18, 16, 55] }
            ]
        },
        {
            Name: "Grand Prix du Canada",
            Date: "2022-06-19",
            Finish: [1, 55, 44, 63, 16, 31, 77, 24, 14, 18, 3, 5, 23, 10, 4, 6, 20, 22, 47, 11],
            Picks: [
                 { Player: "Nick", Drivers: [24, 4, 11] },
                 { Player: "Bridget", Drivers: [63, 77, 3] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
            ]
        },
        {
            Name: "British Gran Prix",
            Date: "2022-07-03",
            Finish: [55, 11, 44, 16, 14, 4, 1, 47, 5, 20, 18, 6, 3, 22, 31, 10, 77, 63, 24, 23],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [3, 77, 63] },
                 { Player: "DOD", Drivers: [14, 1, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
            ]
        },
        {
            Name: "Grosser Preis von Osterreich",
            Date: "2022-07-10",
            Finish: [16, 1, 44, 63, 31, 47, 4, 20, 3, 14, 77, 23, 18, 24, 10, 22, 5, 55, 6, 11],
            Picks: [
                  { Player: "Nick", Drivers: [4, 24, 11] },
                  { Player: "Bridget", Drivers: [63, 3, 77] },
                  { Player: "DOD", Drivers: [1, 14, 22] },
                  { Player: "Logan", Drivers: [44, 10, 5] },
                  { Player: "Pud", Drivers: [16, 18, 55] }
              ]
        }, 
        {
            Name: "Grand Prix de France",
            Date: "2022-08-24",
            Finish: [1, 44, 63, 11, 55, 14, 4, 31, 3, 18, 5, 10, 23, 77, 47, 24, 6, 20, 16, 22],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 3, 77] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 5, 10] },
                { Player: "Pud", Drivers: [55, 18, 16] }
            ]
        },
        {
            Name: "Magyar Nagydig",
            Date: "2022-07-31",
            Finish: [1, 44, 63, 55, 11, 16, 4, 14, 31, 5, 18, 10, 24, 47, 3, 20, 23, 6, 22, 77],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
             ]
        },
        {
            Name: "Belgian Grand Prix",
            Date: "2022-08-28",
            Finish: [1, 11, 55, 63, 14, 16, 31, 5, 10, 23, 18, 4, 22, 24, 3, 20, 47, 6, 77, 44],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [5, 10, 44] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
            ]
        },
        {
            Name: "Dutch Grand Prix",
            Date: "2022-09-04",
            Finish: [1, 63, 16, 44, 11, 14, 4, 55, 31, 18, 10, 23, 47, 5, 20, 24, 3, 6, 77, 22],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 10, 5] },
                 { Player: "Pud", Drivers: [16, 55, 18] }
             ]
        },
        {
            Name: "Gran Premio D'Italia",
            Date: "2022-9-11",
            Finish: [1, 16, 63, 55, 44, 11, 4, 10, 45, 24, 31,  47, 77, 22, 6, 20, 3, 18, 14, 5],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 3] },
                { Player: "DOD", Drivers: [1, 22, 14] },
                { Player: "Logan", Drivers: [44, 10, 5] },
                { Player: "Pud", Drivers: [16, 55, 18] }
            ]
        },
        {
            Name: "Singapore Grand Prix",
            Date: "2022-10-02",
            Finish: [11, 16, 55, 4, 3, 18, 1, 5, 44, 10, 77, 20, 47, 63, 22, 31, 23, 14, 6, 24],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [3, 77, 63] },
                { Player: "DOD", Drivers: [1, 22, 14] },
                { Player: "Logan", Drivers: [5, 44, 10] },
                { Player: "Pud", Drivers: [16, 55, 18] }
             ]
        },
        {
            Name: "Japanese Grand Prix",
            Date: "2022-10-09",
            Finish: [1, 11, 16, 31, 44, 5, 14, 63, 6, 4, 3, 18, 22, 20, 77, 24, 47, 10, 55, 23],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [16, 18, 55] }
             ]
        },
        {
            Name: "United States Grand Prix",
            Date: "2022-10-23",
            Finish: [1, 44, 16, 11, 63, 4, 14, 5, 20, 22, 31, 23, 24, 10, 47, 3, 6, 18, 77, 55],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [16, 18, 55] }
             ]
        },
        {
            Name: "Gran Premio de la Ciudad de Mexico",
            Date: "2022-10-30",
            Finish: [1, 44, 11, 63, 55, 16, 3, 31, 4, 77, 10, 23, 24, 5, 18, 47, 20, 6, 14, 22],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 10, 5] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
             ]
        },
        {
            Name: "Grande Premio de Sao Paulo",
            Date: "2022-11-13",
            Finish: [63, 44, 55, 16, 14, 1, 11, 31, 77, 18, 5, 24, 47, 10, 23, 6, 22, 4, 20, 3 ],
            Picks: [
                 { Player: "Nick", Drivers: [11, 24, 4] },
                 { Player: "Bridget", Drivers: [63, 77, 3] },
                 { Player: "DOD", Drivers: [14, 1, 22] },
                 { Player: "Logan", Drivers: [44, 5, 10] },
                 { Player: "Pud", Drivers: [55, 16, 18] }
             ]
        },
        {
            Name: "Abu Dhabi Grand Prix",
            Date: "2022-11-20",
            Finish: [1, 16, 11, 55, 63, 4, 31, 18, 3, 5, 22, 24, 23, 10, 77, 47, 20, 44, 6, 14],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 3, 77] },
                 { Player: "DOD", Drivers: [1, 22, 14] },
                 { Player: "Logan", Drivers: [5, 10, 44 ]},
                 { Player: "Pud", Drivers: [16, 18, 55 ] }
             ]
        }
    ]
}