import renderSinglePost from './renderSinglePost.js'

function renderPosts(data) {
    
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        HTML += renderSinglePost(post);
    }

    //susirandame elementa kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    
    // i ta elementa ikeliame html kintamojo reiksme
    feedDOM.innerHTML = HTML;

    //susirasti dominancius elementus
    const allSEEmOREdom = document.querySelectorAll('.post .more');
    console.log(allSEEmOREdom);
    //pradedam stebeti paspaudimus ant see more

    for (let i=0; i<allSEEmOREdom.length;i++){
        const seeMore = allSEEmOREdom[i];
        seeMore.addEventListener('click', () => {
            seeMore.closest('.content').classList.add('show');
        });
    }

};

export default renderPosts;