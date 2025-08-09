function checkDesktopMode() {
    const mascotContainer = document.getElementById('mascot-container');

    if (window.innerWidth >= 1024) {
        mascotContainer.classList.remove('mascot-hidden');
    } else {
        mascotContainer.classList.add('mascot-hidden');
    }
}

// Jalankan saat halaman dibuka
checkDesktopMode();

// Jalankan saat ukuran layar berubah
window.addEventListener('resize', checkDesktopMode);
// Ambil data dari LocalStorage
function loadStories() {
    const stories = JSON.parse(localStorage.getItem("stories")) || [];
    const storyOutput = document.getElementById("story-output");
    storyOutput.innerHTML = "";
    stories.forEach((story, index) => {
        const li = document.createElement("li");
        li.textContent = story;
        storyOutput.appendChild(li);
    });
}

// Simpan cerita ke LocalStorage
document.getElementById("save-story").addEventListener("click", () => {
    const storyText = document.getElementById("story-input").value.trim();
    if (storyText === "") return alert("Ceritanya kosong, Bro!");
    const stories = JSON.parse(localStorage.getItem("stories")) || [];
    stories.push(storyText);
    localStorage.setItem("stories", JSON.stringify(stories));
    document.getElementById("story-input").value = "";
    loadStories();
});

// Load data pas halaman dibuka
loadStories();