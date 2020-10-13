"use strict";

var _tsyringe = require("tsyringe");

var _HandlebarMailTemplateProvider = _interopRequireDefault(require("./implementations/HandlebarMailTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  handlebars: _HandlebarMailTemplateProvider.default
};

_tsyringe.container.registerSingleton('MailTemplateProvider', providers.handlebars);