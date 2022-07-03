const button = document.getElementById("button");
const form = document.getElementById("memeForm");

button.addEventListener("click", () => {
  var imageurl = document.getElementById("imgUrlInput").value;
  var img = document.createElement('img');
    img.src = imageurl;
    img.id = "icon";

  var topTextInput = document.getElementById("topTextInput").value;
  let textDisplayTop=document.createElement("span")
    textDisplayTop.id = "textTop"
    textDisplayTop.style.padding="10px"
    textDisplayTop.innerHTML= topTextInput

  var bottomTextInput = document.getElementById("bottomTextInput").value;
  let textDisplayBot=document.createElement("span")
    textDisplayBot.id = "textBot"
    textDisplayBot.style.padding="10px"
    textDisplayBot.innerHTML= bottomTextInput

  let CountDiv = document.createElement('div')
    CountDiv.id= "imgdiv"
    CountDiv.style.position = 'relative';
    CountDiv.append(img)
    CountDiv.append(textDisplayTop)
    CountDiv.append(textDisplayBot)

  var block = document.getElementById("memes");
  block.appendChild(CountDiv);

  block.addEventListener('click', function handleClick(event) {
    console.log(event.target);
    event.target.parentNode.remove();

  });
});

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

/*
let meme = document.getElementById("memes")

meme.addEventListener('click', function handleClick(event) {
  console.log(event.target);

  event.target.remove();
});

/*let image;

button.addEventListener("click", () => {
  image = new Image();
  image.src = imgUrlInput.value;

  image.addEventListener("load", () => {
    makeMeme(canvas, image, topTextInput.value, bottomTextInput.value);
  }, { once: true });
});


function makeMeme(canvas, image, topText, bottomText) {

  const ctx = canvas.getContext("2d");
  const width = image.width/6;
  const height = image.height/6;
  const fontSize = Math.floor(width/10);
  const yOffset = height/25;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);

  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize/4);
  ctx.fillStyle = "white";
  ctx.lineJoin = "round";
  ctx.font = "10px sans-serif";

  ctx.textBaseline = "top";
  ctx.strokeText(topText, width/3, yOffset);
  ctx.fillText(topText, width/3, yOffset);

  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width/3, height - yOffset);
  ctx.fillText(bottomText, width/3, height - yOffset);
}
*/