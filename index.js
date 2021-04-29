
function validate() {
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
  let regName = /^(([a-zA-Z]){4,20})[ ]?(([a-zA-Z ]){5,20})$/;
  //regular expression for email
  let regEmail = /^([a-zA-Z0-9]{2,30})[\.]?[\-]?@([a-zA-Z0-9-]{2,10}).([a-z]{2,6})(.[a-z]{2,6})?$/;
  //regular expression for phone number
  let regPhone = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?[\-]?[ ]?([0-9]{4})$/;

  let states = [
    { name: 'Puducherry', start: 000, end: 100 },
    { name: 'Lakshadweep', start: 101, end: 125 },
    { name: 'Daman and Nagar Haveli', start: 126, end: 150 },
    { name: 'Andman & nicobar', start: 151, end: 175 },
    { name: 'West Bengal', start: 176, end: 200 },
    { name: 'Uttarakhand', start: 201, end: 225 },
    { name: 'Uttar Pradesh', start: 226, end: 250 },
    { name: 'Tripura', start: 251, end: 275 },
    { name: 'Telangana', start: 276, end: 300 },
    { name: 'Tamil Nadu', start: 301, end: 325 },
    { name: 'sikkim', start: 326, end: 350 },
    { name: 'Rajasthan', start: 351, end: 375 },
    { name: 'Punjab', start: 376, end: 400 },
    { name: 'Odisha', start: 401, end: 425 },
    { name: 'Nagaland', start: 426, end: 450 },
    { name: 'Mizoram', start: 451, end: 475 },
    { name: 'Meghalay', start: 476, end: 500 },
    { name: 'Manipur', start: 501, end: 525 },
    { name: 'Maharashtra', start: 526, end: 550 },
    { name: 'Madhya Pradesh', start: 551, end: 575 },
    { name: 'Kerala', start: 576, end: 600 },
    { name: 'Karnataka', start: 601, end: 625 },
    { name: 'Jharkhand', start: 626, end: 650 },
    { name: 'Himachal Pradesh', start: 651, end: 675 },
    { name: 'Haryana', start: 676, end: 700 },
    { name: 'Gujarat', start: 701, end: 725 },
    { name: 'Goa', start: 726, end: 750 },
    { name: 'Chhattisgarh', start: 751, end: 775 },
    { name: 'Bihar', start: 776, end: 800 },
    { name: 'Assam', start: 801, end: 825 },
    { name: 'Arunachal Pradesh', start: 826, end: 850 },
    { name: 'Andhra Pradesh', start: 851, end: 900 },
    { name: 'Jammu & Kashmir', start: 901, end: 925 },
    { name: 'Ladakh', start: 926, end: 950 },
    { name: 'Delhi', start: 951, end: 999 },
  ];
  //input field validations
  if (fullName !== "" || email !== "" || phoneNo !== "") {
    // name validation
    if (!regName.test(fullName)) {
      nameerr.innerText = 'min 2 words with 4 letters';
      nameerr.style.visibility = 'visible';
      return false;
    }
    //email validation
    else if (!regEmail.test(email)) {
      emailerr.innerText = 'enter valid email id';
      emailerr.style.visibility = 'visible';
      return false;
    }
    //phone validation
    else if (regPhone.test(phoneNo)) {
      //checking first digit 
      if (phoneNo.charAt(1) == 6 || phoneNo.charAt(1) == 7 || phoneNo.charAt(1) == 8 || phoneNo.charAt(1) == 9) {
        //checking number is jio
        if (phoneNo.slice(1, 4) >= 621 && phoneNo.slice(1, 4) <= 799) {
          //checking state 
          for (let state of states) {
            if (phoneNo.slice(6, 9) >= state.start && phoneNo.slice(6, 9) <= state.end) {
              phoneerr.innerText = 'Reliance jio, ' + state.name;
              phoneerr.style.visibility = 'visible';
            }
          }
          //end of reliance jio states
        } else if (phoneNo.slice(1, 4) >= 801 && phoneNo.slice(1, 4) <= 920) {
          //checking state for Idea
          for (let state of states) {
            if (phoneNo.slice(6, 9) >= state.start && phoneNo.slice(6, 9) <= state.end) {
              phoneerr.innerText = 'Idea, ' + state.name;
              phoneerr.style.visibility = 'visible';
            }
          }
          //end of state
        } else if (phoneNo.slice(1, 4) >= 921 && phoneNo.slice(1, 4) <= 999) {
          //checking state for Vodafone
          for (let state of states) {
            if (phoneNo.slice(6, 9) >= state.start && phoneNo.slice(6, 9) <= state.end) {
              phoneerr.innerText = 'Vodafone, ' + state.name;
              phoneerr.style.visibility = 'visible';
            }
          }
          //end of state
        }
      }
      else {
        phoneerr.innerText = 'mobile no must start with 6,7,8,9';
        phoneerr.style.visibility = 'visible';
        return false;
      }
    } else {
      phoneerr.innerText = 'enter 10 digit phone number';
      phoneerr.style.visibility = 'visible';
      return false;
    }

  } else {
    formerr.innerText = 'please fill all input fields';
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
inputElement.addEventListener("keypress",
  () => {
    setInterval(validate, 1000);
  });

