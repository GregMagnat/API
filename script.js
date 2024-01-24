const velovParis = () => {
    fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const resultContainer = document.getElementById('result-container');
        data.records.forEach(record => {
            const stationName = record.fields.name;
            
            const paragraph = document.createElement('p');
            paragraph.textContent = stationName;
            resultContainer.appendChild(paragraph);
        });
      })
      .catch((error) => {
        console.error('Response error:', error.message);
      });
};

velovParis();