
function validate(){

fullName = document.getElementById("inputName").value;
email = document.getElementById('email').value;
phoneNo = document.getElementById('phoneNo').value;
localStorage.setItem("fphone", phoneNo);
localStorage.setItem("fname", fullName);


//error messages variable
formerr = document.getElementById('form-err'); 
nameerr = document.getElementById('name-err'); 
emailerr = document.getElementById('email-err'); 
phoneerr = document.getElementById('phone-err'); 

//regular expression for name
let regName = /^(([a-zA-Z]){4,20})[ ]?(([a-zA-Z ]){4,20})$/;
//regular expression for email
let regEmail = /^([a-zA-Z0-9]{2,30})[\.]?[\-]?@([a-zA-Z0-9-]{2,10}).([a-z]{2,6})(.[a-z]{2,6})?$/;
//regular expression for phone number
let regPhone = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?[\-]?[ ]?([0-9]{4})$/;

//input field validations
if(fullName !== "" || email !== "" || phoneNo !== "" ){
  // name validation
if(!regName.test(fullName)){
  
  nameerr.innerText='min 2 words with 4 letters';
  nameerr.style.visibility = 'visible';
    return false;
}
//email validation
else if(!regEmail.test(email)){
  
  emailerr.innerText='enter valid email id';
  emailerr.style.visibility = 'visible';
  return false;
}
//phone validation
else if(regPhone.test(phoneNo)){
  //checking first digit 
  if(phoneNo.charAt(1) == 6 || phoneNo.charAt(1) == 7 || phoneNo.charAt(1) == 8 || phoneNo.charAt(1) == 9){
    //chexking number is jio
    if(phoneNo.slice(1,4) >= 621 && phoneNo.slice(1,4) <= 799){
      // //checking state 
      if(phoneNo.slice(6,9) >= 000 && phoneNo.slice(6,9) <= 100){
        phoneerr.innerText='Reliance jio, Puducherry';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 101 && phoneNo.slice(6,9) <= 125){
        phoneerr.innerText='Reliance jio, Lakshadweep';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 126 && phoneNo.slice(6,9) <= 150){
        phoneerr.innerText='Reliance jio, Daman and Nagar Haveli';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 151 && phoneNo.slice(6,9) <= 175){
        phoneerr.innerText='Reliance jio, Andman & nicobar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 176 && phoneNo.slice(6,9) <= 200){
        phoneerr.innerText='Reliance jio, West Bengal';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 201 && phoneNo.slice(6,9) <= 225){
        phoneerr.innerText='Reliance jio, Uttarakhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 226 && phoneNo.slice(6,9) <= 250){
        phoneerr.innerText='Reliance jio, Uttar Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 251 && phoneNo.slice(6,9) <= 275){
        phoneerr.innerText='Reliance jio, Tripura';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 276 && phoneNo.slice(6,9) <= 300){
        phoneerr.innerText='Reliance jio, Telangana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 301 && phoneNo.slice(6,9) <= 325){
        phoneerr.innerText='Reliance jio, Tamil Nadu';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 326 && phoneNo.slice(6,9) <= 350){
        phoneerr.innerText='Reliance jio, sikkim';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 351 && phoneNo.slice(6,9) <= 375){
        phoneerr.innerText='Reliance jio, Rajasthan';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 376 && phoneNo.slice(6,9) <= 400){
        phoneerr.innerText='Reliance jio, Punjab';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 401 && phoneNo.slice(6,9) <= 425){
        phoneerr.innerText='Reliance jio, Odisha';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 426 && phoneNo.slice(6,9) <= 450){
        phoneerr.innerText='Reliance jio, Nagaland';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 451 && phoneNo.slice(6,9) <= 475){
        phoneerr.innerText='Reliance jio, Mizoram';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 476 && phoneNo.slice(6,9) <= 500){
        phoneerr.innerText='Reliance jio, Meghalay';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 501 && phoneNo.slice(6,9) <= 525){
        phoneerr.innerText='Reliance jio, Manipur';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 526 && phoneNo.slice(6,9) <= 550){
        phoneerr.innerText='Reliance jio, Maharashtra';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 551 && phoneNo.slice(6,9) <= 575){
        phoneerr.innerText='Reliance jio, Madhya Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 576 && phoneNo.slice(6,9) <= 600){
        phoneerr.innerText='Reliance jio, Kerala';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 601 && phoneNo.slice(6,9) <= 625){
        phoneerr.innerText='Reliance jio, Karnataka';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 626 && phoneNo.slice(6,9) <= 650){
        phoneerr.innerText='Reliance jio, Jharkhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 651 && phoneNo.slice(6,9) <= 675){
        phoneerr.innerText='Reliance jio, Himachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 676 && phoneNo.slice(6,9) <= 700){
        phoneerr.innerText='Reliance jio, Haryana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 701 && phoneNo.slice(6,9) <= 725){
        phoneerr.innerText='Reliance jio, Gujarat';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 726 && phoneNo.slice(6,9) <= 750){
        phoneerr.innerText='Reliance jio, Goa';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 751 && phoneNo.slice(6,9) <= 775){
        phoneerr.innerText='Reliance jio, Chhattisgarh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 776 && phoneNo.slice(6,9) <= 800){
        phoneerr.innerText='Reliance jio, Bihar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 801 && phoneNo.slice(6,9) <= 825){
        phoneerr.innerText='Reliance jio, Assam';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 826 && phoneNo.slice(6,9) <= 850){
        phoneerr.innerText='Reliance jio, Arunachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 851 && phoneNo.slice(6,9) <= 900){
        phoneerr.innerText='Reliance jio, Andhra Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 901 && phoneNo.slice(6,9) <= 925){
        phoneerr.innerText='Reliance jio, Jammu & Kashmir';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 926 && phoneNo.slice(6,9) <= 950){
        phoneerr.innerText='Reliance jio, Ladakh';
        phoneerr.style.visibility = 'visible';
      }
      else{
        phoneerr.innerText='Reliance jio, Delhi';
        phoneerr.style.visibility = 'visible';
      }
    //end of reliance jio states
    
    }else if(phoneNo.slice(1,4) >= 801 && phoneNo.slice(1,4) <= 920){

      //checking state for Idea
      if(phoneNo.slice(6,9) >= 000 && phoneNo.slice(6,9) <= 100){
        phoneerr.innerText='Idea, Puducherry';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 101 && phoneNo.slice(6,9) <= 125){
        phoneerr.innerText='Idea, Lakshadweep';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 126 && phoneNo.slice(6,9) <= 150){
        phoneerr.innerText='Idea, Daman and Nagar Haveli';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 151 && phoneNo.slice(6,9) <= 175){
        phoneerr.innerText='Idea, Andman & nicobar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 176 && phoneNo.slice(6,9) <= 200){
        phoneerr.innerText='Idea, West Bengal';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 201 && phoneNo.slice(6,9) <= 225){
        phoneerr.innerText='Idea, Uttarakhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 226 && phoneNo.slice(6,9) <= 250){
        phoneerr.innerText='Idea, Uttar Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 251 && phoneNo.slice(6,9) <= 275){
        phoneerr.innerText='Idea, Tripura';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 276 && phoneNo.slice(6,9) <= 300){
        phoneerr.innerText='Idea, Telangana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 301 && phoneNo.slice(6,9) <= 325){
        phoneerr.innerText='Idea, Tamil Nadu';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 326 && phoneNo.slice(6,9) <= 350){
        phoneerr.innerText='Idea, sikkim';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 351 && phoneNo.slice(6,9) <= 375){
        phoneerr.innerText='Idea, Rajasthan';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 376 && phoneNo.slice(6,9) <= 400){
        phoneerr.innerText='Idea, Punjab';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 401 && phoneNo.slice(6,9) <= 425){
        phoneerr.innerText='Idea, Odisha';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 426 && phoneNo.slice(6,9) <= 450){
        phoneerr.innerText='Idea, Nagaland';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 451 && phoneNo.slice(6,9) <= 475){
        phoneerr.innerText='Idea, Mizoram';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 476 && phoneNo.slice(6,9) <= 500){
        phoneerr.innerText='Idea, Meghalay';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 501 && phoneNo.slice(6,9) <= 525){
        phoneerr.innerText='Idea, Manipur';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 526 && phoneNo.slice(6,9) <= 550){
        phoneerr.innerText='Idea, Maharashtra';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 551 && phoneNo.slice(6,9) <= 575){
        phoneerr.innerText='Idea, Madhya Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 576 && phoneNo.slice(6,9) <= 600){
        phoneerr.innerText='Idea, Kerala';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 601 && phoneNo.slice(6,9) <= 625){
        phoneerr.innerText='Idea, Karnataka';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 626 && phoneNo.slice(6,9) <= 650){
        phoneerr.innerText='Idea, Jharkhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 651 && phoneNo.slice(6,9) <= 675){
        phoneerr.innerText='Idea, Himachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 676 && phoneNo.slice(6,9) <= 700){
        phoneerr.innerText='Idea, Haryana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 701 && phoneNo.slice(6,9) <= 725){
        phoneerr.innerText='Idea, Gujarat';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 726 && phoneNo.slice(6,9) <= 750){
        phoneerr.innerText='Idea, Goa';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 751 && phoneNo.slice(6,9) <= 775){
        phoneerr.innerText='Idea, Chhattisgarh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 776 && phoneNo.slice(6,9) <= 800){
        phoneerr.innerText='Idea, Bihar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 801 && phoneNo.slice(6,9) <= 825){
        phoneerr.innerText='Idea, Assam';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 826 && phoneNo.slice(6,9) <= 850){
        phoneerr.innerText='Idea, Arunachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 851 && phoneNo.slice(6,9) <= 900){
        phoneerr.innerText='Idea, Andhra Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 901 && phoneNo.slice(6,9) <= 925){
        phoneerr.innerText='Idea, Jammu & Kashmir';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 926 && phoneNo.slice(6,9) <= 950){
        phoneerr.innerText='Idea, Ladakh';
        phoneerr.style.visibility = 'visible';
      }
      else{
        phoneerr.innerText='Idea, Delhi';
        phoneerr.style.visibility = 'visible';
      }

      //end of state
    }else if(phoneNo.slice(1,4) >= 921 && phoneNo.slice(1,4) <= 999){
      
      
      //checking state for Vodafone
      if(phoneNo.slice(6,9) >= 000 && phoneNo.slice(6,9) <= 100){
        phoneerr.innerText='Vodafone, Puducherry';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 101 && phoneNo.slice(6,9) <= 125){
        phoneerr.innerText='Vodafone, Lakshadweep';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 126 && phoneNo.slice(6,9) <= 150){
        phoneerr.innerText='Vodafone, Daman and Nagar Haveli';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 151 && phoneNo.slice(6,9) <= 175){
        phoneerr.innerText='Vodafone, Andman & nicobar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 176 && phoneNo.slice(6,9) <= 200){
        phoneerr.innerText='Vodafone, West Bengal';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 201 && phoneNo.slice(6,9) <= 225){
        phoneerr.innerText='Vodafone, Uttarakhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 226 && phoneNo.slice(6,9) <= 250){
        phoneerr.innerText='Vodafone, Uttar Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 251 && phoneNo.slice(6,9) <= 275){
        phoneerr.innerText='Vodafone, Tripura';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 276 && phoneNo.slice(6,9) <= 300){
        phoneerr.innerText='Vodafone, Telangana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 301 && phoneNo.slice(6,9) <= 325){
        phoneerr.innerText='Vodafone, Tamil Nadu';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 326 && phoneNo.slice(6,9) <= 350){
        phoneerr.innerText='Vodafone, sikkim';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 351 && phoneNo.slice(6,9) <= 375){
        phoneerr.innerText='Vodafone, Rajasthan';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 376 && phoneNo.slice(6,9) <= 400){
        phoneerr.innerText='Vodafone, Punjab';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 401 && phoneNo.slice(6,9) <= 425){
        phoneerr.innerText='Vodafone, Odisha';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 426 && phoneNo.slice(6,9) <= 450){
        phoneerr.innerText='Vodafone, Nagaland';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 451 && phoneNo.slice(6,9) <= 475){
        phoneerr.innerText='Vodafone, Mizoram';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 476 && phoneNo.slice(6,9) <= 500){
        phoneerr.innerText='Vodafone, Meghalay';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 501 && phoneNo.slice(6,9) <= 525){
        phoneerr.innerText='Vodafone, Manipur';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 526 && phoneNo.slice(6,9) <= 550){
        phoneerr.innerText='Vodafone, Maharashtra';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 551 && phoneNo.slice(6,9) <= 575){
        phoneerr.innerText='Vodafone, Madhya Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 576 && phoneNo.slice(6,9) <= 600){
        phoneerr.innerText='Vodafone, Kerala';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 601 && phoneNo.slice(6,9) <= 625){
        phoneerr.innerText='Vodafone, Karnataka';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 626 && phoneNo.slice(6,9) <= 650){
        phoneerr.innerText='Vodafone, Jharkhand';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 651 && phoneNo.slice(6,9) <= 675){
        phoneerr.innerText='Vodafone, Himachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 676 && phoneNo.slice(6,9) <= 700){
        phoneerr.innerText='Vodafone, Haryana';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 701 && phoneNo.slice(6,9) <= 725){
        phoneerr.innerText='Vodafone, Gujarat';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 726 && phoneNo.slice(6,9) <= 750){
        phoneerr.innerText='Vodafone, Goa';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 751 && phoneNo.slice(6,9) <= 775){
        phoneerr.innerText='Vodafone, Chhattisgarh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 776 && phoneNo.slice(6,9) <= 800){
        phoneerr.innerText='Vodafone, Bihar';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 801 && phoneNo.slice(6,9) <= 825){
        phoneerr.innerText='Vodafone, Assam';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 826 && phoneNo.slice(6,9) <= 850){
        phoneerr.innerText='Vodafone, Arunachal Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 851 && phoneNo.slice(6,9) <= 900){
        phoneerr.innerText='Vodafone, Andhra Pradesh';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 901 && phoneNo.slice(6,9) <= 925){
        phoneerr.innerText='Vodafone, Jammu & Kashmir';
        phoneerr.style.visibility = 'visible';
      }
      else if(phoneNo.slice(6,9) >= 926 && phoneNo.slice(6,9) <= 950){
        phoneerr.innerText='Vodafone, Ladakh';
        phoneerr.style.visibility = 'visible';
      }
      else{
        phoneerr.innerText='Vodafone, Delhi';
        phoneerr.style.visibility = 'visible';
      }
      //end of state
      }
  }
  else{
    phoneerr.innerText='mobile no must start with 6,7,8,9';
    phoneerr.style.visibility = 'visible';
    return false;
}
}else{
  
  phoneerr.innerText='enter 10 digit phone number';
  phoneerr.style.visibility = 'visible';
  return false;
}
}else{
  formerr.innerText='please fill all input fields';
  formerr.style.visibility = 'visible';
  return false;
}

return true;

}



const isNumericInput = (event) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 ||
        key === 67 ||
        key === 86 ||
        key === 88 ||
        key === 90))
  );
};

const enforceFormat = (event) => {
//   // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event) => {
  if (isModifierKey(event)) {
    return;
  }

  const input = event.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);
 
  if (input.length > 6) {
    event.target.value = `(${areaCode}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    event.target.value = `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    event.target.value = `(${areaCode}`;
  }

};
const inputElement = document.getElementById("phoneNo");
inputElement.addEventListener("keydown", enforceFormat);
inputElement.addEventListener("keyup", formatToPhone);
