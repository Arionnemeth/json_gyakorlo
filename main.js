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
            <td>${auto.marka}</td>
            <td>${auto.tipus}</td>
            <td>${auto.evjarat}</td>
        `;
        table.appendChild(row);
    }

}
init();