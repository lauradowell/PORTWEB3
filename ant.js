document.addEventListener("DOMContentLoaded", () => {
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

    const navbarHTML = `
        <div class="navbar">
            <div class="website-name">
                <a href="${basePath}index.html">LAURA DOWELL BALLESTA</a>
                <p class="job-title">Creative Technologist</p>
            </div>
            <ul class="nav-links">
                <li class="dropdown">
                    <a class="hover-underline-animation dropbtn" href="javascript:void(0)">SELECTED WORKS</a>
                    <div class="dropdown-content">
                        <a class="p1" href="${basePath}index.html">PORTFOLIO</a>
                    </div>
                </li>
                <li>
                    <a class="hover-underline-animation" href="${basePath}pages/about.html">ABOUT</a>
                </li>
            </ul>
        </div>
    `;

    // Inject the navbar HTML
    document.getElementById("primarynav").innerHTML = navbarHTML;
});
