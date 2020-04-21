setTimeout(function() {
    var elements = document.getElementsByClassName('overlay'),
        i, collection;
    for (i = 0, collection = elements.length; i < collection; i++) {
        elements[i].style.opacity = "0";
    }

}, 3000);
