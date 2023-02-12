let pages = ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8"];

var pageIndex = 1;
showPage(pageIndex);
var myTimer;

function page(n) {
    clearInterval(myTimer);
    if (pageIndex + n <= 1) {
        myTimer = setInterval(function(){plusPages(n + 1)}, 8500);
    } else if (pageIndex + n == 3) {
        myTimer = setInterval(function(){plusPages(n + 1)}, 35000);
    } else {
        myTimer = setInterval(function(){plusPages(n + 1)}, 18000);
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
        myTimer = setInterval(function(){plusPages(n + 1)}, 8500);
    } else if (pageIndex == 3) {
        myTimer = setInterval(function(){plusPages(n + 1)}, 35000);
    } else {
        myTimer = setInterval(function(){plusPages(n + 1)}, 18000);
    }
}

window.addEventListener("load",function() {
    showPage(pageIndex);
    myTimer = setInterval(function(){plusPages(1)}, 9000);
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

        var box = document.createElement("div");
        box.classList.add("box");

        document.getElementById("content").append(smallCircle, smallCircle2, bigCircle, box, heading, creator, hashtag);
    } else if (n == 2) {
        var totalCourses = document.createElement("p");
        totalCourses.classList.add("totalCourses");
        totalCourses.innerHTML = "I have participated in 4 different organisations' science and tech courses"

        var topCourse = document.createElement("p");
        topCourse.classList.add("topCourse");
        topCourse.innerHTML = "But with one company, it was love at first course"

        var square1 = document.createElement("div");
        square1.classList.add("square1");
        var square2 = document.createElement("div");
        square2.classList.add("square2");

        var HWlogo = document.createElement("img");
        HWlogo.src = "images/HW_logo.png";

        var topCompany = document.createElement("p");
        topCompany.classList.add("topCompany");
        topCompany.innerHTML = "I have spent 5 years working at Hello World! ever since, and had 4 different roles during this time";

        document.getElementById("content").append(totalCourses, topCourse, square1, square2, HWlogo, topCompany);
    } else if (n == 3) {
        var heading1 = document.createElement("h1");
        heading1.classList.add("heading1");
        heading1.innerHTML = "All my job positions at Hello World!";

        var rank1 = document.createElement("div");
        rank1.classList.add("jobPosition", "rank1");
        rank1.innerHTML = "5 yrs 3 mos";

        var p1 = document.createElement("p");
        p1.classList.add("job1");
        p1.innerHTML = "Coding Instructor";

        var rank2 = document.createElement("div");
        rank2.classList.add("jobPosition", "rank2");
        rank2.innerHTML = "3 yrs 6 mos";

        var p2 = document.createElement("p");
        p2.classList.add("job2");
        p2.innerHTML = "Course Developer";

        var rank3 = document.createElement("div");
        rank3.classList.add("jobPosition", "rank3");
        rank3.innerHTML = "2 yrs 4 mos";

        var p3 = document.createElement("p");
        p3.classList.add("job3");
        p3.innerHTML = "Head of Curriculum";

        var rank4 = document.createElement("div");
        rank4.classList.add("jobPosition", "rank4");
        rank4.innerHTML = "11 mos";

        var p4 = document.createElement("p");
        p4.classList.add("job4");
        p4.innerHTML = "Junior Project Coordinator";

        var heading2 = document.createElement("h1");
        heading2.classList.add("heading2");
        heading2.innerHTML = "My favorite projects at Hello World!";

        var projects = document.createElement("ol");

        var project1 = document.createElement("li")
        project1.classList.add("project1");
        project1.innerHTML = "Organizing and hosting girls-only inspirational events for young girls to try coding and digital creation."

        var project2 = document.createElement("li");
        project2.classList.add("project2");
        project2.innerHTML = "Regulating the conversion of Hello World!'s courses to match our new formats and standards."

        var project3 = document.createElement("li");
        project3.classList.add("project3");
        project3.innerHTML = "Inspiring kids to try coding on a weekly basis and getting inspired myself from project with partner companies."

        var project4 = document.createElement("li");
        project4.classList.add("project4");
        project4.innerHTML = "Developing a web quiz recommending participants a suitable course based on preferences and experiences."
        
        projects.append(project1, project2, project3, project4);

        document.getElementById("content").append(heading1, p1, p2, p3, p4, rank1, rank2, rank3, rank4, heading2, projects);
    }
}