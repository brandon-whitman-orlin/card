document.addEventListener("DOMContentLoaded", (event) => {

function applyChanges() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const color3 = document.getElementById("color3").value;

    document.documentElement.style.setProperty("--color1", color1);
    document.documentElement.style.setProperty("--color2", color2);
    document.documentElement.style.setProperty("--color3", color3);

    const font1 = document.getElementById("font1").value;
    const font2 = document.getElementById("font2").value;

    addLinkToHead(`https://fonts.googleapis.com/css2?family=${font1.replace(/\s+/g, '+')}&display=swap`, "stylesheet");
    document.documentElement.style.setProperty("--font1", font1);

    addLinkToHead(`https://fonts.googleapis.com/css2?family=${font2.replace(/\s+/g, '+')}&display=swap`, "stylesheet");
    document.documentElement.style.setProperty("--font2", font2);
}

function addLinkToHead(href, rel, crossorigin) {
    const linkElement = document.createElement("link");
    linkElement.setAttribute("href", href);
    linkElement.setAttribute("rel", rel);
  
    if (crossorigin) {
      linkElement.setAttribute("crossorigin", crossorigin);
    }
  
    document.head.appendChild(linkElement);
  }

document.getElementById("applyChanges").addEventListener("click", function (event) {
    event.preventDefault();
    applyChanges();
});

});