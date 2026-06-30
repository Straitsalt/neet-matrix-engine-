// Import the core Firebase SDK modules from the official CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// 🛠️ PASTE YOUR EXACT CONFIG OBJECT FROM FIREBASE SETTINGS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCX3eiVX9IRVTBaUw7a-ZiEUyppmKHjAuI",
    authDomain: "ai-student-hub-1fbcf.firebaseapp.com",
    projectId: "ai-student-hub-1fbcf",
    storageBucket: "ai-student-hub-1fbcf.firebasestorage.app",
    messagingSenderId: "952531943419",
    appId: "1:952531943419:web:dbb1e4f8f25dc169b0155e",
    measurementId: "G-YWRY9GNN2C"
};

// Initialize Firebase App instance
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage engine and export it for use
export const storage = getStorage(app);

// Export all the structural storage utility functions we need
export { ref, uploadBytes, getDownloadURL, listAll, deleteObject };
