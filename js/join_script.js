var name_field = document.getElementById('form_name1');
var address_field = document.getElementById('form_name2');
var phone_field = document.getElementById('form_name3');
var email_field = document.getElementById('form_name4');

var submit = document.getElementById('submit');
var back = document.getElementById('back');

var name = '';
var address = '';
var phone = '';
var email = '';

name_field.oninput = function(){
    name = name_field.value;
    enableSubmit();
}
address_field.oninput = function(){
    address = address_field.value;
    enableSubmit();
}
phone_field.oninput = function(){
    phone = phone_field.value;
    enableSubmit();
}
email_field.oninput = function(){
    email = email_field.value;
    enableSubmit();
}

function enableSubmit(){
    if(name.trim() == '' || address.trim() == '' || phone.trim() == ''){
        submit.disabled = true;
        submit.style.opacity = .7;
    }else{
        submit.disabled = false;
        submit.style.opacity = 1;
    }
}

back.onclick = function(){
    window.location.href = "../index.html";
}

submit.onclick = function(){
    if(validatePhone(phone)){
        if(email.trim() != ''){
            if(validateEmail(email)){
                document.getElementsByClassName('form-md')[0].style.display = 'none';
                document.getElementById('h1').innerHTML = 'Thank You!';
            }else{
                alert('Email is not valid!')
            }
        }else{
            document.getElementsByClassName('form-md')[0].style.display = 'none';
            document.getElementById('h1').innerHTML = 'Thank You!';
        }
    }else{
        alert('Phone is not valid!')
    }
}

function validateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function validatePhone(inputtxt)
{
    var phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno)){
      return true;
    }
    else{
        return false;
    }
}
