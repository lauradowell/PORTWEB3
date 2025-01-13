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
                    <a class="hover-underline-animation dropbtn" href="javascript:void(0)">ABOUT</a>
                    <!-- Dropdown for About -->
                    <div class="dropdown-content">
                        <a href="${basePath}pages/about.html">About Me</a>
                        <a href="${basePath}pages/skills.html">Skills</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="hover-underline-animation dropbtn" href="javascript:void(0)">SELECTED WORKS</a>
                    <div class="dropdown-content">
                        <a class="p1" href="${basePath}index.html">Portfolio</a>
                    </div>
                </li>
            </ul>
        </div>
    `;


    // Inject the navbar HTML
    document.getElementById("primarynav").innerHTML = navbarHTML;

    // Function to adjust iframe height based on content
    function adjustIframeHeight() {
        const iframe = document.getElementById("pdfIframe");

        // Ensure iframe exists on the page before attempting to adjust height
        if (iframe) {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const iframeBody = iframeDocument.body;

            // Adjust iframe height based on content height
            iframe.style.height = iframeBody.scrollHeight + "px";
        }
    }

    // Adjust iframe height on page load
    const iframe = document.getElementById("pdfIframe");
    if (iframe) {
        iframe.onload = adjustIframeHeight;
    }

    // Adjust iframe height when the window is resized
    window.onresize = adjustIframeHeight;
});
