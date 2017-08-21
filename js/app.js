var App = {
  data: data,
  keys: Object.keys(this.data),
  mainContent: '',
  cacheElements: function() {
    this.content = document.getElementById('content');
  },
  cacheTemplates: function() {
    this.countryTemplate = document.getElementById('country-template').innerHTML.trim();
  },
  replaceCountryHTML: function(countryTemplate, country) {
    countryTemplate = countryTemplate.replace(/{{COUNTRY}}/g, data[country].name);
    countryTemplate = countryTemplate.replace(/{{CODE}}/g, data[country].code);

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
  init: function() {
    this.cacheElements();
    this.cacheTemplates();
    this.buildHomePage();
    this.renderCountries();
  }
};

App.init();