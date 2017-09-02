/* global google data */

const App = {
  data,
  keys: Object.keys(data),
  mainContent: '',
  countryPages: {},
  currentPage: 'home',
  cacheElements() {
    this.content = document.getElementById('content');
    this.home = document.getElementById('home');
    this.about = document.getElementById('about');
    this.map = document.getElementById('map');
    this.trade = document.getElementById('trade');
  },
  cacheTemplates() {
    this.countryTemplate = document.getElementById('country-template').innerHTML.trim();
    this.countryPageTemplate = document.getElementById('country-page-template').innerHTML.trim();
    this.postcardTemplate = document.getElementById('postcard-template').innerHTML.trim();
    this.aboutPageTemplate = document.getElementById('about-page').innerHTML.trim();
    this.tradePageTemplate = document.getElementById('trade-page').innerHTML.trim();
  },
  buildHomePage() {
    this.keys.forEach((country) => {
      this.mainContent += new Country(this.data[country]).template;
    });
  },
  renderCountries() {
    this.content.innerHTML = this.mainContent;
  },
  getClickedCountry(el) {
    if (el && !el.matches('.country')) {
      return this.getClickedCountry(el.parentElement);
    }

    return el;
  },
  handleClickedCountry(countryClicked) {
    this.currentPage = countryClicked.dataset.country;

    this.buildCountryPage();
    this.renderCountryPage();
    this.removeActiveClass();
  },
  buildCountryPage() {
    if (!this.countryPages[this.currentPage]) {
      this.countryPages[this.currentPage] = new CountryPage(this.data[this.currentPage]).template;
    }
  },
  renderCountryPage() {
    this.content.innerHTML = this.countryPages[this.currentPage];
  },
  goBackHome(target) {
    if (this.currentPage !== 'home') {
      this.renderCountries();
      this.removeActiveClass();
      this.addActiveClass(target);
      this.currentPage = 'home';
    }
  },
  removeActiveClass() {
    this.home.classList.remove('active');
    this.about.classList.remove('active');
    this.trade.classList.remove('active');
  },
  addActiveClass(target) {
    target.classList.add('active');
  },
  getCoordinates() {
    const cities = [];
    const coords = [];
    const keys = Object.keys(this.data);
    let i;

    for (i = 0; i < keys.length; i += 1) {
      this.data[keys[i]].cards.forEach((card) => {
        if (cities.indexOf(card.city) === -1) {
          coords.push(card.coord);
          cities.push(card.city);
        }
      });
    }

    return coords;
  },
  buildMap() {
    const coords = this.getCoordinates();
    const bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById('map'));

    coords.forEach((coord) => {
      const marker = new google.maps.Marker({
        position: coord,
        map: this.map,
      });

      bounds.extend(marker.getPosition());
    });

    this.map.fitBounds(bounds);
  },
  displayAbout(target) {
    if (this.currentPage !== 'about') {
      this.content.innerHTML = this.aboutPageTemplate;
      this.removeActiveClass();
      this.addActiveClass(target);
      this.currentPage = 'about';
    }
  },
  goToTrade(target) {
    this.content.innerHTML = this.tradePageTemplate;
    this.removeActiveClass();
    this.addActiveClass(target);
    this.currentPage = 'trade';
  },
  bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const countryClicked = this.getClickedCountry(target);

      if (countryClicked) {
        this.handleClickedCountry(countryClicked);
      } else if (target.id === 'home' || target.id === 'title') {
        e.preventDefault();
        this.goBackHome(this.home);
      } else if (target.id === 'about') {
        e.preventDefault();
        this.displayAbout(this.about);
        this.buildMap();
      } else if (target.id === 'trade') {
        e.preventDefault();
        this.goToTrade(target);
      }
    });
  },
  init() {
    this.cacheElements();
    this.cacheTemplates();
    this.bindEvents();
    this.buildHomePage();
    this.renderCountries();
  },
};

class Country {
  constructor(country) {
    this.name = country.name;
    this.code = country.code;
    this.cards = country.cards;
    this.template = App.countryTemplate;
    this.buildCountryHTML();
  }

  buildCountryHTML() {
    this.template = this.template.replace(/{{COUNTRY-DATA}}/g, this.name.toLowerCase());
    this.template = this.template.replace(/{{COUNTRY}}/g, this.name);
    this.template = this.template.replace(/{{CODE}}/g, this.code);
  }
}

class CountryPage {
  constructor(country) {
    this.name = country.name;
    this.capital = country.capital;
    this.population = country.population;
    this.cards = country.cards;
    this.template = App.countryPageTemplate;
    this.buildCountryPageHTML();
  }

  buildCountryPageHTML() {
    this.template = this.template.replace(/{{COUNTRY}}/g, this.name);
    this.template = this.template.replace(/{{CAPITAL}}/g, this.capital);
    this.template = this.template.replace(/{{POPULATION}}/g, this.population);
    this.template = this.template.replace(/{{POSTCARDS}}/g, this.buildPostcards());
  }

  buildPostcards() {
    let postCardsHTML = '';

    this.cards.forEach((card) => {
      postCardsHTML += new Postcard(card).template;
    });

    return postCardsHTML;
  }
}

class Postcard {
  constructor(card) {
    this.number = card.number;
    this.city = card.city;
    this.front = card.images.front;
    this.back = card.images.back;
    this.template = App.postcardTemplate;
    this.buildPostcardHTML();
  }

  buildPostcardHTML() {
    this.template = this.template.replace(/{{CARD-NUMBER}}/g, this.number);
    this.template = this.template.replace(/{{CITY}}/g, this.city);
    this.template = this.template.replace(/{{FRONT}}/g, this.front);
    this.template = this.template.replace(/{{BACK}}/g, this.back);
  }
}

App.init();
