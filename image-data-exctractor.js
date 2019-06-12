#!/usr/bin/env node

const fs = require('fs');

const inputDir = process.argv[2];

function restoreSpace(str) {
  return str.split('_').join(' ');
}
const files = fs.readdirSync(inputDir, {  encoding: 'utf-8'  });
const out = files.map(file => {
  let [artist = '', title = '', view = '', media = ''] = file.slice(0, -4).split('-');
  if (!media) {
    media = view;
    view = '';
  }
  return {
    artist: restoreSpace(artist),
    title: restoreSpace(title),
    media: restoreSpace(media),
    view: restoreSpace(view),
    src: file, 
  };
});

// eslint-disable-next-line no-console
console.log(JSON.stringify(out, null, 2));
