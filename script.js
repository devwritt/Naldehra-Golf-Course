// Live Time

function updateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("current-time").innerHTML =
        "🕒 " + time;

}

setInterval(updateTime, 1000);

updateTime();


// Current Date

const today = new Date();

const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

document.getElementById("current-date").innerHTML =
    "📅 " + today.toLocaleDateString('en-IN', dateOptions);
async function getWeather() {

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=31.107&longitude=77.166&current=temperature_2m"
        );

        const data = await response.json();

        document.getElementById("temperature").innerHTML =
            "🌡 " + data.current.temperature_2m + "°C";

    }
    catch(error){

        document.getElementById("temperature").innerHTML =
            "🌡 Weather unavailable";

    }

}

getWeather();
const galleryImages = [

    "11.jpeg",
    "img/4.jpeg",
    "img/1.jpeg",
    "img/22.jpeg",
    "img/3.jpeg",
    "img/25.jpeg",

];

let currentImage = 0;

function openLightbox(index){

    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
        galleryImages[currentImage];
}

function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){

    currentImage += step;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;
    }

    if(currentImage >= galleryImages.length){

        currentImage = 0;
    }

    document.getElementById("lightbox-img").src =
        galleryImages[currentImage];
}
document.getElementById("lightbox").addEventListener("click", function(e){

    if(e.target === this){

        closeLightbox();
    }

});
document.addEventListener("keydown", function(e){

    if(document.getElementById("lightbox").style.display === "flex"){

        if(e.key === "ArrowRight"){

            changeImage(1);
        }

        if(e.key === "ArrowLeft"){

            changeImage(-1);
        }

        if(e.key === "Escape"){

            closeLightbox();
        }

    }

});
