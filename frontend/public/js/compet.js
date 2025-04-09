function fetchCompets() {
  fetch('http://localhost:3000/api/competition')
    .then((response) => response.json())
    .then((data) => {
      console.log('Compétitions récupérés:', data); // Vérifie les données reçues

      const competList = document.getElementById('competList');
      const compets = data.data;
      competList.innerHTML = '';
      if (Array.isArray(compets) && compets.length > 0) {
        compets.forEach((compet) => {
          const competItem = document.createElement('div');
          competItem.innerHTML = `<p>Nom de la compétition : ${compet.nom}</p> <p>Date de début : ${compet.date_debut}</p> <p> Date de fin :${compet.date_fin}</p> `;
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
        console.log('Compétition ajouté:', compet);
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
