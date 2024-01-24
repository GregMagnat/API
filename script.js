const velovParis = () => {
    fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=3')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('API Response:', data);

            if (data.results && data.results.length > 0) {
                // Parcourir les trois premières stations
                for (let i = 0; i < 3; i++) {
                    const stationData = data.results[i];
                    // Appeler la fonction pour afficher chaque station sur la page HTML
                    showVelibStation(document.getElementById(`showVelibStation${i + 1}`), stationData.name, stationData.capacity, stationData.numdocksavailable, stationData.ebike, stationData.mechanical);
                }
            } else {
                console.error('No records found in the API response.');
            }

            // Appeler la fonction velovParis après une minute
            setTimeout(velovParis, 60000); // 60000 millisecondes = 1 minute
        })
        .catch((error) => {
            console.error('Response error:', error.message);
            // pareil pour les erreurs 
            setTimeout(velovParis, 60000);
        });
};

velovParis();

const showVelibStation = (element, name, capacity, numdocksavailable, ebike, mechanical) => {
    element.innerHTML = `
        <div>
            <h2>Station : ${name}</h2>
            <p>${capacity} Nombre de places</p>
            <p>${numdocksavailable} Places disponibles</p>
            <p>${ebike} Vélo électriques</p>
            <p>${mechanical} Vélos</p>
        </div>
    `;
};
