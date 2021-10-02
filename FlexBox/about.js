document.querySelector('.navAbout').onclick = () => {
    document.querySelector('.container').innerHTML =
        `
        <section id='about'>
            <div>
                <h1>About</h1>
            </div>
        </section>
    `
}
// document.querySelector('.navHome').click = displayContent()