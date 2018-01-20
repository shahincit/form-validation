function check() {
    var name = document.getElementById('nm');
    var email = document.getElementById('em');
    var pass = document.getElementById('pass');
    var repass = document.getElementById('repass');
    var phone = document.getElementById('ph');
    var date = document.getElementById('dt');
    var manth = document.getElementById('mt');
    var year = document.getElementById('yr');
    var male = document.getElementById('ga');
    var female = document.getElementById('gb');

    if (name.value === "") {
        document.getElementById('one').innerHTML = 'Enter Your Name.';
        name.focus();
        document.getElementById('one').style.color = 'red';
        document.getElementById('nm').style.color = 'red';
        return false;
    }
    if(email.value===""){
        document.getElementById('two').innerHTML='Enter Your Email.';
        email.focus();
        document.getElementById('two').style.color='#C70039';
        document.getElementById('em').style.color='#C70039';
        return false;
    }
    if(pass.value===""){
        document.getElementById('three').innerHTML='Enter Your Passwords.'
        pass.focus();
        document.getElementById('three').style.color='#09edca';
        document.getElementById('pass').style.color='#09edca';
        return false;
    }
    if(pass.value!=repass.value){
        document.getElementById('four').innerHTML=' Your Passwords Not Match.'
        pass.focus();
        document.getElementById('four').style.color='#09edca';
        document.getElementById('repass').style.color='#09edca';
        return false;
    }

}
 function errvali(){
        if(name.value !=""){
            document.getElementById('one').innerHTML="";
            return false;
        }
    }
    name.addEventListener('blur',errvali,true);