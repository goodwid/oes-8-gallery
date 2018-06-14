#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const inputDir = process.argv[2];

function restoreSpace(str) {
  return str.split('_').join(' ');
}
const files = fs.readdirSync(inputDir, {encoding: 'utf-8'});
const out = files.map(file => {
  let [artist = '', title = ''] = file.slice(0,-4).split('-');
  
  return {
    artist: restoreSpace(artist),
    title: restoreSpace(title),
    src: file 
  };
});

console.log(JSON.stringify(out, null, 2));
