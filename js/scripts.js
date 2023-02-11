let pages = ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8"];

var pageIndex = 1;
showPage(pageIndex);
var myTimer;

function page(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {plusPages(n + 1)}, 10000);
    showPage(pageIndex += n);
}

function showPage(n) {
    var i;
    var page = document.getElementsByClassName("screen");
    if (n > pages.length) {
        n = pages.length
    }

    if (n > 0) {
        page[0].id = pages[n-1];
    }

    if (pageIndex > pages.length-1) {
        pageIndex = pages.length
    }
    if (n < 1) {
        pageIndex = 1
    } 

    var progress = document.getElementsByClassName("progression");

    for (i = 0; i < progress.length; i++) {
        if (i < n-1) {
            progress[i].style.width = "100%";
        } else {
            progress[i].style.width = "0%";
        }
        if (i == n-1) {
            progress[i].id = "animateProgress";
        } else {
            if (progress[i].getAttribute('id') != null) {
                progress[i].removeAttribute('id');
            }
        }
    }
}

function plusPages(n){
    clearInterval(myTimer);
    if (n < 0){
    showPage(pageIndex -= 1);
    } else {
    showPage(pageIndex += 1); 
    }
    
    myTimer = setInterval(function(){plusPages(n + 1)}, 10000);
}

window.addEventListener("load",function() {
    showPage(pageIndex);
    myTimer = setInterval(function(){plusPages(1)}, 10000);
});