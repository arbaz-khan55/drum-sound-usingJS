const band = document.querySelector("#band");

const arr = ["crash", "kick", "snare", "tom"];

arr.forEach((asset)=>{
    const box = document.createElement("div");
    const h2 = document.createElement("h2");
    box.classList.add("box");
    box.style.backgroundImage ="url(assets/"+asset+".png)";
    h2.innerText = asset;

    const audio =document.createElement("audio");
    audio.setAttribute("src","assets/"+asset+".mp3");

    box.addEventListener("click",()=>{
        audio.play();
    });

    band.append(box);
    box.append(h2);
})