

var firebaseConfig = {
    apiKey: "AIzaSyDWg4mns_IEl4M9_xhXOgBb_xPyuxoOQNU",
    authDomain: "manee-fc4b7.firebaseapp.com",
    projectId: "manee-fc4b7",
    storageBucket: "manee-fc4b7.appspot.com",
    messagingSenderId: "709101093528",
    appId: "1:709101093528:web:660439befbc8221cdcc6ed",
    measurementId: "G-938SD0WB39",
    databaseURL: "https://manee-fc4b7-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name_field = document.getElementById('form_name1');
var address_field = document.getElementById('form_name2');
var phone_field = document.getElementById('form_name3');
var email_field = document.getElementById('form_name4');
var des_field = document.getElementById('form_name5');

var submit = document.getElementById('submit');
var back = document.getElementById('back');

var name = '';
var address = '';
var phone = '';
var email = '';
var des = '';

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
des_field.onchange = function(){
    des = des_field.value;
    enableSubmit();
}

function enableSubmit(){
    if(name.trim() == '' || address.trim() == '' || phone.trim() == '' || des.trim() == '' || email.trim() == ''){
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
        if(validateEmail(email)){
            document.getElementsByClassName('form-md')[0].style.display = 'none';
            document.getElementById('h1').innerHTML = 'Thank You! <br><span style="font-size:27px;text-align:center;">for expressing your desire to learn</span>';
            document.getElementById('h1').style.lineHeight = '50px';
            document.getElementById('h1').style.textAlign = 'center';
            document.getElementById('h1').style.padding = '5rem';

            var today = new Date();
            var dd = today.getDate();

            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 

            if(mm<10) 
            {
                mm='0'+mm;
            } 
            today = dd+'-'+mm+'-'+yyyy;

            firebase.database().ref().push({
                name: name,
                address: address,
                phone: phone,
                email: email,
                designation : des,
                date:today,
                notes: '',
                updates: ''
            });

            $.ajax({
                url: "../php/mail.php",
                type: "post",
                data: {name: name, address: address, phone: phone, email: email, designation : des, date:today,} ,
                success: function (response) {
        
                   console.log('ok');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                   console.log(textStatus, errorThrown);
                }
            });

        }else{
            alert('Email is not valid!')
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
