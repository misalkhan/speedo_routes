const routes = [
    {
        route: 1,
        from: 'Railway Station',
        to: 'Bhatti Chowk',
        busNumber: 'B-001',
        stops: ['Railway Station', 'Ek Moriya', 'Nawaz Sharif Hospital', 'Kashmiri Gate', 'Lari Adda', 'Azadi Chowk', 'Texali Chowk', 'Bhatti Chowk']
    },
    {
        route: 2,
        from: 'Samanabad Mor',
        to: 'Bhatti Chowk',
        busNumber: 'B-002',
        stops: ['Samanabad Mor', 'Corporation Chowk', 'Taj Company', 'Sanda', 'Double Sarkan', 'Moon Market', 'Ganda Nala', 'Bhatti Chowk']
    },
    {
        route: 3,
        from: 'Railway Station',
        to: 'Shahdara Lari Adda',
        busNumber: 'B-003',
        stops: ['Railway Station', 'Ek Moriya', 'Nawaz Sharif Hospital', 'Kashmiri Gate', 'Lari Adda', 'Azadi Chowk', 'Timber Market', 'METRO', 'Niazi Chowk', 'Shahdara Metro Station', 'Shahdara Lari Adda']
    },
    {
        route: 4,
        from: 'R.A. Bazar',
        to: 'Chungi Amar Sidhu',
        busNumber: 'B-004',
        stops: ['R.A. Bazar', 'Nadeem Chowk', 'Defence Morr', 'Shareef Market', 'Walton', 'Qainchi', 'Ghazi Chowk', 'Chungi Amar Sidhu']
    },
    {
        route: 5,
        from: 'Shad Bagh Underpass',
        to: 'Bhatti Chowk',
        busNumber: 'B-005',
        stops: ['Shad Bagh Underpass', 'Rajput Park', 'Madina Chowk', 'Lohay Wali Pulley', 'Badami Bagh', 'Lari Adda Gol Chakar', 'Azadi Chowk', 'Taxali Chowk', 'Bhatti Chowk']
    },
    {
        route: 6,
        from: 'Babu Sabu',
        to: 'Raj Garh Chowk',
        busNumber: 'B-006',
        stops: ['Babu Sabu', 'Niazi Adda', 'City Bus Stand', 'Chowk Yateem Khana', 'Bhala Stop', 'Samanabad Morr', 'Chauburji', 'Riwaz Garden', 'M.A.O College', 'Firdous Cinema', 'Raj Garh Chowk']
    },
    {
        route: 7,
        from: 'Bagrian',
        to: 'Chungi Amar Sidhu',
        busNumber: 'B-007',
        stops: ['Bagrian', 'Depot Chowk', 'Minhaj University', 'Hamdard Chowk', 'Rehmat Eye Hospital', 'Pindi Stop', 'Peco Morr', 'Kot Lakhpat Railway Station', 'Phatak Mandi', 'Qainchi', 'Ghazi Chowk', 'Chungi Amar Sidhu']
    },
    {
        route: 8,
        from: 'Doctor Hospital',
        to: 'Canal',
        busNumber: 'B-008',
        stops: ['Doctor Hospital', 'Wafaqi Colony', 'IBA Stop', 'Hailey College', 'Campus Pull', 'Barkat Market', 'Kalma Chowk', 'Qaddafi Stadium', 'Canal']
    },
    {
        route: 9,
        from: 'Railway Station',
        to: 'Sham Nagar',
        busNumber: 'B-009',
        stops: ['Railway Station', 'Haji Camp', 'Shimla Pahari', 'Lahore Zoo', 'Chairing Cross', 'Ganga Ram Hospital', 'Qartaba Chowk', 'Chauburji', 'Sham Nagar']
    },
    {
        route: 10,
        from: 'Multan Chungi',
        to: 'Qartaba Chowk',
        busNumber: 'B-010',
        stops: ['Multan Chungi', 'Mustafa Town', 'Karim Block Market', 'PU Examination Center', 'Bhekewal Morr', 'Wahdat Colony', 'Naqsha Stop', 'Canal', 'Ichra', 'Shama', 'Qartaba Chowk']
    },
    {
        route: 11,
        from: 'Babu Sabu',
        to: 'Main Market Gulberg',
        busNumber: 'B-011',
        stops: ['Babu Sabu', 'Niazi Adda', 'City Bus Stand', 'Chowk Yateem Khana', 'Scheme Morr', 'Flat Stop', 'Dubai Chowk', 'Bhekewal Morr', 'Sheikh Zaid Hospital', 'Campus Pull', 'Barkat Market', 'Kalma Chowk', 'Liberty Chowk', 'Hafeez Center', 'Mini Market', 'Main Market, Gulberg']
    },
    {
        route: 12,
        from: 'R.A Bazar',
        to: 'Civil Secretariat',
        busNumber: 'B-012',
        stops: ['R.A Bazar', 'PAF Market', 'Girja Chowk', 'Afshan Chowk', 'Fortress Stadium', 'Gymkhana', 'Aitchison College', 'PC Hotel', 'Lahore Zoo', 'Chairing Cross', 'GPO', 'Anarkali', 'Civil Secretariat']
    },
    {
        route: 13,
        from: 'Bagrian',
        to: 'Kalma Chowk',
        busNumber: 'B-013',
        stops: ['Bagrian', 'Ghazi Chowk', 'UMT Stop', 'Khokhar Chowk', 'Akbar Chowk', 'Pindi Stop', 'Peco Morr', 'Phatak Mandi', 'Ittefaq Hospital', 'Model Town', 'Kalma Chowk']
    },
    {
        route: 14,
        from: 'R.A Bazar',
        to: 'Chungi Amar Sidhu',
        busNumber: 'B-014',
        stops: ['R.A Bazar', 'Fauji Foundation', 'Ali View Garden', 'Bhatta Chowk', 'DHA Nursery', 'LESCO', 'Chota Ishara Stop', 'Naka Stop', 'Ghazi Chowk', 'Chungi Amar Sidhu']
    },
    {
        route: 15,
        from: 'Qartba Chowk',
        to: 'Babu Sabu',
        busNumber: 'B-015',
        stops: ['Qartba Chowk', 'Hakeem M. Ajmal Khan Road', 'Gulshan Ravi Road', 'Kacha Ferozepur Road', 'Babu Sabu']
    },
    {
        route: 16,
        from: 'Railway Station',
        to: 'Bhatti Chowk',
        busNumber: 'B-016',
        stops: ['Railway Station', 'Circular Road', 'Ek Moriya', 'Bhatti Chowk']
    },
    {
        route: 17,
        from: 'Canal',
        to: 'Railway Station',
        busNumber: 'B-017',
        stops: ['Canal', 'Main Boulevard Shadman', 'Davis Road', 'Shimla Pahari', 'Haji Camp', 'Railway Station']
    },
    {
        route: 18,
        from: 'Bhatti Chowk',
        to: 'Shimla Pahari',
        busNumber: 'B-018',
        stops: ['Bhatti Chowk', 'Circular Road', 'Nisbat Road', 'Abbot Road', 'Shimla Pahari']
    },
    {
        route: 19,
        from: 'Main Market',
        to: 'Bhatti Chowk',
        busNumber: 'B-019',
        stops: ['Main Market', 'Jail Road', 'Lytton Road', 'Crust Road', 'Lower Mall Road', 'Bhatti Chowk']
    },
    {
        route: 20,
        from: 'Jain Mandar',
        to: 'Chowk Yateem Khana',
        busNumber: 'B-020',
        stops: ['Jain Mandar', 'Al-Mumtaz Road', 'Poonch Road', 'Lake Road', 'Chowk Yateem Khana']
    },
    {
        route: 21,
        from: 'Depot Chowk',
        to: 'Thokar Niaz Baig',
        busNumber: 'B-021',
        stops: ['Depot Chowk', 'Madar-e-Millat Road', 'Ali Road', 'Baig Road', 'Canal Bank Road', 'Thokar Niaz Baig']
    },
    {
        route: 22,
        from: 'Depot Chowk',
        to: 'Thokar Niaz Baig',
        busNumber: 'B-022',
        stops: ['Depot Chowk', 'Madar-e-Millat Road', 'Sutlej Avenue', 'Shahrah Nazria-e- Pakistan Avenue', 'Thokar Niaz Baig']
    },
    {
        route: 23,
        from: 'Valencia',
        to: 'Thokar Niaz Baig',
        busNumber: 'B-023',
        stops: ['Valencia', 'Baba Fareed Road', 'Lahore Ring Road', 'Thokar Niaz Baig']
    },
    {
        route: 24,
        from: 'Multan Chungi',
        to: 'Ghazi Chowk',
        busNumber: 'B-024',
        stops: ['Multan Chungi', 'Wahdat Colony', 'Chowk Yateem Khana', 'Iqbal Town', 'Chungi Amar Sidhu', 'Ghazi Chowk']
    },
    {
        route: 25,
        from: 'R.A Bazar',
        to: 'Railway Station',
        busNumber: 'B-025',
        stops: ['R.A Bazar', 'Kacheri Stop', 'Haji Camp', 'Railway Station']
    },
    {
        route: 26,
        from: 'R.A Bazar',
        to: 'Daroghawala',
        busNumber: 'B-026',
        stops: ['R.A Bazar', 'Madar-e-Millat Road', 'Bakhshish Stop', 'Daroghawala']
    },
    {
        route: 27,
        from: 'BataPur',
        to: 'Daroghawala',
        busNumber: 'B-027',
        stops: ['BataPur', 'Noor Kahana', 'Kacheri', 'Daroghawala']
    },
    {
        route: 28,
        from: 'Quaid e Azam Interchange',
        to: 'Airport',
        busNumber: 'B-028',
        stops: ['Quaid e Azam Interchange', 'Johar Town', 'Gulberg', 'Airport']
    },
    {
        route: 29,
        from: 'Niazi Interchange',
        to: 'Salamat Pura',
        busNumber: 'B-029',
        stops: ['Niazi Interchange', 'Mausoleum', 'Azam Chowk', 'Salamat Pura']
    },
    {
        route: 30,
        from: 'Daroghawala',
        to: 'Airport',
        busNumber: 'B-030',
        stops: ['Daroghawala', 'Wahdat Colony', 'Chungi Amar Sidhu', 'Airport']
    },
    {
        route: 31,
        from: 'Daroghawala',
        to: 'Lari Adda',
        busNumber: 'B-031',
        stops: ['Daroghawala', 'Lari Adda']
    },
    {
        route: 32,
        from: 'Shimla Pahari',
        to: 'Ek Moriya',
        busNumber: 'B-032',
        stops: ['Shimla Pahari', 'Wafaqi Colony', 'Iqbal Park', 'Ek Moriya']
    },
    {
        route: 33,
        from: 'Cooper Store',
        to: 'Mughalpura',
        busNumber: 'B-033',
        stops: ['Cooper Store', 'Shahdara', 'Chungi Amar Sidhu', 'Mughalpura']
    },
    {
        route: 34,
        from: 'Singhpura',
        to: 'Mughalpura',
        busNumber: 'B-034',
        stops: ['Singhpura', 'Ghazi Chowk', 'Mughalpura']
    }
];


let filtered = [];
for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].stops.length; j++) {
        if (!filtered.find(element => element === routes[i].stops[j])) {
            filtered.push(routes[i].stops[j]);
        }
    }
}
let startDropdown = document.getElementById('start');
let endDropdown = document.getElementById('end');
let searchButton = document.getElementById('searchBtn');
filtered.forEach(stop => {
    let optionStart = document.createElement('option');
    optionStart.value = stop;
    optionStart.textContent = stop;
    startDropdown.appendChild(optionStart);

    let optionEnd = document.createElement('option');
    optionEnd.value = stop;
    optionEnd.textContent = stop;
    endDropdown.appendChild(optionEnd);
});

let start;
let end;

startDropdown.addEventListener('change', function () {
    start = startDropdown.value;

    for (let i = 0; i < endDropdown.options.length; i++) {
        const option = endDropdown.options[i];
        
        if (option.value === start) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    }
    checkSelection()
})


endDropdown.addEventListener('change', function () {
    end = endDropdown.value;
    checkSelection()
})


function checkSelection() {

    if (start && end) {
        searchButton.style.backgroundColor = 'rgb(79, 136, 243)';
        searchButton.style.cursor = 'pointer';
        searchButton.onclick = search;
    } else {
        searchButton.style.backgroundColor = 'grey';
        searchButton.style.cursor = 'not-allowed';
        searchButton.onclick = null; 
    }
}


function search() {

    let output = [];
    for (let i = 0; i <= routes.length - 1; i++) {
        if (routes[i].stops.find((a) => a === start) && routes[i].stops.includes(end)) {
            output.push(routes[i])
        }
    }

    let result = document.getElementById('result');
    result.innerText = output.length === 0 ? 'No bus found for this route' : output.map(route => 'Bus no: ' + route.busNumber).join('\n');
}

