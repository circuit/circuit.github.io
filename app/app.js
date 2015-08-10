/*
Copyright (c) 2015 Unify Inc. All rights reserved.
*/

(function(document) {
  'use strict';

  // Reference to our app
  var app = document.querySelector('#app');
  var api, cacheApi;

  app.properties = {
    pageTitle: String
  }

  app.addEventListener('dom-change', function() {
    console.log('DOM is ready');
  });

  window.addEventListener('WebComponentsReady', function() {
    console.log('WebComponentsReady raised');
  });

  app.menuSelect = function(e) {
    this.$.drawerPanel.togglePanel();
  }

})(document);