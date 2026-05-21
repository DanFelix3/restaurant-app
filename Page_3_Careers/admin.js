// ---- Import Firebase ----
import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, getDocs, orderBy, query }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ---- DOM refs ----
const loginSection  = document.getElementById("loginSection");
const dashboard     = document.getElementById("dashboard");
const logoutBtn     = document.getElementById("logoutBtn");
const loginError    = document.getElementById("loginError");
const loginBtn      = document.getElementById("loginBtn");
const loadingMsg    = document.getElementById("loadingMsg");
const emptyMsg      = document.getElementById("emptyMsg");
const appTable      = document.getElementById("appTable");
const appTableBody  = document.getElementById("appTableBody");
const appCount      = document.getElementById("appCount");

// ---- Auth state: stay logged in on refresh ----
onAuthStateChanged(auth, (user) => {
  if (user) {
    showDashboard();
    loadApplications();
  }
  // If no user, login form is already visible by default
});

// ---- Login ----
window.handleLogin = async function () {
  loginError.style.display = "none";
  loginBtn.disabled = true;
  loginBtn.textContent = "Signing in...";

  const email    = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showDashboard();
    loadApplications();
  } catch (err) {
    loginError.textContent = "❌ Invalid email or password. Please try again.";
    loginError.style.display = "block";
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "Login";
  }
};

// ---- Logout ----
window.handleLogout = async function () {
  await signOut(auth);
  loginSection.style.display = "block";
  dashboard.style.display    = "none";
  logoutBtn.style.display    = "none";
  // Reset table for next login
  appTableBody.innerHTML = "";
  appTable.style.display = "none";
  loadingMsg.style.display = "block";
};

// ---- Show dashboard, hide login ----
function showDashboard() {
  loginSection.style.display = "none";
  dashboard.style.display    = "block";
  logoutBtn.style.display    = "inline-block";
}

// ---- Fetch and display applications ----
async function loadApplications() {
  loadingMsg.style.display = "block";
  emptyMsg.style.display   = "none";
  appTable.style.display   = "none";

  try {
    // Sort newest first
    const q = query(collection(db, "applications"), orderBy("submittedAt", "desc"));
    const snapshot = await getDocs(q);

    loadingMsg.style.display = "none";

    if (snapshot.empty) {
      emptyMsg.style.display = "block";
      appCount.textContent = "0 applications";
      return;
    }

    appTableBody.innerHTML = "";
    let rowNum = 1;

    snapshot.forEach(doc => {
      const d = doc.data();
      // Format timestamp
      let submittedAt = "—";
      if (d.submittedAt && d.submittedAt.toDate) {
        submittedAt = d.submittedAt.toDate().toLocaleString("en-IN");
      } else if (d.submittedAt) {
        submittedAt = new Date(d.submittedAt).toLocaleString("en-IN");
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${rowNum++}</td>
        <td>${d.fullName || "—"}</td>
        <td>${d.email || "—"}</td>
        <td>${d.phone || "—"}</td>
        <td>${d.position || "—"}</td>
        <td>${d.experience ?? "—"}</td>
        <td>${d.reason || "—"}</td>
        <td>${submittedAt}</td>
      `;
      appTableBody.appendChild(tr);
    });

    appTable.style.display = "table";
    appCount.textContent = `${snapshot.size} application${snapshot.size !== 1 ? "s" : ""}`;

  } catch (err) {
    loadingMsg.textContent = "❌ Failed to load applications: " + err.message;
  }
}
