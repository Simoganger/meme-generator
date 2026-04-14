const form = document.querySelector('#meme-form');
const container = document.querySelector('#meme-container');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Get values
    const imgUrl = document.querySelector('#image-url').value;
    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;

    // 2. Create elements
    const memeWrapper = document.createElement('div');
    memeWrapper.classList.add('meme-wrapper');

    const img = document.createElement('img');
    img.src = imgUrl;

    const tText = document.createElement('div');
    tText.classList.add('meme-text', 'top-text');
    tText.innerText = topText;

    const bText = document.createElement('div');
    tText.classList.add('meme-text', 'bottom-text');
    bText.innerText = bottomText;

    // 3. Append to wrapper and container
    memeWrapper.appendChild(img);
    memeWrapper.appendChild(tText);
    memeWrapper.appendChild(bText);
    container.appendChild(memeWrapper);

    // 4. Add delete functionality
    memeWrapper.addEventListener('click', () => {
        memeWrapper.remove();
    });

    // 5. Reset form
    form.reset();
});