const auth = firebase.auth();

window.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById("user-info");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginNav = document.getElementById("loginNav");
  const logoutNav = document.getElementById("logoutNav");

  firebase.auth().onAuthStateChanged(function(user) {
    console.log('Auth state changed. User:', user);
    const onLoginPage = window.location.pathname.includes('login_register.html');

    if (user) {
      setTimeout(() => {
        if (onLoginPage) {
          window.location.href = 'index.html';
        }
      }, 100);

      if (userInfo) userInfo.textContent = `Logged in as ${user.email}`;
      if (logoutBtn) logoutBtn.classList.remove("d-none");
      if (logoutNav) logoutNav.style.display = "inline";
      if (loginNav) loginNav.style.display = "none";
    } else {
      if (!onLoginPage) {
        setTimeout(() => {
          window.location.href = 'login_register.html';
        }, 100);
      }
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.signOut().then(() => window.location.href = 'login_register.html');
    });
  }

  if (logoutNav) {
    logoutNav.addEventListener('click', () => {
      auth.signOut().then(() => window.location.href = 'login_register.html');
    });
  }
});
