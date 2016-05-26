'use strict';

const app = require('./app');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
  });
};

module.exports = {
  index,
  show,
};
