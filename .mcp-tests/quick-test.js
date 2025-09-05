#!/usr/bin/env node
// Script de test rapide pour ce projet
const { testResponsive } = require('../MCP-Toolkit/scripts/screenshots/responsive-test.js');

const config = require('./config/project.json');
const url = process.argv[2] || config.testing.url;

console.log('🧪 Test rapide du projet: ' + config.name);
console.log('🌐 URL: ' + url);

testResponsive(url, {
  devices: config.testing.devices,
  outputDir: './.mcp-tests/results/screenshots'
}).catch(console.error);
