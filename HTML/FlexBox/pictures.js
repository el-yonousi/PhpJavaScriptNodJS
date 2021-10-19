document.querySelector('.navPictures').onclick = () => {
    document.querySelector('.container').innerHTML =
    /*html*/
        `
        <section id='pictures'>
            <div class="search-image">
                <input type="text" name="search" id="searchinput" />
                <button class="btn-search" id="btnSearch">
                    <i class="fa fa-search"></i>
                </button>
                <button class="btn-search" onclick="document.querySelector('#formAddPicture').style.display = 'grid'" style="background-color: green; color: white">
                    <i class="fa fa-plus-circle"></i>
                </button>
            </div>
            <div class="picture-add" id="formAddPicture"  style="display: none;">
                <button type="button" class="btn-close"
                    onclick="document.querySelector('#formAddPicture').style.display = 'none'">
                    <i class="fa fa-times"></i>
                </button>
                <div class="picture-form">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" required>
                    <small class="titleError"></small>
                    <label for="url">URL</label>
                    <input type="url" name="url" id="url" required>
                    <small class="urlError"></small>
                    <div class="picture-buttons">
                        <input type="button" value="Add" id="btnAddPicture" onclick="addPictureLocal()">

                    </div>
                </div>
            </div>
            <div id="picture-get" class="content">

            </div>
        </section>
    `

    getAllPicturesUser()
}

function addPictureLocal () {

    const title = document.querySelector('#title');
    const url = document.querySelector('#url');

    let titleError = document.querySelector('.titleError');
    let urlError = document.querySelector('.urlError');

    if (!title.checkValidity())
    {
        titleError.innerHTML = title.validationMessage
        return
    }
    else
    {
        titleError.innerHTML = ''
    }
    if (!url.checkValidity())
    {
        urlError.innerHTML = url.validationMessage
        return
    } else
    {
        urlError.innerHTML = ''
    }

    checkImage(url.value, async (exists) => {
        if (exists)
        {
            try
            {
                // Default options are marked with *
                const response = await fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                const datas = await response.json(); // parses JSON response into native JavaScript objects
                return datas;
            } catch (error)
            {
                return error
            }
        }
        else
        {
            urlError.innerHTML = 'url image not valid!!'
        }
    })
    urlError.innerHTML = ''
}

function checkImage (url, callback) {
    const img = new Image();

    img.src = url;

    if (img.complete)
    {
        callback(true);
    } else
    {
        img.onload = () => {
            callback(true);
        };
        img.onerror = () => {
            callback(false);
        };
    }
}

// fetch get all pictures
// get API
async function getAllPicturesUser () {
    try
    {
        loader.style.visibility = "visible"
        // Default options are marked with *
        fetch('https://api-casetrue.herokuapp.com/api/services', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'error', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(response => {
            loader.style.visibility = "hidden"
            return response.json();
        }).then(data => {
            console.log(data)
            data.services.map(pht => {
                document.querySelector('#picture-get').innerHTML +=
                /*html*/
                    `
                <div class="card" key="${pht.id}">
                <h5 class="card-text">${pht.user.split(',')[0]}</h5>
                <img src="${pht.img}" alt="${pht.user}" class="card-img">
                <button class="btn-primary"><a href="${pht.download}" download="casetrue-${pht.id_image}" target="_blank" rel="noopener noreferrer" type="button">
                    <i class="fa fa-download iconDownload"></i>
                </a></button>
                <button
                        id="${pht.id_image}"
                        onclick="deletePicture('${pht.id}');"
                        class="btn-primary btn-save">
                    <i class="fa fa-spinner fa-spin iconLoad" style="display: none;"></i>
                    <i class="fas fa-heart-broken iconSave"></i>
                </button>
            </div>
            `
            })
        }).catch(err => {
            console.log('then catch method: ', err)
            loader.style.visibility = "hidden"
        })
    } catch (error)
    {
        console.log('catch method: ', error)
        loader.style.visibility = "hidden"
    }
}


// delete picture
// get API
async function deletePicture (id) {
    try
    {
        // Default options are marked with *
        await fetch('https://api-casetrue.herokuapp.com/api/services/' + id, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            // headers: headers,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'error', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            const key = document.querySelector('.card')

            if (data.status === true && key.getAttribute('key') === id)
                key.remove();
            else
                console.log('card not found')

        }).catch(err => {
            console.error({ ThenCatchError: err })
        })
    } catch (error)
    {
        console.error({ CatchError: error })
    }
}