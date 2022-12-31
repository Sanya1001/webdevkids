// https://dev.to/mattmarquise/how-to-create-a-custom-circular-cursor-for-your-website-4i7p

const themechange = document.getElementById('themechange');
const cursor = document.getElementById('circularcursor');

themechange.addEventListener('click', ()=>{
    const content = document.getElementById('content3');
    content.classList.toggle('dark');
});

document.body.onmousemove =  function(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
};
