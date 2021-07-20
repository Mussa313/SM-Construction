filterSelection('all')

function filterSelection(c) {
    let i, x;
    x = document.getElementsByClassName("filterDiv");
    if (c == 'all') c = "";
    for (let i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        // console.log(x[i].className.indexOf(c));
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
    if (c === "remodeling")
        setclass();
}

function setclass() {
    console.log("img in set class");
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            console.log("hi");
            element.className += " " + arr2[i];
        }
    }

}


function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

setimageslider();

function setimageslider() {
    let projectimg = document.getElementsByClassName("project-img")[0];
    console.log(projectimg.firstChild.src);

    let thumbimg = document.getElementsByClassName("thumb");
    console.log(thumbimg[0].src);
    for (let i = 0; i < thumbimg.length; i++) {
        thumbimg[i].addEventListener('click', () => {
            projectimg.firstChild.src = thumbimg[i].src;
        })
    }

}