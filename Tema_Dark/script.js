const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle');
const themeSystem = localStorage.getItem("themeSystem") || "light";

btnDarkModeToggle.addEventListener("click", () =>{
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "Light" ? "dark" : "Light";
    
    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme);
})

function defineCurrentTheme(theme){
    const darksvg = "Dark";
    const lightsvg = "Light";
    document.documentElement.setAttribute("data-theme", theme);
    if (theme == "Light"){
        btnDarkModeToggle.innerHTML = darksvg;
    } else {
        btnDarkModeToggle.innerHTML = lightsvg;
    }
}

defineCurrentTheme(themeSystem);