function opencons(){
    document.getElementById("header").style.background="var(--background-cons)"
    document.getElementById("title").innerText="Construction";
    document.getElementById("service-tag").className="yellow";
    document.getElementById("show").className="";
    document.getElementById("content").style.display="none";
    document.getElementById("construction").style.display="block";
}

function openint(){
    document.getElementById("header").style.background="var(--background-cons)"
    document.getElementById("title").innerText="Interior Design";
    document.getElementById("service-tag").className="yellow";
    document.getElementById("int").innerText="Interior Design";
    document.getElementById("show").className="";
    document.getElementById("content").style.display="none";
    document.getElementById("interiordesign").style.display="block";
}

function openren(){
    document.getElementById("header").style.background="var(--background-cons)"
    document.getElementById("title").innerText="Renowed of Old House";
    document.getElementById("service-tag").className="yellow";
    document.getElementById("int").innerText="Renowed of Old House";
    document.getElementById("show").className="";
    document.getElementById("content").style.display="none";
    document.getElementById("Renowed").style.display="block";
}