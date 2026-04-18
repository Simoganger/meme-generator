const form = document.getElementById('meme-form');
const gallery = document.getElementById('meme-gallery');

form.addEventListener('submit', function(e) {
    // 1. Empêcher le rechargement de la page
    e.preventDefault();

    // 2. Récupérer les valeurs des inputs
    const url = document.getElementById('image-url').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;

    // 3. Créer les éléments du mème
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme-container');

    const img = document.createElement('img');
    img.src = url;

    const topDiv = document.createElement('div');
    topDiv.classList.add('meme-text', 'top');
    topDiv.innerText = topText;

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('meme-text', 'bottom');
    bottomDiv.innerText = bottomText;

    const deleteOverlay = document.createElement('div');
    deleteOverlay.classList.add('delete-overlay');
    deleteOverlay.innerHTML = '<span>&times;</span>';

    // 4. Ajouter l'événement de suppression sur l'overlay
    deleteOverlay.addEventListener('click', function() {
        memeDiv.remove();
    });

    // 5. Assembler le mème
    memeDiv.appendChild(img);
    memeDiv.appendChild(topDiv);
    memeDiv.appendChild(bottomDiv);
    memeDiv.appendChild(deleteOverlay);

    // 6. Ajouter au DOM
    gallery.appendChild(memeDiv);

    // 7. Réinitialiser le formulaire
    form.reset();
});