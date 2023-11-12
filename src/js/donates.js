const fonds = [
  {
    id: '01',
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/support/save_children.png',
    minimg: './img/support/save_children_min.png',
  },
  {
    id: '02',
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/support/hope.png',
    minimg: './img/support/hope.png_min.png',
  },
  {
    id: '03',
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/support/u24.png',
    minimg: './img/support/u24_min.png',
  },
  {
    id: '04',
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/support/imc.png',
    minimg: './img/support/imc_min.png',
  },
  {
    id: '05',
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/support/msf.png',
    minimg: './img/support/msf_min.png',
  },
  {
    id: '06',
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/support/razom.png',
    minimg: './img/support/razom_min.png',
  },
  {
    id: '07',
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/support/aah.png',
    minimg: './img/support/aah_min.png',
  },
  {
    id: '08',
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/support/world_vision.png',
    minimg: './img/support/world_vision_min.png',
  },
  {
    id: '09',
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/support/prytula.png',
    minimg: './img/support/prytula_min.png',
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
