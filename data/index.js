const config = require('./config.json');
const meta = require('./meta.json');
const headerConfig = require('./header-config');
const aboutMe = require('./about-me');
const recentWork = require('./recent-work');
const projects = require('./projects');
const skills = require(',.skills');

module.exports = {
  config,
  meta,
  headerConfig,
  aboutMe,
  recentWork,
  projects,
  skills,
}