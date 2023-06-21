import axios from "axios";

function generateDadJoke() {
    const config = {
        headers:{
            Accept:'application/json'
        }
    };

    axios.get('https://icanhazdadjoke.com/',config).then((res) => {
        let jokeSection = document.getElementById('joke');
        jokeSection.innerHTML = res.data.joke;
    }
    );

}

export default generateDadJoke;