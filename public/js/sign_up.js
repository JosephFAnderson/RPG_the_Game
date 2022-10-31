const signUp = async event => {
    event.preventDefault();
    const userEl = document.querySelector('#userName');
    const emailEl = document.querySelector('#email');
    const passEl = document.querySelector('#password');

    const username = userEl.value.trim();
    const email = emailEl.value.trim();
    const password = passEl.value.trim();

    if(username && email && password){
        const res = await fetch('/api/user/sign_up', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-type': 'application/json'}
        });
        
        res.ok ? document.location.replace('/characterCreation') :alert( "Invalid input." );
    }
};

const signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', signUp);