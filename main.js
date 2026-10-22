const API_URL = 'https://retoolapi.dev/MWJtgE/data';
async function init(){
    console.log('Betöltött');
    const response = await fetch(API_URL);
    console.log("Headerek letöltve");

    const adatok = await response.json();
    const table = document.getElementById('table');
    for(const auto of adatok){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${auto.modell}</td>
            <td>${auto.szin}</td>
            <td>${auto.evjarat}</td>
        `;
        if (auto.szin == "fekete"){
        }
        table.appendChild(row);

        if (auto.szin == "fekete"){
            row.style.backgroundColor = "black";
            row.style.color = "white";
        }
        else if (auto.szin == "fehér"){
            row.style.backgroundColor = "white";
        }
        else if (auto.szin == "piros"){
            row.style.backgroundColor = "red";
            row.style.color = "white";
        }
    }

    
}
init();

