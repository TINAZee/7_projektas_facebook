import renderContentGallery from './renderContentGallery.js';
import renderContentText from './renderContentText.js'


function renderContent(data) {
    console.log(data);
    let photosHTML = '';
    if (data.photos){
        photosHTML = renderContentGallery(data.photos);
    }

    let textHTML = '';
    if (data.text) {
        textHTML = renderContentText(data.text);
    }

    return  `<div>
                ${textHTML}
                ${photosHTML}
            </div>` 
}

export default renderContent;