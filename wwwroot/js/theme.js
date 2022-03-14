// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Toggle Night and Day css themes.

// Select the button
const btn = document.querySelector("#theme-button");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the current URL contains "day.css"
    if (theme.getAttribute("href") == "day.css") {
        // ... then switch it to "night.css"
        theme.href = "night.css";
        location.reload();
        btn.innerHTML = "Night";
        // Otherwise...
    } else {
        // ... switch it to "day.css"
        theme.href = "day.css";
        btn.innerHTML = "Day";
    }
});