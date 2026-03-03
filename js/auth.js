// ============================================================
// auth.js  –  Login / logout / role selection
// ============================================================

function selectRole(type) {
  selectedRole = type;
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('role-' + type).classList.add('selected');
  document.getElementById('loginError').classList.remove('show');
}

function doLogin() {
  const username = (document.getElementById('loginUsername').value || '').trim().toLowerCase();
  const password = (document.getElementById('loginPassword').value || '').trim();
  const errEl    = document.getElementById('loginError');

  if (!selectedRole) {
    errEl.textContent = '⚠️ Vui lòng chọn loại người dùng.';
    errEl.classList.add('show'); return;
  }
  if (!username || !password) {
    errEl.textContent = '⚠️ Vui lòng nhập đầy đủ tài khoản và mật khẩu.';
    errEl.classList.add('show'); return;
  }
  const cred = CREDENTIALS[selectedRole];
  if (!cred.users.includes(username) || password !== cred.pass) {
    errEl.textContent = '⚠️ Sai tài khoản hoặc mật khẩu.';
    errEl.classList.add('show'); return;
  }

  errEl.classList.remove('show');
  currentUser = selectedRole;

  const loginScreen = document.getElementById('loginScreen');
  loginScreen.classList.add('hidden');
  setTimeout(() => loginScreen.style.display = 'none', 600);

  document.getElementById('navbar').style.display = 'flex';
  document.getElementById('pages').style.display  = 'block';

  setupNav();
  setupHome();
  setupProfile();
  showPage('home');
}

function logout() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('pages').style.display  = 'none';
  document.getElementById('loginUsername').value  = '';
  document.getElementById('loginPassword').value  = '';
  document.getElementById('loginError').classList.remove('show');
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  selectedRole = null;
  currentUser  = null;
}
