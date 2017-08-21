var App = {
  data: data,
  keys: Object.keys(this.data),
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
  handleCountryRendering: function(country) {
    var countryTemplate = this.replaceCountryHTML(this.countryTemplate, country);

    this.render(this.replaceCountryHTML(this.countryTemplate, country));
  },
  render: function(countryTemplate) {
    this.content.innerHTML += countryTemplate;
  },
  init: function() {
    this.cacheElements();
    this.cacheTemplates();
    this.keys.forEach(this.handleCountryRendering.bind(this));
  }
};

App.init();