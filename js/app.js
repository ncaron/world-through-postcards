var App = {
  data: data,
  keys: Object.keys(this.data),
  mainContent: '',
  countryPages: {},
  currentPage: 'home',
  cacheElements: function() {
    this.content = document.getElementById('content');
    this.home = document.getElementById('home');
    this.about = document.getElementById('about');
    this.map = document.getElementById('map');
  },
  cacheTemplates: function() {
    this.countryTemplate = document.getElementById('country-template').innerHTML.trim();
    this.countryPageTemplate = document.getElementById('country-page-template').innerHTML.trim();
    this.postcardTemplate = document.getElementById('postcard-template').innerHTML.trim();
    this.aboutPageTemplate = document.getElementById('about-page').innerHTML.trim();
  },
  replaceCountryHTML: function(countryTemplate, country) {
    countryTemplate = countryTemplate.replace(/{{COUNTRY-DATA}}/g, country);
    countryTemplate = countryTemplate.replace(/{{COUNTRY}}/g, this.data[country].name);
    countryTemplate = countryTemplate.replace(/{{CODE}}/g, this.data[country].code);

    return countryTemplate;
  },
  buildHomePage: function() {
    this.keys.forEach(function(country) {
      this.mainContent += this.replaceCountryHTML(this.countryTemplate, country);
    }.bind(this));
  },
  renderCountries: function() {
    this.content.innerHTML = this.mainContent;
  },
  getClickedCountry: function(el) {
    if (el && !el.matches('.country')) {
      return this.getClickedCountry(el.parentElement);
    } else {
      return el;
    }
  },
  handleClickedCountry: function(countryClicked) {
    this.currentPage = countryClicked.dataset.country;

    this.buildCountryPage();
    this.renderCountryPage();
    this.removeActiveClass();
  },
  buildCountryPage: function() {
    if (!this.countryPages[this.currentPage]) {
      this.countryPages[this.currentPage] = this.replaceCountryPageHTML(this.countryPageTemplate, this.currentPage);
    }
  },
  buildPostcards: function() {
    var postCardsHTML = '';

    this.data[this.currentPage].cards.forEach(function(card) {
      postCardsHTML += this.replacePostcardHTML(this.postcardTemplate, card);
    }.bind(this));

    return postCardsHTML;
  },
  replacePostcardHTML: function(postcardTemplate, card) {
    postcardTemplate = postcardTemplate.replace(/{{CARD-NUMBER}}/g, card.number);
    postcardTemplate = postcardTemplate.replace(/{{CITY}}/g, card.city);
    postcardTemplate = postcardTemplate.replace(/{{FRONT}}/g, card.front);
    postcardTemplate = postcardTemplate.replace(/{{BACK}}/g, card.back);

    return postcardTemplate;
  },
  replaceCountryPageHTML: function(countryPageTemplate, country) {
    countryPageTemplate = countryPageTemplate.replace(/{{COUNTRY}}/g, this.data[country].name);
    countryPageTemplate = countryPageTemplate.replace(/{{CAPITAL}}/g, this.data[country].capital);
    countryPageTemplate = countryPageTemplate.replace(/{{POPULATION}}/g, this.data[country].population);
    countryPageTemplate = countryPageTemplate.replace(/{{POSTCARDS}}/g, this.buildPostcards());

    return countryPageTemplate;
  },
  renderCountryPage: function() {
    this.content.innerHTML = this.countryPages[this.currentPage];
  },
  goBackHome: function(target) {
    if (this.currentPage !== 'home') {
      this.renderCountries();
      this.removeActiveClass();
      this.addActiveClass(target);
      this.currentPage = 'home';
    }
  },
  removeActiveClass: function() {
    this.home.classList.remove('active');
    this.about.classList.remove('active');
  },
  addActiveClass: function(target) {
    target.classList.add('active');
  },
  getCoordinates: function() {
    var cities = [];
    var coords = [];
    var keys = Object.keys(this.data);
    var i;

    for (i = 0; i < keys.length; i += 1) {
      this.data[keys[i]].cards.forEach(function(card) {
        if (cities.indexOf(card.city) === -1) {
          coords.push(card.coord);
          cities.push(card.city);
        }
      });
    }

    return coords;
  },
  buildMap: function() {
    var myLatLng = {lat: 36.9264582, lng: 7.752535200000011};
    var coords = this.getCoordinates();
    var bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(document.getElementById('map'));

    coords.forEach(function(coord) {
      new google.maps.Marker({
        position: coord,
        map: this.map,
      });

      bounds.extend(coord);
    }.bind(this));

    this.map.fitBounds(bounds);
  },
  displayAbout: function(target) {
    if (this.currentPage !== 'about') {
      this.content.innerHTML = this.aboutPageTemplate;
      this.removeActiveClass();
      this.addActiveClass(target);
      this.currentPage = 'about';
    }
  },
  bindEvents: function() {
    document.addEventListener('click', function(e) {
      var target = e.target;
      var countryClicked = this.getClickedCountry(target);

      if (countryClicked) {
        this.handleClickedCountry(countryClicked);
      } else if (target.id === 'home' || target.id === 'title') {
        e.preventDefault();
        this.goBackHome(this.home);
      } else if (target.id === 'about') {
        e.preventDefault();
        this.displayAbout(this.about);
        this.buildMap();
      }
    }.bind(this));
  },
  init: function() {
    this.cacheElements();
    this.cacheTemplates();
    this.bindEvents();
    this.buildHomePage();
    this.renderCountries();
  }
};

App.init();