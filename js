{
  'use strict';

  const select = {
    templateOf: {
      app: '#template-app',
    },
    containerOf: {
      app: '#app',
    }
  };

  const templates = {
    app: Handlebars.compile(document.querySelector(select.templateOf.app).innerHTML),
  };

  class App {
    constructor(){
      const thisApp = this;
      
      thisApp.getElements();
      thisApp.render();
    }

    getElements() {
      const thisApp = this;
      
      thisApp.dom = {}
      thisApp.dom.wrapper = document.querySelector(select.containerOf.app);
    }

    render() {
      const thisApp = this;
      
      const generatedHTML = templates.app();
      thisApp.dom.wrapper.innerHTML = generatedHTML;
    }
  }

  const app = new App();
}