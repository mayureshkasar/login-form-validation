
function validate(){


fullName = document.getElementById("inputName").value;
email = document.getElementById('email').value;
phoneNo = document.getElementById('phoneNo').value;
localStorage.setItem("fphone", phoneNo);
localStorage.setItem("fname", fullName);

//regular expression for name
let regName = /^(([a-zA-Z]){4,20})[ ]?(([a-zA-Z ]){4,20})$/;
//regular expression for email
let regEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]{2,10}).([a-z]{2,6})(.[a-z]{2,6})$/;
//regular expression for phone number
// let regPhone = /^[(]{0,1}[6-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
let regPhone = (/^(\d{3})(\d{3})(\d{4})$/);

//validate name
if(fullName === "" || email ==="" || phoneNo === "" ){
  
  let formerr = document.getElementById('form-err'); 
  formerr.innerText='please fill all input fields';
  formerr.style.visibility = 'visible';
  return false;
}else if(!regName.test(fullName)){
  
  nameerr = document.getElementById('name-err'); 
  nameerr.innerText='min 2 words with 4 letters';
  nameerr.style.visibility = 'visible';
    return false;
}else if(!regEmail.test(email)){
  nameerr.style.visibility = 'hidden';
  emailerr = document.getElementById('email-err'); 
  emailerr.innerText='enter valid email id';
  emailerr.style.visibility = 'visible';
  return false;
}else if(regPhone.test(phoneNo)){

  let phoneerr = document.getElementById('phone-err'); 
  phoneerr.innerText='enter va;id phone number';
  phoneerr.style.visibility = 'visible';
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
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
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







