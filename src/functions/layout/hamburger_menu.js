// Hide or show more of navbar
export default function toggleNavBar() {

    // Get the nav bar by classname.  There should only be one spaNavbar
    var navBar = document.getElementsByClassName("spaNavigationBar")[0];
    const listItems = document.getElementsByClassName("dashboardListAction");

    // Check current width
    if (window.getComputedStyle(navBar).width === "65px") {

        // Set the navbar width
        navBar.style.width = "155px";

        // Resize the main container
        var mainContainer = document.getElementsByClassName("spaMainDisplayContainer")[0]
        mainContainer.style.left = "155px";
        mainContainer.style.width = "calc(100% - 155px)";

        // Resize the top bar
        var topBar = document.getElementsByClassName("topBar")[0];
        topBar.style.left = "155px";
        topBar.style.width = "calc(100% - 155px)";

        // Iterate through list and show the items
        [...listItems].map((element) => {
            element.children[1].style.visibility = "visible";
            return;
        });

    } else {
        // Set the navbar width
        navBar.style.width = "65px";

        // Resize the main container
        var mainContainer = document.getElementsByClassName("spaMainDisplayContainer")[0];
        mainContainer.style.left = "65px";
        mainContainer.style.width = "calc(100% - 65px)";

        // Resize the top bar
        var topBar = document.getElementsByClassName("topBar")[0];
        topBar.style.left = "65px";
        topBar.style.width = "calc(100% - 65px)";

        // Iterate through list and show the items
        [...listItems].map((element) => {
            element.children[1].style.visibility = "hidden";
            return;
        });
    }
}