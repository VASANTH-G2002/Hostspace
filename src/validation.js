// document.querySelector("h2").innerHTML = "ksdjgfk";
const fname = document.querySelector('#first-name');
const lname = document.querySelector('#last-name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const company = document.querySelector('#company');
const address_one = document.querySelector('#address1');
const address_two = document.querySelector('#address2');
const pincode = document.querySelector('#pin-code');
const date = document.querySelector('#date');
const gst = document.querySelector('#gst-no');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const agreeInput = document.querySelector('#agree');
const city = document.querySelector('#city');
const form = document.querySelector('#signup');


let reg_success = true;

form.addEventListener('submit', (e) => {

    // validate forms
    // let isFnameValid = checkfname(),
    //     isLnameValid = checklname(),
    //     isEmailValid = checkemail(),
    //     isPhoneValid = checkphoneno(),
    //     isCompanyVaild = checkcompanyname(),
    //     isAddress1Valid = checkaddress1(),
    //     isAddress2Valid = checkaddress2(),
    //     isGSTValid = checkgstno(),
    //     isPinValid = checkpincode(),
    //     isPasswordValid = checkpassword(),
    //     isCheckboxValid = checkCheckbox(),
    //     isConfirmPasswordValid = checkConfirmpassword(),
    //     isDateValid = checkDate(),
    //     isContryValid = checkContries(),
    //     isCityValid = checkCity(),
    //     isStateValid = checkStates();

    // let isFormValid = isFnameValid &&
    //     isLnameValid &&
    //     isEmailValid &&
    //     isPhoneValid &&
    //     isCompanyVaild &&
    //     isAddress1Valid &&
    //     isAddress2Valid &&
    //     isGSTValid &&
    //     isPinValid &&
    //     isPasswordValid &&
    //     isCheckboxValid &&
    //     isConfirmPasswordValid && 
    //     isContryValid &&
    //     isStateValid &&
    //     isCityValid &&
    //     isDateValid;

    // submit to the server if the form is valid
    if (true) { 
        alert("Registerd Successfully");
        // // Map has some diadvantage
        //     const User_Map = new Map();
        //     const User_Key = email.value;
        //     const User_Value = {
        //         first_name: fname.value,
        //         last_name: lname.value,
        //         ph_no: phone.value,
        //         pass_Word: password.value
        //     }
        //     User_Map.set(User_Key, User_Value);
        //     console.log(User_Map.entries());
        reg_success = true;

        const User_Key = email.value;
        const User_Value = {
            first_name: fname.value,
            last_name: lname.value,
            e_mail: email.value,
            ph_no: phone.value,
            pass_Word: password.value
    }
        localStorage.setItem(User_Key, JSON.stringify(User_Value));

    } else {
        e.preventDefault();
    }
});


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const checkfname = () => {
    let valid = false;
    const min = 3, max = 10;
    const firstname = fname.value.trim();
    // console.log(firstname);
    if (!isRequired(firstname)) {
        showError(fname, 'Firstname can\'t be empty.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(fname, `Firstname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(fname);
        valid = true;
    }
    return valid;
};

const checklname = () => {
    let valid = false;
    const min = 1, max = 10;
    const lastname = lname.value.trim();
    if (!isRequired(lastname)) {
        showError(lname, 'Lastname can\'t be empty.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lname, `Lastname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lname);
        valid = true;
    }
    return valid;
};

const checkemail = () => {
    let valid = false;
    const e_mail = email.value.trim();
    if (!isRequired(e_mail)) {
        showError(email, 'Email can\'t be empty.');
    } else if (!isEmailValid(e_mail)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const checkcompanyname = () => {
    let valid = false;
    const min = 3, max = 20;
    const companyname = company.value.trim();
    if (!isRequired(companyname)) {
        showError(company, 'Company name can\'t be empty.');
    } else if (!isBetween(companyname.length, min, max)) {
        showError(company, `Compay name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(company);
        valid = true;
    }
    return valid;
};

const checkaddress1 = () => {
    let valid = false;
    const addressline1 = address_one.value.trim();
    if (!isRequired(addressline1)) {
        showError(address_one, 'Address line can\'t be empty.');
    } else {
        showSuccess(address_one);
        valid = true;
    }
    return valid;
};

const checkaddress2 = () => {
    let valid = false;
    const addressline2 = address_two.value.trim();
    if (!isRequired(addressline2)) {
        showError(address_two, 'Address line can\'t be empty.');
    } else {
        showSuccess(address_two);
        valid = true;
    }
    return valid;
};

const checkphoneno = () => {
    let valid = false;
    const phno = phone.value.trim();
    if (!isRequired(phno)) {
        showError(phone, 'Phone number can\'t be empty.');
    } else if (!isPhoneNumber(phno)) {
        showError(phone, 'Phone number is not valid.')
    } else {
        showSuccess(phone);
        valid = true;
    }
    return valid;
};

const checkgstno = () => {
    let valid = false;
    const gstno = gst.value.trim();
    if (!isRequired(gstno)) {
        showError(gst, 'GST number can\'t be empty.');
    } else if (!isGSTNumber(gstno)) {
        showError(gst, 'GST number is not valid.')
    } else {
        showSuccess(gst);
        valid = true;
    }
    return valid;
};

const checkpincode = () => {
    let valid = false;
    const pin = pincode.value.trim();
    if (!isRequired(pin)) {
        showError(pincode, 'Pincode can\'t be empty.');
    } else if (!isPincode(pin)) {
        showError(pincode, 'Pincode is not valid.')
    } else {
        showSuccess(pincode);
        valid = true;
    }
    return valid;
};

const checkpassword = () => {
    let valid = false;
    const pass_word = password.value.trim();
    if (!isRequired(pass_word)) {
        showError(password, 'Password can\'t be empty.');
    } else if (!isPasswordSecure(pass_word)) {
        showError(password, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(password);
        valid = true;
    }
    return valid;
};

const checkConfirmpassword = () => {
    let valid = false;
    const confirmpass = confirm_password.value.trim();
    const pass = password.value.trim();
    if (!isRequired(confirmpass)) {
        showError(confirm_password, 'Please enter the password again');
    } else if (pass !== confirmpass) {
        showError(confirm_password, 'Your password does not match');
    } else {
        showSuccess(confirm_password);
        valid = true;
    }
    return valid;
};

const checkCheckbox = () => {
    let valid = false;
    if (agreeInput.checked) {
        agreeCheck();
        valid = true;
    } else {
        disagreeCheck();
    }
    return valid;
}

const checkDate = () => {
    let valid = false;
    // console.log(date.value);
    if (date.value == '') {
        showError(date,'Date can\'t be empty');
    } else {
        showSuccess(date);
        valid = true;
    }
    return valid;
}

const checkContries = () => {
    let valid = false;
    if (countrySelect.value === 'not') {
        const inputGroup = countrySelect.parentElement;
        inputGroup.classList.remove('success');
        inputGroup.classList.add('error');
        const error = inputGroup.querySelector('small');
        error.textContent = "Country not selected";
    } else {
        const inputGroup = countrySelect.parentElement;
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');
        const error = inputGroup.querySelector('small');
        error.textContent = '';
        valid = true;
    }
    return valid;
}

const checkStates = () => {
    let valid = false;
    if (stateSelect.value === 'not' || stateSelect.value === '') {
        const inputGroup = stateSelect.parentElement;
        inputGroup.classList.remove('success');
        inputGroup.classList.add('error');
        const error = inputGroup.querySelector('small');
        error.textContent = "State not selected";
    } else {
        const inputGroup = stateSelect.parentElement;
        inputGroup.classList.remove('error');
        inputGroup.classList.add('success');
        const error = inputGroup.querySelector('small');
        error.textContent = '';
        valid = true;
    }
    console.log(stateSelect.value)
    return valid;
}

const checkCity = () => {
    let valid = false;
    const cities = city.value.trim();
    if (!isRequired(cities)) {
        showError(city, 'City can\'t be empty.');
    } else {
        showSuccess(city);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isPhoneNumber = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
};

const isGSTNumber = (gst) => {
    const re = /^[A-Z0-9]{15}$/;
    return re.test(gst);
};

const isPincode = (pincode) => {
    const re = /^\d{3} \d{3}$/;
    return re.test(pincode);
}

const showError = (input, message) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('success');
    inputGroup.classList.add('error');
    const error = inputGroup.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
    const error = inputGroup.querySelector('small');
    error.textContent = '';
}

// Update the value of "agree" input when clicking the Agree/Disagree button
const agreeCheck = () => {
    agreeInput.checked = true;
    agreeInput.parentElement.classList.add('success');
    agreeInput.parentElement.classList.remove('error');
}
const disagreeCheck = () => {
    agreeInput.checked = false;
    agreeInput.parentElement.classList.remove('success');
    agreeInput.parentElement.classList.add('error');
}

const debounce = (fn, delay = 200) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'first-name':
            checkfname();
            break;
        case 'last-name':
            checklname();
            break;
        case 'phone':
            checkphoneno();
            break;
        case 'company':
            checkcompanyname();
            break;
        case 'address1':
            checkaddress1();
            break;
        case 'address2':
            checkaddress2();
            break;      
        case 'gst-no':
            checkgstno();
            break;
        case 'pin-code':
            checkpincode();
            break;
        case 'email':
            checkemail();
            break;
        case 'password':
            checkpassword();
            break;
        case 'confirm-password':
            checkConfirmpassword();
            break;
        case 'agree':
            checkCheckbox();
            break;
        case 'date':
            checkDate();
            break;
        case 'country':
            checkContries();
            break;
        case 'state':
            checkStates();
            break;
        case 'city':
            checkCity();
            break;
    }
}));



var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}
 
const countrySelect = document.querySelector('#country'),
    stateSelect = document.querySelector('#state')
 
function loadCountries() {
        fetch(config.cUrl, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(Response => Response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option')
                option.value = country.iso2
                option.textContent = country.name
                countrySelect.appendChild(option)
            })
        })
        .catch(error => console.error('Error loading countries:', error))
}



function loadStates() {
    const selectedCountry = countrySelect.value
 
    stateSelect.innerHTML = '<option value="" disabled selected>Select the State</option>' // Used this to clear the existing states name
 
    fetch(`${config.cUrl}/${selectedCountry}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option')
                option.value = state.iso2
                option.textContent = state.name
                stateSelect.appendChild(option)
            })
        })
        .catch(error => console.error('Error loading countries:', error))
}
 
window.onload = loadCountries;

window.reg_success = reg_success;