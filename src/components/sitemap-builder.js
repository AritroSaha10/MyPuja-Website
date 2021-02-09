const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
//Import our routes
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;
(
    new Sitemap(router)
        .build('https://my-puja-production.web.app')
        .save('./sitemap.xml')
);