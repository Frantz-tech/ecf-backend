// Fonction pour récupérer la liste des pilotes
function fetchPilotes() {
  fetch('http://localhost:3000/api/pilote')
    .then((response) => response.json())
    .then((data) => {
      console.log('Pilotes récupérés:', data); // Vérifie les données reçues

      const piloteList = document.getElementById('piloteList');
      const pilotes = data.data;
      if (Array.isArray(pilotes) && pilotes.length > 0) {
        pilotes.forEach((pilote) => {
          const piloteItem = document.createElement('div');
          piloteItem.innerHTML = `<p>Nom: ${pilote.nom}</p> <p>Prénom: ${pilote.prenom}</p> <p>Age: ${pilote.age}</p>`;
          piloteList.appendChild(piloteItem);
          piloteItem.classList.add('piloteItem');
        });
      } else {
        piloteList.innerHTML = '<p>Aucun pilote trouvé.</p>';
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des pilotes:', error);
      const piloteList = document.getElementById('piloteList');
      piloteList.innerHTML = '<p>Erreur de récupération des pilotes.</p>';
    });
}

// Charger initialement les pilotes
fetchPilotes();

const form = document.getElementById('addPiloteForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const age = document.getElementById('age').value;

  fetch('http://localhost:3000/api/pilote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nom, prenom, age }),
  })
    .then((response) => response.json())
    .then((pilote) => {
      console.log('Pilote ajouté:', pilote);
      fetchPilotes(); // Recharge la liste des pilotes après l'ajout
    });
});
const formTitle = document.createElement('h2');
const container = document.getElementById('containerF');
formTitle.textContent = "Ajout d'un Pilote";
container.appendChild(formTitle);

const listTitle = document.createElement('h1');
const contList = document.getElementById('containerList');
contList.appendChild(listTitle);
listTitle.textContent = 'Liste des pilotes: ';
