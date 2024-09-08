
let br = document.getElementById('br')
let readmore = document.querySelector('.read-more');

let reamorebtn = document.getElementById('read-more-btn').addEventListener('click', function() {
    if (readmore.style.display === 'none' || readmore.style.display === '') {
        readmore.style.display = 'inline';
        this.textContent = 'Read less';
        br.style.display = 'inline'
        
        
    } else {
        readmore.style.display = 'none';
        this.textContent = 'Read more';
        br.style.display = 'none'
        
    }
});




let aboutelements = document.querySelector('#navbar #about')
let contactelements = document.querySelector('#navbar #contact')
let projectelements = document.querySelector('#navbar #project')
let aboutsection = document.getElementById('aboutsection')
let contactsection = document.querySelector('.contactsection')
console.log(aboutelements,contactelements,projectelements,aboutsection)


    aboutelements.onclick = function (){
    aboutsection.scrollIntoView({ behavior: 'smooth' })
}
contactelements.onclick = function (){
    contactsection.scrollIntoView({ behavior: 'smooth' })
}


