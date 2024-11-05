const email = document.querySelector('#email');
const password = document.querySelector('#password');
// const agreeInput = document.querySelector('#agree');
const form = document.querySelector('#signup');
// console.log(getAllLocalStorageItems());

function getAllLocalStorageItems() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at index i
        const value = JSON.parse(localStorage.getItem(key)); // Get the value associated with the key
        items[key] = value; // Store the key-value pair in an object
    }
    return items;
}


form.addEventListener('submit', (e) => {
// console.log(JSON.parse(localStorage.getItem(email.value)).pass_Word);
   
    let isEmailValid = checkemail(),
        isPasswordValid = checkpassword();
    
    let isLoginValid = isEmailValid&& isPasswordValid;
    if (isLoginValid) {
        alert("Login successfull");
    } else {
        e.preventDefault();
    }
});

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const checkemail = () => {
    let valid = false;
    const e_mail = email.value.trim();
    if (!isRequired(e_mail)) {
        showError(email, 'Email can\'t be empty.');
    } else if (!isEmailValid(e_mail)) {
        showError(email, 'Email is not valid.');
    } else {
        if (localStorage.getItem(e_mail) === null) {
            showError(email, 'Email is not registered.');
        } else {
            showSuccess(email);
            valid = true;
        }
        // for (let i = 0; i < localStorage.length; i++) {
        //     const key = localStorage.key(i); // Get the key at index i
        //     if (key === email.value) {
        //         showSuccess(email);
        //         valid = true;
        //     } else {
                    // showError(email, 'Email is not registered.');
        //     }
        // }
    }
    return valid;
};

const checkpassword = () => {
    let valid = false;
    const pass_word = password.value.trim();
    if (!isRequired(pass_word)) {
        showError(password, 'Password can\'t be empty.');
    } else {
        if (pass_word === JSON.parse(localStorage.getItem(email.value)).pass_Word)
        {
            showSuccess(password);
            valid = true;
        } else {
            showError(password, 'Password doesn\'t match.');
        }
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

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

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkemail();
            break;
        case 'password':
            checkpassword();
            break;
    }
}));
