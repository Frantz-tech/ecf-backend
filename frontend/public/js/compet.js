function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois avec 2 chiffres
  const day = String(date.getDate()).padStart(2, '0'); // Jour avec 2 chiffres
  const hours = String(date.getHours()).padStart(2, '0'); // Heure avec 2 chiffres
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutes avec 2 chiffres

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function fetchCompets() {
  fetch('http://localhost:3000/api/competition')
    .then((response) => response.json())
    .then((data) => {
      console.log('Compétitions récupérées:', data); // Vérifie les données reçues

      const competList = document.getElementById('competList');
      const compets = data.data;
      competList.innerHTML = '';
      if (Array.isArray(compets) && compets.length > 0) {
        compets.forEach((compet) => {
          const competItem = document.createElement('div');
          // Applique formatDate pour les dates
          const formattedDateDebut = formatDate(compet.date_debut);
          const formattedDateFin = formatDate(compet.date_fin);

          competItem.innerHTML = `<p>Nom de la compétition : ${compet.nom}</p>
                                  <p>Date de début : ${formattedDateDebut}</p>
                                  <p>Date de fin : ${formattedDateFin}</p>`;
          competList.appendChild(competItem);
          competItem.classList.add('competItem');
        });
      } else {
        competList.innerHTML = '<p>Aucune compétition trouvée.</p>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des compétitions:', error);
      const competList = document.getElementById('competList');
      competList.innerHTML = '<p>Erreur de récupération des compétitions.</p>';
    });
}

// Charger initialement les compets
fetchCompets();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addCompetForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const date_debut = document.getElementById('date_debut').value;
    const date_fin = document.getElementById('date_fin').value;

    fetch('http://localhost:3000/api/competition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom, date_debut, date_fin }),
    })
      .then((response) => response.json())
      .then((compet) => {
        console.log('Compétition ajoutée:', compet);
        fetchCompets(); // Recharge la liste des compétitions après l'ajout
      });
  });

  const formTitle = document.createElement('h2');
  const container = document.getElementById('containerF');
  formTitle.textContent = "Ajout d'une compétition";
  container.appendChild(formTitle);

  const listTitle = document.createElement('h1');
  const contList = document.getElementById('containerList');
  contList.appendChild(listTitle);
  listTitle.textContent = 'Liste des compétitions: ';
});
