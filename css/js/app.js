// Import Firebase SDKs (نسخه ماژول ES)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// این قسمت رو با مقادیر خودت از Firebase پر کنconst firebaseConfig = {
 apiKey: "اینجا apiKey خودت",
 authDomain: "اینجا authDomain خودت",
 projectId: "اینجا projectId خودت",
 storageBucket: "اینجا storageBucket خودت",
 messagingSenderId: "اینجا messagingSenderId خودت",
 appId: "اینجا appId خودت",
 measurementId: "اینجا measurementId خودت"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// گرفتن عناصر از HTMLconst loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userInfo = document.getElementById("userInfo");

// ورود با گوگلloginBtn.addEventListener("click", () => {
 signInWithPopup(auth, provider)
 .then(result => {
 userInfo.textContent = "خوش آمدی " + result.user.displayName + " (" + result.user.email + ")";
 })
 .catch(error => {
 console.error(error);
 alert("خطا در ورود: " + error.message);
 });
});

// خروج
logoutBtn.addEventListener("click", () => {
 signOut(auth).then(() => {
 userInfo.textContent = "از سیستم خارج شدید.";
 });
});

// تغییر وضعیت کاربرonAuthStateChanged(auth, user => {
 if (user) {
 loginBtn.style.display = "none";
 logoutBtn.style.display = "inline-block";
 userInfo.textContent = "خوش آمدی " + user.displayName + " (" + user.email + ")";
 } else {
 loginBtn.style.display = "inline-block";
 logoutBtn.style.display = "none";
 userInfo.textContent = "لطفاً وارد شوید...";
 }
});
