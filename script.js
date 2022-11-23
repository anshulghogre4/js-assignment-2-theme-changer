let checkbox =document.querySelector('#check');
let html =document.querySelector('html');
let nodark = document.querySelectorAll('section')[0];
let batman = document.querySelectorAll('section')[1];

checkbox.addEventListener('click', (toggleDarkMode)=>{

    checkbox.checked ? html.classList.add('dark'):html.classList.remove('dark')

    checkbox.checked ? nodark.style.display='none': nodark.style.display='block';

    checkbox.checked ? batman.style.display='block': batman.style.display='none';


});