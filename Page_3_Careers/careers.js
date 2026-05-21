// ---- Import Firebase ----
import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form      = document.getElementById("appForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");
const errorMsg   = document.getElementById("errorMsg");

// ---- Validate all fields, returns true if valid ----
function validate() {
  let valid = true;

  function showErr(id, msg) {
    const el = document.getElementById("err-" + id);
    const input = document.getElementById(id);
    el.textContent = msg;
    if (msg) { input.classList.add("invalid"); valid = false; }
    else      { input.classList.remove("invalid"); }
  }

  const name  = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pos   = document.getElementById("position").value;
  const exp   = document.getElementById("experience").value;
  const reason= document.getElementById("reason").value.trim();

  showErr("fullName",   !name  ? "Name is required." : "");
  showErr("email",      !email ? "Email is required." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email." : "");
  showErr("phone",      !phone ? "Phone is required." : !/^\d{10}$/.test(phone) ? "Enter a valid 10-digit number." : "");
  showErr("position",   !pos   ? "Please select a position." : "");
  showErr("experience", exp < 0 ? "Experience cannot be negative." : "");
  showErr("reason",     !reason ? "This field is required." : reason.length < 20 ? "Minimum 20 characters required." : "");

  return valid;
}

// ---- Form Submit ----
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  successMsg.style.display = "none";
  errorMsg.style.display   = "none";

  if (!validate()) return;

  // Disable button while saving
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const data = {
    fullName:    document.getElementById("fullName").value.trim(),
    email:       document.getElementById("email").value.trim(),
    phone:       document.getElementById("phone").value.trim(),
    position:    document.getElementById("position").value,
    experience:  Number(document.getElementById("experience").value) || 0,
    reason:      document.getElementById("reason").value.trim(),
    submittedAt: serverTimestamp()   // Firebase server timestamp
  };

  try {
    await addDoc(collection(db, "applications"), data);
    form.reset();
    successMsg.style.display = "block";
    successMsg.scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    errorMsg.textContent = "❌ Submission failed: " + err.message;
    errorMsg.style.display = "block";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Application";
  }
});
