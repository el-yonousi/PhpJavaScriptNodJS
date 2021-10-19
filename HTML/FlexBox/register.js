var loader = document.querySelector('.loader')

document.querySelector('#create').addEventListener('click', () => {
    let form = document.querySelector('#register')
    let name = form.elements['name'];
    let email = form.elements['email'];
    let password = form.elements['password'];
    let confirmPassword = form.elements['confirmPassword'];

    let errorName = document.querySelector('#errorName');
    let errorEmail = document.querySelector('#errorEmail');
    let errorPassword = document.querySelector('#errorPassword');
    let errorConfirmPassword = document.querySelector('#errorConfirmPassword');

    if (!name.checkValidity())
    {
        errorName.innerHTML = name.validationMessage
        return
    }
    else
    {
        errorName.innerHTML = ""
    }

    if (!email.checkValidity())
    {
        errorEmail.innerHTML = email.validationMessage
        return
    } else
    {
        errorEmail.innerHTML = ""
    }

    if (!password.checkValidity())
    {
        errorPassword.innerHTML = password.validationMessage
        return
    }
    else
    {
        errorPassword.innerHTML = ""
    }
    if (!confirmPassword.checkValidity())
    {
        errorConfirmPassword.innerHTML = confirmPassword.validationMessage
        return
    }
    else
    {
        errorConfirmPassword.innerHTML = ""
    }

    if (password.value !== confirmPassword.value)
    {
        errorConfirmPassword.innerHTML = "confirm password not valid"
        return
    }
    else
        errorConfirmPassword.innerHTML = ""

    loader.style.visibility = "visible"

    createUser('https://api-casetrue.herokuapp.com/api/register', {
        name: name.value,
        email: email.value,
        password: confirmPassword.value

    }).then(data => {
        if (data.status === true)
        {
            window.location.assign('index.html');
        }
        else
        {
            errorEmail.innerHTML = data.data.email ? data.data.email : ""
            errorPassword.innerHTML = data.data.password ? data.data.password : ""
            errorConfirmPassword.innerHTML = data.data.password ? data.data.password : ""
            errorName.innerHTML = data.data.name ? data.data.name : ""
        }
    }).finally(() => {
        loader.style.visibility = "hidden"
    })
})

async function createUser (url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    return response.json(); // parses JSON response into native JavaScript objects
}