document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://formulariobackend.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.mensaje);
    } else {
      alert(result.mensaje || '❌ Error');
    }

  } catch (error) {
    alert('❌ Error al conectar: ' + error.message);
  }
});
