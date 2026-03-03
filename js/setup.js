// ============================================================
// setup.js  –  DOM population functions called after login
// ============================================================

// ---------- Shared state ----------
let currentUser  = null;
let selectedRole = null;

// ---------- Navbar ----------
function setupNav() {
  const u  = USERS[currentUser];
  const av = document.getElementById('navAvatar');
  av.textContent = u.icon;
  av.className   = 'avatar ' + u.avatarClass;
  document.getElementById('navName').textContent = u.name;
  document.getElementById('navRole').textContent = u.role;

  document.getElementById('navLinks').innerHTML =
    NAV_CONFIG[currentUser].map(l =>
      `<button class="nav-link" id="navlink-${l.id}" onclick="showPage('${l.id}')">
         <span class="nav-icon">${l.icon}</span> ${l.label}
       </button>`
    ).join('');

  const times = ['5 minutes ago', '1 hour ago', '3 hours ago', '1 day ago'];
  document.getElementById('notifList').innerHTML =
    NOTIFICATIONS[currentUser].map((n, i) =>
      `<div class="notif-item">
         <div class="notif-dot"></div>
         <div>
           <div class="notif-text">${n}</div>
           <div class="notif-time">${times[i]}</div>
         </div>
       </div>`
    ).join('');
}

// ---------- Home page ----------
function setupHome() {
  const d = HOME_DATA[currentUser];
  document.getElementById('heroGreeting').textContent    = d.greeting;
  document.getElementById('heroTitle').innerHTML         = d.title.replace('\n', '<br>');
  document.getElementById('heroDesc').textContent        = d.desc;

  document.getElementById('quickStats').innerHTML =
    d.stats.map(s =>
      `<div class="stat-card">
         <div class="stat-icon">${s.icon}</div>
         <div class="stat-num">${s.num}</div>
         <div class="stat-label">${s.label}</div>
       </div>`
    ).join('');

  document.getElementById('homeCards').innerHTML =
    d.cards.map(c =>
      `<div class="card">
         <div class="card-img ${c.bg}">${c.img}</div>
         <div class="card-body">
           <span class="card-tag ${c.tagClass}">${c.tag}</span>
           <div class="card-title">${c.title}</div>
           <div class="card-desc">${c.desc}</div>
         </div>
         <div class="card-footer">
           <span class="card-author">CareForCat</span>
           <button class="card-btn">${c.btn}</button>
         </div>
       </div>`
    ).join('');
}

// ---------- Profile page ----------
function setupProfile() {
  const u = USERS[currentUser];
  document.getElementById('profileAvatarBig').textContent  = u.icon;
  document.getElementById('profileName').textContent       = u.name;
  document.getElementById('profileEmail').textContent      = u.email;
  document.getElementById('profileRoleBadge').textContent  = u.role;

  const extra =
    currentUser === 'owner'
      ? `<div class="info-card"><div class="info-label">Cats Owned</div><div class="info-value">${u.cats} cats 🐱</div></div>`
      : currentUser === 'seller'
      ? `<div class="info-card"><div class="info-label">Total Products</div><div class="info-value">${u.products} products 📦</div></div>`
      : `<div class="info-card"><div class="info-label">Total Consultations</div><div class="info-value">${u.consultations} sessions 👩‍⚕️</div></div>`;

  document.getElementById('profileInfoGrid').innerHTML = `
    <div class="info-card"><div class="info-label">Phone</div><div class="info-value">${u.phone}</div></div>
    <div class="info-card"><div class="info-label">Location</div><div class="info-value">${u.address}</div></div>
    <div class="info-card"><div class="info-label">Member Since</div><div class="info-value">${u.joinDate}</div></div>
    ${extra}`;
}
