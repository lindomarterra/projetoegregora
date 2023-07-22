  
 window.addEventListener('load', carregarFoto)

function carregarFoto(){

    const bannerSmall=document.querySelector('.bannerImgSmall')
    const bannerBig=document.querySelector('.bannerImgBig')

    bannerSmall.classList.add('bannerMoveSmall')
    bannerBig.classList.add('bannerMoveBig')    
}



