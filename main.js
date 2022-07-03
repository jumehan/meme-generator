const button = document.getElementById("button");
const form = document.getElementById("memeForm");

button.addEventListener("click", () => {
  var imageurl = document.getElementById("imgUrlInput").value;
  var img = document.createElement('img');
    img.src = imageurl;
    img.id = "icon";

  var topTextInput = document.getElementById("topTextInput").value;
  let textDisplayTop = document.createElement("span")
    textDisplayTop.id = "textTop"
    textDisplayTop.style.padding="10px"
    textDisplayTop.innerHTML= topTextInput

  var bottomTextInput = document.getElementById("bottomTextInput").value;
  let textDisplayBot = document.createElement("span")
    textDisplayBot.id = "textBot"
    textDisplayBot.style.padding="10px"
    textDisplayBot.innerHTML= bottomTextInput

  var deleteMsg = document.createElement("span")
    deleteMsg.id = "deleteMsg"
    deleteMsg.innerHTML = "Click to delete"
    deleteMsg.style.display = 'none'


  let CountDiv = document.createElement('div')
    CountDiv.id= "imgdiv"
    CountDiv.style.position = 'relative';
    CountDiv.append(img)
    CountDiv.append(textDisplayTop)
    CountDiv.append(textDisplayBot)
    CountDiv.append(deleteMsg)

  var block = document.getElementById("memes");
  block.appendChild(CountDiv);

  block.addEventListener('click', function handleClick(event) {
    console.log(event.target);
    event.target.parentNode.remove();
  });

  CountDiv.addEventListener('mouseover', function handleMouseOver() {
    deleteMsg.style.display = 'block';
  });
  CountDiv.addEventListener('mouseout', function handleMouseOut() {
    deleteMsg.style.display = 'none';
  });

  form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
  });
});
