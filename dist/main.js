// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{    nav     }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
    var mb_nav = document.getElementById('mb_nav');
    var mb_nav_btn = document.getElementById('mb_nav_btn');
    var close_nav_btn = document.getElementById('close_nav_btn');
    var oppen_nav_btn = document.getElementById('oppen_nav_btn');
    const mb_nav_links = document.querySelectorAll('#mb_nav a');
    // close the oppned mb nav when click on link
    mb_nav_links.forEach((link) => {
        link.onclick = function(){
            mb_nav_btn_click();
        }
    });
    mb_nav_btn.addEventListener('click',mb_nav_btn_click);

    function mb_nav_btn_click(){
        mb_nav.classList.toggle('translate-x-0');
        oppen_nav_btn.classList.toggle('hide_nav_btn');
        close_nav_btn.classList.toggle('hide_nav_btn');
    
    }
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
