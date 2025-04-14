function fetchCars() {
  fetch('http://localhost:3000/api/car')
    .then((response) => response.json())
    .then((data) => {
      console.log('Vehicule récupérés:', data); // Vérifie les données reçues

      const carList = document.getElementById('carList');
      const cars = data.data;
      carList.innerHTML = '';
      if (Array.isArray(cars) && cars.length > 0) {
        cars.forEach((car) => {
          const carItem = document.createElement('div');
          carItem.innerHTML = `<p>Marque: ${car.marque}</p> <p>Modèle: ${car.modele}</p> <img src="${car.image_url}" alt="Image de ${car.marque} ${car.modele}" style="max-width: 800px; height: auto;" />`;
          carList.appendChild(carItem);
          carItem.classList.add('carItem');
        });
      } else {
        carList.innerHTML = '<p>Aucun véhicule trouvé.</p>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des véhicules:', error);
      const carList = document.getElementById('carList');
      carList.innerHTML = '<p>Erreur de récupération des véhicules.</p>';
    });
}

// Charger initialement les vehicules
fetchCars();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addCarForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const marque = document.getElementById('marque').value;
    const modele = document.getElementById('modele').value;
    const image_url = document.getElementById('image_url').value;

    fetch('http://localhost:3000/api/car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ marque, modele, image_url }),
    })
      .then((response) => response.json())
      .then((car) => {
        console.log('Véhicule ajouté:', car);
        fetchCars(); // Recharge la liste des vehicules après l'ajout
      });
  });

  const formTitle = document.createElement('h2');
  const container = document.getElementById('containerF');
  formTitle.textContent = "Ajout d'un véhicule";
  container.appendChild(formTitle);

  const listTitle = document.createElement('h1');
  const contList = document.getElementById('containerList');
  contList.appendChild(listTitle);
  listTitle.textContent = 'Liste des véhicules: ';
});
