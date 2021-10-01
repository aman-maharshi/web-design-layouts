let html = document.querySelector("html")
let toggleBtn = document.querySelector(".theme-toggle-btn")

const defaultTheme = localStorage.getItem("theme")

if (defaultTheme === "dark") {
    html.setAttribute("theme", "dark")
    toggleBtn.innerHTML = '<box-icon name="sun" color="var(--title-color)"></box-icon>'
}

toggleBtn.addEventListener("click", changeTheme)

function changeTheme() {
    if (html.getAttribute("theme") == "light") {
        toggleBtn.innerHTML = '<box-icon name="sun" color="var(--title-color)"></box-icon>'
        html.setAttribute("theme", "dark")
        localStorage.setItem("theme", "dark")
    } else {
        toggleBtn.innerHTML = '<box-icon name="moon" color="var(--title-color)"></box-icon>'
        html.setAttribute("theme", "light")
        localStorage.setItem("theme", "light")
    }
}
