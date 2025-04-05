let carsData = {
  "audi a4 b8": {
    "engines": [
      // Diesel engines
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "120 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "136 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "143 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "150 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "163 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "170 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "177 HP" },
      { "type": "Diesel", "capacity": "2.7 TDI", "power": "190 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "204 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "240 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "245 HP" },

      // Petrol engines
      { "type": "Petrol", "capacity": "1.8 TFSI", "power": "120 HP" },
      { "type": "Petrol", "capacity": "1.8 TFSI", "power": "160 HP" },
      { "type": "Petrol", "capacity": "1.8 TFSI", "power": "170 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "180 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "211 HP" },
      { "type": "Petrol", "capacity": "3.2 FSI V6", "power": "265 HP" },
      { "type": "Petrol", "capacity": "3.0 TFSI V6 (S4)", "power": "333 HP" }
    ],
    "dimensions": {
      "length": "4703 mm",
      "width": "1826 mm",
      "height": "1427 mm"
    },
    "production_years": {
      "first": 2008,
      "last": 2015,
      "facelift": 2012
    },
    "gearbox": [
      "Manual 6 Speed",
      "Automatic Multitronic",
      "Automatic Tiptronic",
      "Automatic S tronic"
    ],
    "traction": ["FWD", "quattro (4x4)"],
    "body_type": "Sedan / Avant",
    "weight": "1500–1700 kg (depends on engine)"
  },

  "audi a3 8p": {
    "engines": [
      { "type": "Diesel", "capacity": "1.9 TDI", "power": "105 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "140 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "170 HP" },
      { "type": "Petrol", "capacity": "1.4 TFSI", "power": "125 HP" },
      { "type": "Petrol", "capacity": "1.8 TFSI", "power": "160 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "200 HP" },
      { "type": "Petrol", "capacity": "3.2 V6", "power": "250 HP" }
    ],
    "dimensions": {
      "length": "4292 mm",
      "width": "1765 mm",
      "height": "1423 mm"
    },
    "production_years": {
      "first": 2003,
      "last": 2012,
      "facelift": 2008
    },
    "gearbox": [
      "Manual 5/6 Speed",
      "Automatic S tronic"
    ],
    "traction": ["FWD", "quattro (4x4)"],
    "body_type": "Hatchback / Sportback / Cabriolet",
    "weight": "1200–1500 kg"
  },

  "audi a6 c6": {
    "engines": [
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "140 HP" },
      { "type": "Diesel", "capacity": "2.7 TDI", "power": "180 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "225 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "240 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "170 HP" },
      { "type": "Petrol", "capacity": "2.4 V6", "power": "177 HP" },
      { "type": "Petrol", "capacity": "3.2 FSI", "power": "255 HP" },
      { "type": "Petrol", "capacity": "4.2 FSI V8", "power": "350 HP" }
    ],
    "dimensions": {
      "length": "4927 mm",
      "width": "1855 mm",
      "height": "1463 mm"
    },
    "production_years": {
      "first": 2004,
      "last": 2011,
      "facelift": 2008
    },
    "gearbox": [
      "Manual 6 Speed",
      "Automatic Multitronic",
      "Automatic Tiptronic"
    ],
    "traction": ["FWD", "quattro (4x4)"],
    "body_type": "Sedan / Avant",
    "weight": "1500–1800 kg"
  },

  "audi q5 8r": {
    "engines": [
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "143 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "170 HP" },
      { "type": "Diesel", "capacity": "2.0 TDI", "power": "177 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "240 HP" },
      { "type": "Diesel", "capacity": "3.0 TDI", "power": "245 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "180 HP" },
      { "type": "Petrol", "capacity": "2.0 TFSI", "power": "211 HP" },
      { "type": "Petrol", "capacity": "3.2 FSI", "power": "270 HP" },
      { "type": "Petrol", "capacity": "3.0 TFSI", "power": "272 HP" }
    ],
    "dimensions": {
      "length": "4629 mm",
      "width": "1898 mm",
      "height": "1655 mm"
    },
    "production_years": {
      "first": 2008,
      "last": 2017,
      "facelift": 2012
    },
    "gearbox": [
      "Manual 6 Speed",
      "Automatic S tronic",
      "Automatic Tiptronic"
    ],
    "traction": ["quattro (4x4)"],
    "body_type": "SUV",
    "weight": "1700–2000 kg"
  }
};
