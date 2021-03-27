//getting variables from previous form using locastorage
var firstName =localStorage.getItem("fname");
let Name1 = firstName.split(' ').slice(0, -1).join(' ');
let Name2 = firstName.split(' ').slice(-1).join(' ');
document.getElementById("fname").value = Name1;

var phone =localStorage.getItem("fphone");
document.getElementById("pno").value = phone;

// function for OTP creation
function  createOTP(){
  let digit = '0123456789';
  let OTP = '';
  for(let i=0; i<4; i++){
    OTP += digit[Math.floor(Math.random()*10)];
  }
  return OTP;
}
//showing otp to users on form
let span = document.getElementById('span');
span.innerHTML = createOTP();
let validOtp = span.innerHTML; 

//function for verifying otp
let attempt = 3;
function otpVerification(){
  //getting otp i.e user entered otp
let formOtp = document.getElementById('otp').value;
while(attempt > 0){
if(validOtp === formOtp){
return true;
}
else 
{
  attempt = attempt-1;
  document.getElementById('attempts').innerHTML = attempt;
if(attempt == 0){
  window.location.href = 'http://pixel6.co/pagenotfound';
}
}
return false;
}
}
