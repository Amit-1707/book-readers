const auth = firebase.auth();

window.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById("user-info");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginNav = document.getElementById("loginNav");
  const logoutNav = document.getElementById("logoutNav");

  auth.onAuthStateChanged(user => {
    if (user) {
      if (userInfo) userInfo.textContent = `Logged in as ${user.email}`;
      if (logoutBtn) logoutBtn.classList.remove('d-none');
      if (logoutNav) logoutNav.style.display = 'inline';
      if (loginNav) loginNav.style.display = 'none';
    } else {
      if (!window.location.pathname.includes('login_register.html')) {
        alert('You must be logged in to access this page. Redirecting...');
        window.location.href = 'login_register.html';
      }
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.signOut().then(() => {
        window.location.href = 'login_register.html';
      });
    });
  }

  if (logoutNav) {
    logoutNav.addEventListener('click', () => {
      auth.signOut().then(() => {
        window.location.href = 'login_register.html';
      });
    });
  }
});
