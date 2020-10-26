function openPage(pageName, elmnt, backgroundcolor, color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = backgroundcolor;
  elmnt.style.color = color;
}