function renderContentGallery(data) {
    
    //validacija
    if (!data) {
        console.warn('Error: generuojant galerija, reikia duoti tinkama info.')
        return '';
    }
    //logika
    const maxgallerySize = 4;
    const visiblephotoCount = data.length > maxgallerySize ? maxgallerySize : data.length;

    let imagesHTML = " ";
    for (let i = 0; i < visiblephotoCount; i++) {
        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User post Gallery Pictures">`
    }

    return `<div class="gallery gallery-${visiblephotoCount}">
            ${imagesHTML}
            </div>`
}

export default renderContentGallery;