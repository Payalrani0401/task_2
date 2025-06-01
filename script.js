const sideMenu =document.querySelector('aside');
const menuBtn =document.querySelector('#menu_bar');
const closeBtn =document.querySelector('#close_btn');

const themeToggle =document.querySelector('.theme-toggler')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block"
})
    closeBtn.addEventListener('click',()=> {
        menuBtn.style.display = "none"
        
    })

    themeToggle.addEventListener('click', ()=>{
        document.body.classList.toggle('dark-theme-variables')
        themeToggle.querySelector('span:nth-child(1)').classList.toggle('active')
    }
    )