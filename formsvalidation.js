function validate(){
    var name = document.getElementById('fname').value;
    if(name ==' '||name==''){
        document.getElementById('fout').innerText="Please enter first name"
    }else{
        document.getElementById('fout').innerText=""
    }
}


const validatepwd = () => {
    var pwd = document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8";
            document.getElementById('ppout').style.background="red";
            document.getElementById('ppout').style.visibility="visible";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText="Pwd is week";
            document.getElementById('pout').style.color="orange";
            document.getElementById('ppout').style.background="orange";
            document.getElementById('ppout').style.visibility="visible"; 
        }
    }else{
        document.getElementById('pout').innerText="";
        document.getElementById('ppout').style.background="green";
        document.getElementById('ppout').style.visibility="visible"; 
    }
}

const validatecpwd = () => {
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password does not match";  
    }else{
        document.getElementById('cpout').innerText="";  
    }
}

const getSeats  =() => {
    var seats = document.getElementById('seats').value;
    console.log(seats)
}

const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email==' '||email==''){
        document.getElementById('eout').innerText="Email is required";  
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")===null){
            document.getElementById('eout').innerText="Please enter correct email";  
        }else{
            document.getElementById('eout').innerText="";  
        }
    }
}