document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const result = {
        name: name,
        surname: surname,
        age: age
    };

    document.getElementById('output').innerText = JSON.stringify(result, null, 2);
});

window.onload = function() {
    let counter = localStorage.getItem('counter') || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').innerText = counter;
};


window.onload = function() {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(new Date().toString());
    localStorage.setItem('sessions', JSON.stringify(sessions));
};


window.onload = function() {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    const container = document.getElementById('sessionsContainer');
    sessions.forEach(session => {
        const sessionElement = document.createElement('div');
        sessionElement.innerText = session;
        container.appendChild(sessionElement);
    });
};


let currentPage = 1;
const itemsPerPage = 10;
const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

function renderItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToRender = items.slice(start, end);

    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';

    itemsToRender.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.id}: ${item.name}`;
        container.appendChild(itemElement);
    });
}

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPage < items.length / itemsPerPage) {
        currentPage++;
        renderItems();
    }
});

window.onload = function() {
    renderItems();
};


document.getElementById('hideBtn').addEventListener('click', function() {
    document.getElementById('text').style.display = 'none';
});


document.getElementById('checkAgeBtn').addEventListener('click', function() {
    const age = document.getElementById('ageInput').value;
    const message = age < 18 ? "You are under 18." : "You are 18 or older.";
    document.getElementById('message').innerText = message;
});


document.getElementById('generateBtn').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const content = document.getElementById('content').value;

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    const container = document.getElementById('tableContainer');
    container.innerHTML = '';

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
});


window.onload = function() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();

    if (lastVisit && (now - lastVisit) < 10000) {

        return;
    }

    localStorage.setItem('lastVisit', now);

    let price = parseInt(localStorage.getItem('price')) || 100;
    price += 10;
    localStorage.setItem('price', price);

    document.getElementById('price').innerText = price + ' грн';
};


document.getElementById('hideBtn').addEventListener('click', function() {
    document.getElementById('text').style.display = 'none';
});


let currentPage = 1;
const itemsPerPage = 10;
const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

function renderItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToRender = items.slice(start, end);

    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';

    itemsToRender.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.id}: ${item.name}`;
        container.appendChild(itemElement);
    });
}

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPage < items.length / itemsPerPage) {
        currentPage++;
        renderItems();
    }
});

window.onload = function() {
    renderItems();
};