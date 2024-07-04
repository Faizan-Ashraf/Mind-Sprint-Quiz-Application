const images = document.querySelectorAll('.subject-img');

images.forEach(img => {

    img.addEventListener('mouseover', ()=> {
        
        const focusedImgSrc = img.getAttribute('src');

        images.forEach(otherImg => {
            if (otherImg.getAttribute('src') !== focusedImgSrc) {
                otherImg.style.opacity = '0.5';
            }
        });
    });

    img.addEventListener('mouseout',()=> {
        images.forEach(otherImg => {
            otherImg.style.opacity = '1';
        });
    });

});