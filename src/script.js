console.log("START");
fetch("src/roms.json")
.then(resp => resp.json())
.then(resp => resp.forEach(element => {
    console.log(element);
    document.getElementById("roms-list").innerHTML += `
    <li class="rom-element" onclick="selectGame(this)" romLocation="${element.romLocation}">
              <img  src="${element.romPreviewUrl}" alt="rom-preview" class="rom__preview">
              <div class="rom__description">
                <p class="rom__name">${element.romName}</p>
                <p class="rom__platform">${element.romPlatform}</p>
                <p class="rom__genre">${element.romGenre}</p>

              </div>
            </li>
    `
}));
function selectGame(element) {
    let gameFrame = document.getElementById("game");
    gameFrame.innerHTML = `
    <iframe src="https://www.retrogames.cc/embed/${element.getAttribute("romLocation")}.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
    `;
    console.log("start");
}