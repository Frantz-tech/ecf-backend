fetch('http://localhost:3000/api/pilote')
  .then((response) => response.json())
  .then((pilotes) => {
    console.log(pilotes); // doit afficher les pilotes dans la console
  });
