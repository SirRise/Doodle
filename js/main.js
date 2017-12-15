import Doodle from './doodle.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillStyle = '#fff';
context.fillRect(0, 0, canvas.width, canvas.height);

const doodle = new Doodle(240, 20);
doodle.draw(context);