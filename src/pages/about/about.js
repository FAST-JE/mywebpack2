import 'normalize.css';
import './about.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['Главная','Обо мне','Блог'], 'menu');
document.body.appendChild(menu);

console.log('x');