const toast = document.getElementById("toast");
const menuSearch = document.getElementById("menuSearch");
const sidebar = document.getElementById("sidebar");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("tripListBtn").addEventListener("click", () => {
  showToast("Linehaul Trip List dibuka — 487 trip aktif.");
});

document.getElementById("detailBtn").addEventListener("click", () => {
  showToast("Detail Operation Progress siap ditampilkan.");
});

document.querySelector(".mobile-link").addEventListener("click", () => {
  showToast("Tautan aplikasi mobile dipilih.");
});

document.querySelector(".floating-tools button").addEventListener("click", () => {
  showToast("Quick settings aktif.");
});

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".nav-item").forEach(x => x.classList.remove("active"));
    item.classList.add("active");
    if (window.innerWidth < 700) sidebar.classList.remove("open");
    showToast(`${item.textContent.replace(/[⌃⌄]/g, "").trim()} dipilih`);
  });
});

menuSearch.addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll("#navMenu .nav-item").forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = !q || text.includes(q) ? "flex" : "none";
  });
});

document.getElementById("sidebarToggle").addEventListener("click", () => {
  if (window.innerWidth < 700) sidebar.classList.toggle("open");
  else showToast("Sidebar siap digunakan.");
});

// Small live-data effect: refresh timestamp without changing the dashboard numbers.
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString("id-ID", {hour:"2-digit", minute:"2-digit"});
  document.getElementById("lastUpdated").textContent = `Updated 18 Sep ${time}`;
}, 60000);
