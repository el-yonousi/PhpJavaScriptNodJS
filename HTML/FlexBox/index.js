/**
 * this variable make loadin page
 */
var loader = document.querySelector('.loader');

document.querySelector('#submit').onclick = () => {
    if (typeof (Storage) !== "undefined")
    {
        let form = document.querySelector('#form');
        let email = form.elements['username'];
        let password = form.elements['password'];
        let emailError = document.querySelector('#emailError');
        let passwordError = document.querySelector('#passwordError');

        if (!email.checkValidity())
        {
            emailError.innerHTML = email.validationMessage;
            return
        }
        else
        {
            emailError.innerHTML = "";
        }

        if (!password.checkValidity())
        {
            passwordError.innerHTML = password.validationMessage;
            return
        } else
        {
            passwordError.innerHTML = "";
        }

        loader.style.visibility = "visible"

        postData('https://api-casetrue.herokuapp.com/api/login', {
            email: email.value,
            password: password.value
        }).then(data => {
            if (data.status === true)
            {
                document.cookie = `username=${data.user.name}`;
                if (!getCookie("isDark"))
                {
                    document.cookie = "isDark=light";
                }
                document.cookie = `XSRF-TOKEN=${data.user.token}`;
                window.location.assign('main.html');
            }
            else
            {
                passwordError.innerHTML = data.message;
            }
        }).finally(() => {
            loader.style.visibility = "hidden"
        });
    }
    else
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


async function postData (url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    return response.json();
}


function getCookie (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++)
    {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    // document.querySelector('#usernamelogin').innerText = "home";
}



function setUserNameOnLoad (username) {
    if (username)
        document.querySelector('#usernamelogin').innerText = username;
    else
        document.querySelector('#usernamelogin').innerText = "casetrue";
}

setUserNameOnLoad(getCookie("username"))