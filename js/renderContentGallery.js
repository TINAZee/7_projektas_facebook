function renderContentGallery(data) {
    
    //validacija
    if (!data) {
        console.warn('Error: generuojant galerija, reikia duoti tinkama info.')
        return '';
    }
    //logika
    const maxgallerySize = 4;
    const totalPhotosCount = data.length;
    const visiblephotoCount = totalPhotosCount > maxgallerySize ? maxgallerySize : totalPhotosCount;

    let extraAttribute = '';
    if (totalPhotosCount > maxgallerySize) {
        extraAttribute = `data-extra="${totalPhotosCount - maxgallerySize}`;
    }

    let imagesHTML = '';
    for (let i = 0; i < visiblephotoCount; i++) {
        if (i === visiblephotoCount - 1) {
            imagesHTML += `<div class="img" ${extraAttribute}">
                                <img src="./img/posts/${data[i]}"
                                    alt="User post gallery picture">
                            </div>`;
        } else {
            imagesHTML += `<div class="img" >
                                <img src="./img/posts/${data[i]}"
                                    alt="User post gallery picture">
                            </div>`;
        }
    }

    return `<div class="gallery gallery-${visiblephotoCount}">
            ${imagesHTML}
            </div>`
}

export default renderContentGallery;