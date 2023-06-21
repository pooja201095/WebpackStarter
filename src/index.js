import generateDadJoke from './generateJoke';
import './styles/main.scss'
import laughing from './assets/laughing.svg';


let laughingImg = document.getElementById('laughImg');
laughingImg.src = laughing;

let btn = document.getElementById('jokebtn');
btn.addEventListener('click',generateDadJoke);

generateDadJoke();