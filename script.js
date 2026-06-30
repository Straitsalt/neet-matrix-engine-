// Select HTML elements
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

// Preview uploaded image
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];

    if (!file) return;

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
});

// Analyze button
async function analyzeFood() {

    const file = imageInput.files[0];

    if (!file) {
        alert("Please select a food image.");
        return;
    }

    loading.style.display = "block";
    result.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {

        const response = await fetch("/api/analyze", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        loading.style.display = "none";
        result.style.display = "block";

        result.innerHTML = `
            <h2>🍽 AI Analysis</h2>

            <div class="card">
                <strong>Food:</strong> ${data.food}
            </div>

            <div class="card">
                🔥 Calories: ${data.calories} kcal
            </div>

            <div class="card">
                💪 Protein: ${data.protein} g
            </div>

            <div class="card">
                🍞 Carbs: ${data.carbs} g
            </div>

            <div class="card">
                🧈 Fat: ${data.fat} g
            </div>

            <div class="card">
                🎯 Confidence: ${data.confidence}%
            </div>
        `;

    } catch (error) {

        loading.style.display = "none";

        alert("Unable to analyze image.");

        console.error(error);

    }

}