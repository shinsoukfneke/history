const heroDescriptions = {
    "Emilio Aguinaldo": "First President of the Philippines and leader during the Philippine Revolution against Spain.",
    "Jose Rizal": "National hero, writer of Noli Me Tangere and El Filibusterismo, inspired the revolution.",
    "Gabriela Silang": "First female leader of a Filipino movement against Spanish colonization.",
    "Andres Bonifacio": "Founder of the Katipunan, fought for Philippine independence.",
    "Apolinario Mabini": "Brains of the Revolution, known for his intellect despite being paralyzed.",
    "Manuel L. Quezon": "First President of the Philippine Commonwealth under U.S. rule.",
    "Benigno Aquino Jr.": "Martyr for democracy, whose assassination sparked the People Power Revolution.",
    "Marcelo H. del Pilar": "Journalist and reformist, editor of La Solidaridad.",
    "Antonio Luna": "Brilliant general in the Philippine-American War, known for discipline and bravery.",
    "Lapu-Lapu": "First Filipino hero, resisted Magellan's expedition in the Battle of Mactan."
};

function showModal(hero) {
    document.getElementById("hero-name").innerText = hero;
    document.getElementById("hero-desc").innerText = heroDescriptions[hero] || "No description available.";
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
