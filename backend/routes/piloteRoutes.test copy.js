import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../app';

describe('GET /pilote', () => {
  it('should return a list of pilots', async () => {
    const response = await request(app).get('/api/pilote');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true); // Vérifie que c'est un tableau
    if (response.body.data.length > 0) {
      expect(typeof response.body.data).toBe('object');
    }
    console.log(response.body.data);
  });
});

describe('Get /pilote/:id', () => {
  it('should return an object of 1 pilot depending on his ID', async () => {
    const response = await request(app).get('/api/pilote/67f3d63c8cc0c604fc158591');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    if (response.body.data.length > 0) {
      expect(typeof response.body.data).toBe('object');
    }
    console.log(response.body.data);
  });
});

describe('Post /pilote', () => {
  it('Should post a new pilote in the database', async () => {
    const data = {
      nom: 'Djibril',
      prenom: 'Cisse',
      age: 44,
    };
    const postResponse = await request(app).post('/api/pilote').send(data);

    expect(postResponse.status).toBe(201);
    expect(postResponse.body).toHaveProperty('data');
    expect(typeof postResponse.body.data).toBe('object');

    expect(postResponse.body.data).toHaveProperty('nom', data.nom);
    expect(postResponse.body.data).toHaveProperty('prenom', data.prenom);
    expect(postResponse.body.data).toHaveProperty('age', data.age);
    expect(postResponse.body.data).toHaveProperty('_id');
    console.log(postResponse.body.data);
  });
});

// describe('Put /pilote/:id', () => {
//   it('Should update a pilote in the database', async () => {
//     const data = {
//       nom: 'Djibril',
//       prenom: 'Cisse',
//       age: 44,
//     };

//     const updatedData = {
//       nom: 'Samuel',
//       prenom: 'Umtiti',
//       age: 37,
//     };

//     // Création d'un nouveau pilote
//     const postResponse = await request(app).post('/api/pilote').send(data);
//     console.log('Post Response:', postResponse.body); // Vérifie la réponse de création

//     expect(postResponse.status).toBe(201);
//     expect(postResponse.body).toHaveProperty('data');
//     expect(postResponse.body.data).toHaveProperty('nom', data.nom);
//     expect(postResponse.body.data).toHaveProperty('prenom', data.prenom);
//     expect(postResponse.body.data).toHaveProperty('age', data.age);
//     expect(postResponse.body.data).toHaveProperty('_id');

//     // Récupère l'ID du pilote créé
//     const piloteId = postResponse.body.data._id;

//     // Mise à jour du pilote
//     const putResponse = await request(app).put(`/api/pilote/${piloteId}`).send(updatedData);
//     console.log('Put Response:', putResponse.body); // Vérifie la réponse de mise à jour

//     // Vérification de la réponse après mise à jour
//     expect(putResponse.status).toBe(200);
//     expect(putResponse.body).toHaveProperty('nom', updatedData.nom);
//     expect(putResponse.body).toHaveProperty('prenom', updatedData.prenom);
//     expect(putResponse.body).toHaveProperty('age', updatedData.age);
//     expect(putResponse.body).toHaveProperty('_id', piloteId);
//   });
// });

describe('Delete /pilote/:id', () => {
  it('should delete a pilote in the database', async () => {
    const response = await request(app).delete('/api/pilote/67f3d8bc16004c8fd9b73dda');
    expect(response.status).toBe(200);
  });
});
