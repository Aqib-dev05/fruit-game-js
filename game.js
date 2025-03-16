let scoreDisplayer = document.querySelector("#span");
let container = document.querySelector(".inner");
let btn = document.querySelector("button");
let cover = document.querySelector(".cover");
let score = 0;
let miss = 3;

//event listner
container.addEventListener("mouseover", (e) => {
  if (e.target.nodeName == "IMG") {
    score++;
    scoreDisplayer.innerText = score;
    e.target.remove();
  }
});

//function
let address = [
  "pics/straw.png",
  "pics/sun.png",
  "pics/apple.png",
  "pics/kivi.png",
  "pics/mango.png",
  "pics/Anaar.png",
  "pics/banana.png",
  "pics/waterMelon.png",
];

function createImages() {
  let pic = document.createElement("img");
  //random address
  let rand = Math.floor(Math.random() * 8);
  let choice = address[rand];
  //strawberry size
  if (choice == "pics/straw.png") {
    pic.style.scale = 1;
  }
  if (choice == "pics/banana.png") {
    pic.style.transform = `rotate(-80deg)`;
  }
  pic.setAttribute("src", choice);

  //random position
  let pos = Math.floor(Math.random() * 90);
  pic.style.left = pos + "%";
  //appending children
  container.appendChild(pic);
}

// button functionality
btn.addEventListener("click", () => {
  setTimeout(finish, 100);
});
function finish() {
  btn.remove();
  cover.remove();
  // set interval
  setInterval(createImages, 600);
}
