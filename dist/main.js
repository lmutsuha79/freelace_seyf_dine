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
    mb_nav.classList.toggle('-translate-x-full')
    mb_nav.classList.toggle('translate-x-0');
    oppen_nav_btn.classList.toggle('hide_nav_btn');
    close_nav_btn.classList.toggle('hide_nav_btn');

}


// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{     footer form validation      }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function remove_allert(the_input,validation_mess){

    the_input.classList.remove('inp_no_valide');
    validation_mess.classList.remove('list_active');
    validation_mess.classList.add('hidden');
}
function add_allert(the_input,validation_mess){
    the_input.classList.add('inp_no_valide');
    validation_mess.classList.add('list_active');
    validation_mess.classList.remove('hidden');
}

function email_input_validation(){
if(validateEmail(send_mail_inp.value)){

    remove_allert(send_mail_inp,valide_email_subs);
}
else{
    add_allert(send_mail_inp,valide_email_subs);
}
}

const send_mail_inp = document.getElementById('send_mail_inp');
const send_mail_form = document.getElementById('email_subscription_form');
const send_mail_btn = document.getElementById('send_mail_btn');
const valide_email_subs = document.getElementById('valide_email_subs');

send_mail_form.addEventListener('submit',(event) => {
    event.preventDefault();
})
send_mail_inp.addEventListener('focusin',() => {
    remove_allert(send_mail_inp,valide_email_subs);
});
send_mail_btn.addEventListener('click',() => {
    email_input_validation();
});
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}