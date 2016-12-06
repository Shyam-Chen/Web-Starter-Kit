// Third party
import _template from 'lodash-es/template';
import _forEach from 'lodash-es/forEach';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';
import { site } from '../../utils';

// Assets
import jsBarChart from '../../assets/datas/js-bar-chart.json';

// About
import template from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { _forEach, style } };

const commom = () => {
  new Chart(document.querySelector('#js-bar-chart'), {
    type: 'bar',
    data: jsBarChart,
    options: {
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
      title: { display: true, text: 'Vanilla JS' },
    }
  });
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_EN = () => {
  site('en');
  document.querySelector('#app').innerHTML = LAYOUT_EN;
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_EN);
  document.querySelector('#zh').onclick = () => page.redirect('/zh/about');
  commom();
};

export const ABOUT_ZH = () => {
  site('zh');
  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_ZH);
  document.querySelector('#en').onclick = () => page.redirect('/en/about');
  commom();
};
