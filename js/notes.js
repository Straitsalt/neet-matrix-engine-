// Load saved notes when the page opens
window.onload = function () {
    const savedNotes = localStorage.getItem("studyNotes");

    if (savedNotes) {
        document.getElementById("notes").value = savedNotes;
    }
};

// Save notes
function saveNotes() {

    const notes = document.getElementById("notes").value;

    localStorage.setItem("studyNotes", notes);

    alert("✅ Notes saved successfully!");

}
