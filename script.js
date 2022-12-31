// https://codepen.io/carloscdev/pen/mdBLmwP
// https://codepen.io/cassie-codes/pen/rNNGdmw
// https://codepen.io/jhancock532/pen/GRZrLwY
// https://css-tricks.com/different-transitions-for-hover-on-hover-off/ (from previous)

// Improve for up and down scroll
// Otherwise try to center part 2
// Make custom cursor

window.addEventListener('scroll', ()=>{
    var body = document.getElementById('body');
    var oneliner = document.getElementById('onel');
    var scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    console.log(scroll);

    if(scroll < 0.1){
        console.log('part 1');
        body.style.backgroundColor = '#131417';
        oneliner.classList.remove('active');
    }
    else if(scroll < 0.7){
        console.log('part 2');
        body.style.backgroundColor = '#ffb7b0';
        oneliner.classList.add('active');
    }
    else{
        console.log("part 3");
        oneliner.classList.remove('active');
        body.style.backgroundColor = '#131417';
    }

});