let pages = ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8"];

var pageIndex = 1;
showPage(pageIndex);
var myTimer;

function page(n) {
    clearInterval(myTimer);
    if (pageIndex + n <= 1) {
        myTimer = setInterval(function(){plusPages(n + 1)}, 10000);
    } else {
        myTimer = setInterval(function(){plusPages(n + 1)}, 15000);
    }
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

    newPage(n);

    if (pageIndex > pages.length-1) {
        pageIndex = pages.length
    }
    if (n < 1) {
        pageIndex = 1
    } 

    var progress = document.getElementsByClassName("progression");

    var toggle = 0;

    for (i = 0; i < progress.length; i++) {
        if (i < n-1) {
            progress[i].style.width = "100%";
        } else {
            progress[i].style.width = "0%";
        }
        if (i == n-1) {
            progress[i].id = "animateProgress";
        } else if (n == 0) {
            if (progress[n].id == "animateProgress" && toggle == 0) {
                progress[n].removeAttribute('id');
                progress[n].id = "reanimateProgress";
                toggle = 1;
            } else if (progress[n].id == "reanimateProgress" && toggle == 0) {
                progress[n].removeAttribute('id');
                progress[n].id = "animateProgress";
                toggle = 1;
            }
        } else if (progress[i].getAttribute('id') != null) {
            progress[i].removeAttribute('id');
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
    if ((n == 0 || n == -1) && document.getElementsByClassName("screen").id == "page1") {
        myTimer = setInterval(function(){plusPages(n + 1)}, 10000);
    } else {
        myTimer = setInterval(function(){plusPages(n + 1)}, 15000);
    }
}

window.addEventListener("load",function() {
    showPage(pageIndex);
    myTimer = setInterval(function(){plusPages(1)}, 10000);
});

function newPage(n) {
    document.getElementById("content").innerHTML = "";
    if (n == 1 || n == 0) {
        var heading = document.createElement("h1");
        heading.classList.add("heading");
        heading.innerHTML = "Nora Wrapped";

        var creator = document.createElement("p");
        creator.classList.add("creator");
        creator.innerHTML = "by Nora Sorsenger";

        var hashtag = document.createElement("p");
        hashtag.classList.add("hashtag");
        hashtag.innerHTML = "#NORAWRAPPED";

        var smallCircle = document.createElement("div");
        smallCircle.classList.add("circle", "smallCircle");
        var smallCircle2 = document.createElement("div");
        smallCircle2.classList.add("circle", "smallCircle2");
        var bigCircle = document.createElement("div");
        bigCircle.classList.add("circle", "bigCircle");

        document.getElementById("content").append(smallCircle, smallCircle2, bigCircle, heading, creator, hashtag);
    }
}