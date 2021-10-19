function displayContent () {

    document.querySelector('.container').innerHTML =
    /*html*/
        `
        <section id='home'>
            <div class="search-image">
                <input type="text" name="search" id="searchinput" />
                <button class="btn-search" id="btnSearch">
                    <i class="fa fa-search"></i>
                    <!-- <i class="fas fa-sad-tear"></i> -->
                </button>
                </div>
            <div class="content" id="app">
            </div>
            </section>
    `
}
displayContent()

// function myFunction (x) {
//     if (x.matches)
//     { // If media query matches
//         document.querySelector('.content-home').style.columnCount = 1;
//     } else
//     {
//         document.querySelector('.content-home').style.columnCount = 3;
//     }
// }

// var x = window.matchMedia("(max-width: 320px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

// // @media only screen and(max - width: 600px) {
// //   .example { background: red; }
// // }

// // /* Small devices (portrait tablets and large phones, 600px and up) */
// // @media only screen and(min - width: 600px) {
// //   .example { background: green; }
// // }

// // /* Medium devices (landscape tablets, 768px and up) */
// // @media only screen and(min - width: 768px) {
// //   .example { background: blue; }
// // }

// // /* Large devices (laptops/desktops, 992px and up) */
// // @media only screen and(min - width: 992px) {
// //   .example { background: orange; }
// // }

// // /* Extra large devices (large laptops and desktops, 1200px and up) */
// // @media only screen and(min - width: 1200px) {
// //   .example { background: pink; }
// // }