const Name=document.getElementById('exampleInputname')
const email=document.getElementById('exampleInputEmail')
const phone=document.getElementById('exampleInputphone')
const message=document.getElementById('exampleInputmsg')



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const msgValue = message.value.trim();

    if(nameValue === '') {
        setError(Name, 'Username is required');
    } else {
        setSuccess(Name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phoneValue, 'Phone number is required');
    } else if (phoneValue.length < 10 ) {
        setError(phone,'Phone number must be at least 10 character.')
    } else {
        setSuccess(phone);
    }

    if(msgValue === '') {
        setError(message, 'Message is required');
    } else {
        setSuccess(message);
    }
};
