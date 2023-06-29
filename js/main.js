const activator = document.querySelector('#more');
const dropDown = document.querySelector('#menuMore');


activator.addEventListener('click',() =>{
    if(dropDown.classList.contains('show')){
        dropDown.classList.remove('show')
    }else{
        dropDown.classList.add('show')
    }
})