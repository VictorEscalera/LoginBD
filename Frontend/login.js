const form = document.getElementById('loginForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const res = await fetch('https://loginbd.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      mensaje.textContent = data.message;
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = data.error;
      mensaje.style.color = 'red';
    }
  } catch (error) {
    mensaje.textContent = 'Error de conexión';
    mensaje.style.color = 'red';
  }
});
