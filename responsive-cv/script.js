/*
    Theme Toggle
-------------------*/
const html = document.querySelector("html")
const themeToggleBtn = document.querySelector(".theme-toggle-btn")

const defaultTheme = localStorage.getItem("theme")

if (defaultTheme === "dark") {
    html.setAttribute("theme", "dark")
    themeToggleBtn.innerHTML = '<box-icon name="sun" color="var(--title-color)"></box-icon>'
}

themeToggleBtn.addEventListener("click", changeTheme)

function changeTheme() {
    if (html.getAttribute("theme") == "light") {
        themeToggleBtn.innerHTML = '<box-icon name="sun" color="var(--title-color)"></box-icon>'
        html.setAttribute("theme", "dark")
        localStorage.setItem("theme", "dark")
    } else {
        themeToggleBtn.innerHTML = '<box-icon name="moon" color="var(--title-color)"></box-icon>'
        html.setAttribute("theme", "light")
        localStorage.setItem("theme", "light")
    }
}

/*
    Scroll to Top
-------------------*/
const scrollToTopBtn = document.querySelector(".scroll-to-top")
scrollToTopBtn.style.display = "none"

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

toggleScrollToTopButton = () => {
    if (window.innerWidth <= 768) {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop <= 300) {
            scrollToTopBtn.style.display = "none"
        } else {
            scrollToTopBtn.style.display = "block"
        }
    }
}

let timer
const debounceScroll = () => {
    clearTimeout(timer)
    timer = setTimeout(toggleScrollToTopButton, 100)
}

// document.addEventListener("scroll", toggleScrollToTopButton)
document.addEventListener("scroll", debounceScroll)
