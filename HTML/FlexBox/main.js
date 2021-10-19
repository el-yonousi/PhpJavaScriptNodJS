var loader = document.querySelector('.loader')

async function getAccess () {
    try
    {
        const response = await fetchGETAPI('https://api-casetrue.herokuapp.com/api/checkauth',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("XSRF-TOKEN")}`
                // 'Content-Type': 'application/x-www-form-urlencoded',
            })
        changeDarkLightMode(getCookie("isDark"))
        fetchAllImages() // get content
    } catch (error)
    {
        window.location.assign('index.html')
    }
}

getAccess()

async function logout () {
    try
    {
        const response = await fetchGETAPI('https://api-casetrue.herokuapp.com/api/logout',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("XSRF-TOKEN")}`
                // 'Content-Type': 'application/x-www-form-urlencoded',
            })
        window.location.assign('index.html')
    } catch (error)
    {
        console.error('faild to logout', error)
    }
}
//search
var querySearch = "";
document.querySelector('#btnSearch').addEventListener('click', () => {
    querySearch = document.querySelector('#searchinput').value;

    fetchAllImages();
})

// Execute a function when the user releases a key on the keyboard
document.querySelector('#searchinput').addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13)
    {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btnSearch").click();
    }
});

/**
 * fetch image from unsplash
 */
async function fetchAllImages () {

    loader.style.visibility = "visible"

    if (!querySearch)
    {
        querySearch = "new"
    }

    const clientUnsplash = 'JKMbhN-756FrOtHEKHwUdhsuzeJulsRNxe6XosBlxx8';
    const urlUnsplash = `https://api.unsplash.com/search/photos?query=${querySearch}&per_page=100&client_id=${clientUnsplash}`;
    const clientPixel = '563492ad6f91700001000001e5d6143af8404888a9c2c0062dbe6731';
    const urlPixel = `https://api.pexels.com/v1/search?query=${querySearch}&per_page=100`;
    try
    {
        const results = await Promise.all(
            [
                fetchGETAPI(urlUnsplash, {}),
                fetchGETAPI(urlPixel, {
                    Accept: 'application/json',
                    Authorization: clientPixel
                })
            ]
        )
        // console.log(results)
        const finalData = await Promise.all(results.map(result => result.json()))
        // console.log({ Unsplash: finalData[0], Pixels: finalData[1] })

        let myArrayResults = new Array()
        let sizeClass = ""
        console.log(finalData[0].results.length)
        let myResults = finalData[0].results.map(unsplash => {
            let myClass = new Photo(
                unsplash.id,
                unsplash.user.name,
                unsplash.urls.regular,
                unsplash.alt_description,
                unsplash.description,
                unsplash.links.download,
                unsplash.width,
                unsplash.height
            )
            myArrayResults.push(myClass)
        })
        myResults.push(
            finalData[1].photos.map(pixel => {
                let myClass = new Photo(
                    pixel.id,
                    pixel.photographer,
                    pixel.src.large,
                    pixel.alt_description,
                    pixel.photographer,
                    pixel.src.original,
                    pixel.width,
                    pixel.height
                )
                myArrayResults.push(myClass)
            }))

        let app = document.querySelector('#app');

        if (myArrayResults.length !== 0)
            app.innerHTML = ''

        myArrayResults.map(pht => {
            console.log({ w: pht.w, h: pht.h })
            if (pht.w > pht.h)
                sizeClass = "landscape"
            else if (pht.w < pht.h)
                sizeClass = "portrait"
            else
                sizeClass = "normal"
            /*html*/
            app.innerHTML +=
            `
            <div class="card ${sizeClass}">
            <h5 class="card-text">${pht.user}</h5>
                <img src="${pht.img}" alt="${pht.user}" class="card-img">
                <button class="btn-primary"><a href="${pht.download}" download="casetrue-${pht.id}" target="_blank" rel="noopener noreferrer" type="button">
                    <i class="fa fa-download iconDownload"></i>
                </a></button>
                <button
                        id="${pht.id}"
                        onclick="savePictureLike('${pht.id}','${[
                    pht.id,
                    pht.user,
                    pht.img,
                    pht.download]}');"
                        class="btn-primary btn-save">
                    <i class="fa fa-spinner fa-spin iconLoad" style="display: none;"></i>
                    <i class="fa fa-heart iconSave"></i>
                </button>
            </div>
            `
        })

    } catch (error)
    {
        loader.style.visibility = "hidden"
        console.log({ errors: error.message })
    }
    loader.style.visibility = "hidden"
}

async function savePictureLike (id, data) {
    document.getElementById(id).children[1].style.display = 'none'
    document.getElementById(id).children[0].style.display = 'initial'

    // let span = document.getElementById(id)
    // let classes = span.classList;
    // let result = classes.toggle("btn-save");
    const dataResult = data.split(',')
    // add
    document.getElementById(id).classList.add('btn-save')

    try
    {
        const data = await fetchPOSTAPI(
            'https://api-casetrue.herokuapp.com/api/images',
            {
                id_image: dataResult[0],
                user: dataResult[1] + ', ' + querySearch,
                img: dataResult[2],
                download: dataResult[3],
            },
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }).then(data => {
                if (data.status)
                {

                    console.log('Success: ', data)
                }
                else
                {
                    console.error('Errors ', data)
                }
                document.getElementById(id).parentElement.remove();
            })
    } catch (error)
    {
        // document.getElementById(id).children[1].style.display = 'none'
        // document.getElementById(id).children[0].style.display = 'initial'
        document.getElementById(id).parentElement.remove();
        console.error('Errors: ', error)
    }
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
            return c.substring(name.length, c.length)
        }
    }
    // document.querySelector('#username').innerText = "";
}

function changeDarkLightMode (isDark) {
    if (isDark === "light")
    {
        document.querySelector('.light').style.display = 'none'
        document.querySelector('.dark').style.display = 'initial'

        document.documentElement.style.setProperty("--color-blueviolet", "blueviolet")
        document.documentElement.style.setProperty("--color-blueviolet-dark", "#66339991")
        document.documentElement.style.setProperty("--color-rebeccapurple", "rebeccapurple")
        document.documentElement.style.setProperty("--color-white", "white")
        document.documentElement.style.setProperty("--color-whitesmoke", "whitesmoke")
        document.documentElement.style.setProperty("--color-red", "#fa4067")
    }
    else
    {
        document.querySelector('.dark').style.display = 'none'
        document.querySelector('.light').style.display = 'initial'

        document.documentElement.style.setProperty("--color-blueviolet", " #3f3f3f")
        document.documentElement.style.setProperty("--color-blueviolet-dark", "#5f5f5f")
        document.documentElement.style.setProperty("--color-rebeccapurple", "#1f1f1f")
        document.documentElement.style.setProperty("--color-white", "#ddd")
        document.documentElement.style.setProperty("--color-whitesmoke", "#f5f5f5")
        document.documentElement.style.setProperty("--color-red", "#fa4067")
    }
    document.cookie = `isDark = ${isDark} `;
}

class Photo {
    constructor(id, username, img, title, description, download, w, h) {
        this.id = id
        this.user = username
        this.img = img
        this.title = title
        this.description = description
        this.download = download
        this.w = w
        this.h = h
    }
}

//post API
async function fetchPOSTAPI (url, data = {}, headers = {}) {
    try
    {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: headers,
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
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

// get API
function fetchGETAPI (url, headers = {}) {
    try
    {
        // Default options are marked with *
        const response = fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: headers,
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${getCookie("XSRF-TOKEN")} `
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'error', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        return response; // parses JSON response into native JavaScript objects
    } catch (error)
    {
        return error
    }
}