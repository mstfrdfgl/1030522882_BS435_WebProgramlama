let hak=2;
let gameover=false;
let random=Math.floor(Math.random()*3);

export function clickAnimals(image){
    if(image===random){
        document.getElementById('img'+image).src='kedi.jpg'
        document.getElementById('kazandiId').style.display='inline'
        gameover=true;
    }
    else{
        document.getElementById('img'+image).src='kopek.jpg'
        hak--;
    }
    if(hak===0){
        document.getElementById("yenildiId").style.display="inline"
    }
}
export function reload() {
    location.reload();
}
