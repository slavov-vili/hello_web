styleCurrentMainMenuSelection();

function styleCurrentMainMenuSelection() {
    let mainMenuOptions = document.getElementsByClassName('nav-menu-option');
    var i;
    for (i=0; i<mainMenuOptions.length; i++) {
        if(nodeIsLinkToPage(mainMenuOptions[i].firstChild)) {
            mainMenuOptions[i].firstChild.setAttribute('id', 'nav-menu-current-selection');
            break;
        }
    }
}


// Checks if an element's first child is a link to the current page
function nodeIsLinkToPage(node) {
    if (node.nodeName.toLowerCase() !== 'a') {
        return false;
    } else {
        let nodeHref = node.getAttribute('href');
        return nodeHref.substring(nodeHref.lastIndexOf('/')+1) === 
               location.pathname.substring(location.pathname.lastIndexOf('/')+1);
    }
}
