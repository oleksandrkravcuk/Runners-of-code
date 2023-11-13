// імпорт логотипів мереж
// import gitico from './../img/git.svg';
// import liinico from './../img/linkin.svg';
// console.log(liinico);
// console.log(gitico);

// масив членів команди в алфавітному порядку
const team = [
  {
    id: '01',
    name: 'Anna Radchenko',
    git: 'https://github.com/AmmelyStar',
    liin: 'https://www.linkedin.com/in/anna--radchenko/',
  },
  {
    id: '02',
    name: 'Dima Sudenkov',
    git: 'https://github.com/DimaSudenkov',
    liin: 'https://ua.linkedin.com/in/dima-sudenkov',
  },
  {
    id: '03',
    name: 'Denys Maksymchuk',
    git: 'https://github.com/Denys90',
    liin: 'https://www.linkedin.com/in/denys-maksymchuk-57273726a/',
  },
  {
    id: '04',
    name: 'Olga Tenison',
    git: 'https://github.com/olgatenison',
    liin: 'https://www.linkedin.com/in/olga-tenison/',
  },
  {
    id: '05',
    name: 'Oleksii Katsal',
    git: 'https://github.com/alkatsalex',
    liin: 'http://linkedin.com/in/alkatsalex/',
  },
  {
    id: '06',
    name: 'Oleksandr Kravchuk',
    git: 'https://github.com/oleksandrkravcuk',
    liin: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D1%80%D0%B0%D0%B2%D1%87%D1%83%D0%BA-73654729a/',
    role: 'teamlead',
  },
  {
    id: '07',
    name: 'Kateryna Slatina',
    git: 'https://github.com/KaterynaSlatina',
    liin: 'https://www.linkedin.com/in/kateryna-slatina-28a9811a2/',
    role: 'scram master',
  },
  {
    id: '08',
    name: 'Valentyna Hotsa',
    git: 'https://github.com/ValentinaHotsa',
    liin: 'https://www.linkedin.com/in/valentyna-hotsa-56613829b/',
  },
  {
    id: '09',
    name: 'Volodymyr Mikhnov',
    git: 'https://github.com/Vova445',
    liin: 'https://www.linkedin.com/in/volodymyr-mikhnov-474969274',
  },
];

const ulTeam = document.querySelector('.team-list');

export default function markupTeam(team) {
  // Перевірка чи існує team
  if (!ulTeam) {
    console.error('Element with class "team-list" not found.');
    return;
  }

  // Створює всі li в team
  const itemsTeam = team
    .map(({ name, git, liin }) => {
      return `<li class="team-item">

       

      <a href="${git}" rel="noopener noreferrer"
        class="team-name">${name}</a>

    </li>`;
    })
    .join('');
  ulTeam.innerHTML += itemsTeam;
}

markupTeam(team);
