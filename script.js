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
