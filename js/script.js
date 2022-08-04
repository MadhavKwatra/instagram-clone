const taggedBtn = document.querySelector(".tagged-btn");
const postsBtn = document.querySelector(".posts-btn");

const postsTab = document.querySelector(".posts");
const taggedTab = document.querySelector(".tagged");

const postsIcon = document.querySelector(".posts-btn img");
const taggedIcon = document.querySelector(".tagged-btn img");

// For starting
postsBtn.style.borderBottom = "1px solid #000000";

const openTab = (e) => {
  // e.style.display = "grid";
  console.log(e);
  console.log("Clicked");
};

// Show tagged Tab
taggedBtn.addEventListener("click", () => {
  taggedTab.style.display = "grid";
  postsTab.style.display = "none";
  postsBtn.style.borderBottom = "none";
  taggedBtn.style.borderBottom = "1px solid #000000";
  postsIcon.style.opacity = "50%";
  taggedIcon.style.opacity = "100%";
});

// Show posts tab
postsBtn.addEventListener("click", () => {
  taggedTab.style.display = "none";
  postsTab.style.display = "grid";
  taggedBtn.style.borderBottom = "none";
  postsBtn.style.borderBottom = "1px solid #000000";
  postsIcon.style.opacity = "100%";
  taggedIcon.style.opacity = "50%";
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Random images in stories
var storyImages = document.getElementsByClassName("story-image");
const storyImagesArr = [...storyImages];

storyImagesArr.forEach((storyImg) => {
  storyImg.src = `https://picsum.photos/200?random=${getRandomInt(100)}`;
  console.log(storyImg.src);
});

// storyImages.array.forEach((element) => {});
// console.log(storyImages.length);

// function openTab(tabName) {
//   var i;
//   let tab = tabName === "posts" ? "taggedTab" : "postsTab";
//   ;
//
//   taggedTab.style.display = "none";
//   document.getElementById(tabName).style.display = "block";
// }
