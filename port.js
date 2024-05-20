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
  
  // didint allowed for this project
  // if (window.scrollY >= 170 && window.scrollY <= 987) {
  //   landd.classList.add("landdd");
  // } else {
  //   landd.classList.remove("landdd");
  // }
  if (window.scrollY >= 276 && window.scrollY <= 1722) {
    myskillss.classList.add("myskillsjj");
  } else {
    myskillss.classList.remove("myskillsjj");
  }
  // didint allowed for this project
  // if (window.scrollY >= 970 && window.scrollY <= 1930) {
  //   landingg.classList.add("landinggg");
  // } else {
  //   landing.classList.remove("landinggg");
  // }
  if (window.scrollY >= 975 && window.scrollY <= 1939) {
    mynfl.classList.add("nflll");
  } else {
    mynfl.classList.remove("nflll");
  }
    // didint allowed for this project
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
// i will didint do this because its from ai
// const sectionObservers = [];

// sec.forEach(section => {
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // عندما يتم عرض القسم في الشاشة، قم بتطبيق الكلاس الذي يحتوي على الأنيميشن
//         entry.target.classList.add('secc');
//         // بعد تنفيذ الأنيميشن، توقف المراقب عن مراقبة القسم
      
//       }
//     });
//   });

//   // بدء مراقبة القسم
//   observer.observe(section);
//   // حفظ المراقب في مصفوفة للاستخدام فيما بعد
//   sectionObservers.push(observer);
// });