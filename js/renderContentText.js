/*
Teksto apimtys:
- mazai: 1-60
- vidutiniskai: 61-300
- daug: 301-10000
*/

function renderContentText(text) {
    if(!text){
        console.error('Error posto tekstui nedave reiksmes')
        return '';
    }
    
    if(text.length < 61){
        return `<p class="big-size">${text}</p>`;
    }else if (text.length < 301){
        return `<p>${text}</p>`;
    } else {
        let shortedtext = '';
        for (let i = 0; i < 300; i++) {
            shortedtext += text[i];
        }
        return `<p>${shortedtext}...<span class="more">See more</span></p>`;
    }
    
}

export default renderContentText;