const ol = document.getElementById("menu");
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },
    {
      label: "Week6 notes",
      url: "week6/index.html"
    },
    {
      label: "Week7 notes",
      url: "week7/index.html"
    }
];

links.forEach((link) => {
    let anchor = document.createElement("a");
    let li = document.createElement("li");
    let text = document.createTextNode(link.label);
    anchor.href = link.url;
    anchor.appendChild(text);
    li.appendChild(anchor);
    ol.appendChild(li);
});
