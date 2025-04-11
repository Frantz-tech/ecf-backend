document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Si l'authentification est réussie, stocker le token (par exemple)
      localStorage.setItem('authToken', data.token); // Ou sessionStorage si tu veux que ce soit temporaire

      // Rediriger vers une page protégée
      window.location.href = '/dashboard.html'; // Remplace par ta page de destination
    } else {
      alert('Erreur : ' + data.message);
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
});
