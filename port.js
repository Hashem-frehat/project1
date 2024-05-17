let el = document.querySelector(".scroler");

// scroler
let height2 =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(height2);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);

window.addEventListener("scroll", () => {
  let mynfl = document.getElementById("nfll");
  let myskillss = document.getElementById("myskillsj");
  let landd = document.getElementById("land");
  let firstt = document.getElementById("first");
  let scroltop = document.documentElement.scrollTop;
  let scroltopp = parseInt(scroltop);
  let scrolimage = document.getElementById("pictt");
  let landingg = document.getElementById("landing");
  let banding = document.getElementById("band");
  // scroll the header

  console.log(scroltopp);
  if (window.scrollY >= 0 && window.scrollY <= 200) {
    firstt.classList.add("firsttt");
  } else {
    firstt.classList.remove("firsttt");
  }
  // scroll the pict
  if (window.scrollY >= 0 && window.scrollY <= 791) {
    scrolimage.classList.add("picttt");
  } else {
    scrolimage.classList.remove("picttt");
  }
  // scroll skills
  if (window.scrollY >= 64 && window.scrollY <= 987) {
    landd.classList.add("landdd");
  } else {
    landd.classList.remove("landdd");
  }
  if (window.scrollY >= 78 && window.scrollY <= 1400) {
    myskillss.classList.add("myskillsjj");
  } else {
    myskillss.classList.remove("myskillsjj");
  }
  if (window.scrollY >= 472 && window.scrollY <= 1512) {
    landingg.classList.add("landinggg");
  } else {
    landing.classList.remove("landinggg");
  }
  if (window.scrollY >= 609 && window.scrollY <= 1620) {
    mynfl.classList.add("nflll");
  } else {
    mynfl.classList.remove("nflll");
  }
  if (
    window.scrollY >=
      banding.offsetTop - document.documentElement.clientHeight &&
    banding.offsetTop + 50
  ) {
    banding.classList.add("bandd");
  } else {
    banding.classList.remove("bandd");
  }

  el.style.width = `${(scroltopp / height2) * 100}%`;
});

// active pro
let projects = document.querySelectorAll(".myprojects #batt");
// console.log(projects);
let switcherspan = document.querySelectorAll(".projects  .lang span");
// console.log(switcherspan);
switcherspan.forEach((sp) => {
  sp.addEventListener("click", removeactive);
  sp.addEventListener("click", managepro);
});

function removeactive() {
  switcherspan.forEach((sp) => {
    sp.classList.remove("active");
    this.classList.add("active");
  });
}
// manage pro
function managepro() {
  projects.forEach((pro) => {
    pro.style.display = "none";
  });
  console.log(document.querySelectorAll(this.dataset.esc));
  document.querySelectorAll(this.dataset.esc).forEach((pre) => {
    pre.style.display = "block";
  });
}
