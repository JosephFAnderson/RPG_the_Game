const login = async event => {
    event.preventDefault();
    const userEl = document.querySelector('#userName');
    const passEl = document.querySelector('#password');

    const username = userEl.value.trim();
    const password = passEl.value.trim();

    if(username && password){
        const res = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' }
        });

        res.ok ? document.location.replace('/characterlanding') : alert( await res.json());
    }
};

const btnEl = document.querySelector('#loginBtn');
btnEl.addEventListener('click', login);

