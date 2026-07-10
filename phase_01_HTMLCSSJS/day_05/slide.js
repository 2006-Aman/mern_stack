let arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKePsmX_2quCEg8NVzfP2nzpSOF0bWLN5bGxBGdyMacQltot-Ut_Mbkod&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0WbgWmVVOlxom7r1S2W0BaO7vBwzKyxLwdE3uKGd695E6e93c6URbmS8&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfb2ahAaICQGxfZ4AzV-fMPe3STyXYRhetXZoLDI3fiNX_pCJPS2B7YQna&s=10",
    "https://i.etsystatic.com/13513569/r/il/1e8178/1933195953/il_570xN.1933195953_9uge.jpg"


]

let container = document.getElementById("container");
let movie = document.createElement("img");
movie.setAttribute("src", arr[0]);
let index = 0;
function handleImage(){
    movie.setAttribute("src", arr[index]);
    container.append(movie);
    index++;
    if(index == arr.length){
        index = 0;
    }
}
setInterval(handleImage, 2000);   
container.append(movie);