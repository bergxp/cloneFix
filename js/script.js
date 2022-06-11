let modal = document.querySelector('.modal-1');
let f = document.querySelector('.fechar')
let info = document.querySelector('#info')

function sinopse (){
    info.addEventListener('click', function (){
        modal.style.display = 'flex';
    })
}
function fechar (){
    f.addEventListener('click', function(){
        modal.style.display = 'none';
    })
}