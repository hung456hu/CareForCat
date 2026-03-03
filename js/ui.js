// ============================================================
// ui.js  –  Navigation, notifications, modals, filters
// ============================================================

// ---------- Page routing ----------
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  const link = document.getElementById('navlink-' + id);
  if (link) link.classList.add('active');
}

// ---------- Notifications ----------
function toggleNotif() {
  document.getElementById('notifDropdown').classList.toggle('open');
}

function clearNotif() {
  document.getElementById('notifList').innerHTML =
    '<div style="padding:30px;text-align:center;color:var(--text-light)">🎉 No new notifications</div>';
}

// ---------- Modal ----------
function openModal(type) {
  document.getElementById('modalContent').innerHTML = MODAL_CONTENT[type] || '';
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// ---------- Filters ----------
function filterActive(btn) {
  btn.closest('.filter-bar').querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function filterShop(btn, category) {
  document.querySelectorAll('#shopFilterBar .filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#shopGrid .product-card').forEach(card => {
    card.style.display =
      (category === 'All' || card.dataset.category === category) ? '' : 'none';
  });
}

function filterForum(btn, category) {
  document.querySelectorAll('#forumFilterBar .filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#forumPosts .post-card').forEach(card => {
    card.style.display =
      (category === 'All' || card.dataset.category === category) ? '' : 'none';
  });
}

function filterProductTab(btn, status) {
  btn.closest('.manage-tabs').querySelectorAll('.manage-tab')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#productTableBody tr').forEach(row => {
    row.style.display =
      (status === 'all' || row.dataset.status === status) ? '' : 'none';
  });
}
