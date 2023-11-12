import save from './../img/support/save_children.png';
import savemin from './../img/support/save_children_min.png';
import hope from './../img/support/hope.png';
import hopemin from './../img/support/hope_min.png';
import un from './../img/support/u24.png';
import unmin from './../img/support/u24_min.png';
import imc from './../img/support/imc.png';
import imcmin from './../img/support/imc_min.png';
import msf from './../img/support/msf.png';
import msfmin from './../img/support/msf_min.png';
import razom from './../img/support/razom.png';
import razommin from './../img/support/razom_min.png';
import aah from './../img/support/aah.png';
import aahmin from './../img/support/aah_min.png';
import world from './../img/support/world_vision.png';
import worldmin from './../img/support/world_vision_min.png';
import prytula from './../img/support/prytula.png';
import prytulamin from './../img/support/prytula_min.png';

const fonds = [
  {
    id: '01',
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save,
    minimg: savemin,
  },
  {
    id: '02',
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    minimg: hopemin,
  },
  {
    id: '03',
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: un,
    minimg: unmin,
  },
  {
    id: '04',
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: imc,
    minimg: imcmin,
  },
  {
    id: '05',
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: msf,
    minimg: msfmin,
  },
  {
    id: '06',
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    minimg: razommin,
  },
  {
    id: '07',
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: aah,
    minimg: aahmin,
  },
  {
    id: '08',
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: world,
    minimg: worldmin,
  },
  {
    id: '09',
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
    minimg: prytulamin,
  },
];

const arrowBtn = document.querySelector('.support-more');
const listWrapper = document.querySelector('.support-list');
const container = document.querySelector('.support-second-wrapper');

// Функція, що створює розмітку картики підтримки України в donates.html

export default function markupDonates(fonds) {
  // Перевірка чи існує listWrapper
  if (!listWrapper) {
    console.error('Element with class "support-list" not found.');
    return;
  }

  // Створює всі li
  const itemsDonates = fonds
    .map(({ id, title, url, img, minimg }) => {
      console.log('img:', img);
      return `<li class="support-item">
      <a class="support-link" href="${url}" 
        rel="noopener noreferrer">
        <p class="support-number">${id}</p>
        <img class="support-logo" 
        srcset="${minimg} 1x,
        ${img} 2x"
        src="${img}" 
        alt="${title}"/> 
      </a>
    </li>`;
    })
    .join('');
  listWrapper.insertAdjacentHTML('beforeend', itemsDonates);
}

markupDonates(fonds);

// Функція , що додає чи знімає клас на container та arrowBtn, що стилями відкриває залишок списку і розвертає стрілку

arrowBtn.addEventListener('click', onClick);
function onClick() {
  container.classList.toggle('open');
  arrowBtn.classList.toggle('isopen');
}
