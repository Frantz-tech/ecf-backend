async function fetchPilotes() {
  fetch('http://localhost:3000/api/pilote')
    .then((response) => response.json())
    .then((data) => {
      console.log('Pilotes récupérés:', data); // Vérifie les données reçues

      const piloteSelect = document.getElementById('piloteOption');
      const pilotes = data.data;
      if (Array.isArray(pilotes) && pilotes.length > 0) {
        pilotes.forEach((pilote) => {
          const option = document.createElement('option');
          option.value = pilote._id; // Utilise l'ID du pilote
          option.textContent = `${pilote.nom} ${pilote.prenom}`; // Affiche le nom du pilote

          piloteSelect.appendChild(option);
        });
      } else {
        piloteSelect.innerHTML = '<option>Aucun pilote trouvé</option>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des pilotes:', error);
      const piloteSelect = document.getElementById('pilote');
      piloteSelect.innerHTML = '<option>Erreur de récupération des pilotes</option>';
    });
}

async function fetchVehicules() {
  fetch('http://localhost:3000/api/car')
    .then((response) => response.json())
    .then((data) => {
      console.log('Véhicules récupérés:', data); // Vérifie les données reçues

      const vehiculeSelect = document.getElementById('vehiculeOption');
      const vehicules = data.data;
      if (Array.isArray(vehicules) && vehicules.length > 0) {
        vehicules.forEach((vehicule) => {
          const option = document.createElement('option');
          option.value = vehicule._id; // Utilise l'ID du véhicule
          option.textContent = vehicule.marque; // Affiche le nom du véhicule
          option.textContent = vehicule.modele; // Affiche le nom du véhicule
          vehiculeSelect.appendChild(option);
        });
      } else {
        vehiculeSelect.innerHTML = '<option>Aucun véhicule trouvé</option>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des véhicules:', error);
      const vehiculeSelect = document.getElementById('vehicule');
      vehiculeSelect.innerHTML = '<option>Erreur de récupération des véhicules</option>';
    });
}

async function fetchCompetitions() {
  fetch('http://localhost:3000/api/competition')
    .then((response) => response.json())
    .then((data) => {
      console.log('Compétitions récupérées:', data); // Vérifie les données reçues

      const competitionSelect = document.getElementById('competitionOption');
      const competitions = data.data;
      if (Array.isArray(competitions) && competitions.length > 0) {
        competitions.forEach((competition) => {
          const option = document.createElement('option');
          option.value = competition._id; // Utilise l'ID de la compétition
          option.textContent = competition.nom; // Affiche le nom de la compétition
          competitionSelect.appendChild(option);
        });
      } else {
        competitionSelect.innerHTML = '<option>Aucune compétition trouvée</option>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des compétitions:', error);
      const competitionSelect = document.getElementById('competition');
      competitionSelect.innerHTML = '<option>Erreur de récupération des compétitions</option>';
    });
}

// Charger les données lorsque la page est prête
document.addEventListener('DOMContentLoaded', () => {
  fetchPilotes();
  fetchVehicules();
  fetchCompetitions();
  fetchParticipations(); // nouvelle ligne
});

function handleSubmit(event) {
  event.preventDefault();

  // Récupérer l'ID de la sélection

  // const piloteId = document.getElementById('piloteOption').value;
  // const vehiculeId = document.getElementById('vehiculeOption').value;
  // const competitionId = document.getElementById('competitionOption').value;

  // // Afficher les valeurs pour voir ce qui est récupéré
  // console.log('Pilote ID:', piloteId);
  // console.log('Véhicule ID:', vehiculeId);
  // console.log('Compétition ID:', competitionId);

  // Récupérer le nom de la sélection (utiliser textContent)
  const piloteName =
    document.getElementById('piloteOption').options[document.getElementById('piloteOption').selectedIndex].textContent;
  const vehiculeName =
    document.getElementById('vehiculeOption').options[document.getElementById('vehiculeOption').selectedIndex]
      .textContent;
  const competitionName =
    document.getElementById('competitionOption').options[document.getElementById('competitionOption').selectedIndex]
      .textContent;

  // Afficher les valeurs pour voir ce qui est récupéré
  console.log('Pilote Name:', piloteName);
  console.log('Véhicule Name:', vehiculeName);
  console.log('Compétition Name:', competitionName);

  if (!piloteName || !vehiculeName || !competitionName) {
    alert('Tous les champs sont requis');
    return;
  }

  fetch('http://localhost:3000/api/pvc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pilote: piloteName,
      vehicule: vehiculeName,
      competition: competitionName,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('data response : ', data);
      const response = data.data;
      if (data.error) {
        console.log("Détails de l'erreur :", data.error); // Ajout du log pour obtenir plus de détails
        alert('Erreur: ' + data.error);
      } else {
        alert('Pilote, Véhicule et Compétition liés avec succès!');
        fetchParticipations(); // recharge la liste des participations
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la liaison :', error);
      alert('Erreur lors de la liaison : ' + error.message);
    });
}

document.getElementById('addPvcForm').addEventListener('submit', handleSubmit);

const listTitle = document.createElement('h1');
const contList = document.getElementById('containerList');
contList.appendChild(listTitle);
listTitle.textContent = 'Liste des participations: ';

// Fonction pour récupérer la liste des participations

function fetchParticipations() {
  fetch('http://localhost:3000/api/pvc')
    .then((response) => response.json())
    .then((data) => {
      console.log('Participations récupérées:', data);
      const listContainer = document.getElementById('containerList');
      listContainer.innerHTML = ''; // Nettoie la liste actuelle

      const participations = data.data;
      if (Array.isArray(participations) && participations.length > 0) {
        participations.forEach((pvc) => {
          const item = document.createElement('div');
          item.classList.add('participationItem');
          item.innerHTML = `
            <p><strong>Pilote:</strong> ${pvc.pilote.nom || 'Non défini'} ${pvc.pilote.prenom || ''}</p>
            <p><strong>Véhicule:</strong> ${pvc.vehicule.marque || 'Non défini'} ${pvc.vehicule.modele || ''}</p>
            <p><strong>Compétition:</strong> ${pvc.competition.nom || 'Non défini'}</p>
          `;
          listContainer.appendChild(item);
        });
      } else {
        listContainer.innerHTML = '<p>Aucune participation trouvée.</p>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des participations:', error);
    });
}
