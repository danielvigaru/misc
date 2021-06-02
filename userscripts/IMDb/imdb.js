// ==UserScript==
// @name             IMDB links
// @description      Links to torrents and trakt directly from imdb page
// @license          MIT
// @include          https://www.imdb.com/*
// @version          2.0.0
// @updateURL        https://github.com/danielvigaru/misc/raw/main/userscripts/IMDb/imdb.js
// @grant            none
// ==/UserScript==

function getIMDBid() {
  let regexImdbNum = /\/title\/tt(?:0*)(\d{7})\//;
  let id = regexImdbNum.exec(document.location);
  return id[1];
}

let movieId = getIMDBid();

if (movieId) {

  let linkConstructor = "<a style='text-decoration:none; color:black;' target='_blank'"
  let linkRarbg = `${linkConstructor} href='https://rarbgmirror.org/torrents.php?imdb=tt${movieId}'">RARBG</a>`
  let linkFilelist = `${linkConstructor} href='https://filelist.io/browse.php?search=tt${movieId}'">FileList</a>`
  let linkTrakt = `${linkConstructor} href='https://trakt.tv/search/imdb?q=tt${movieId}'">Trakt</a>`

  let links = document.createElement('div');
  links.innerHTML = `${linkRarbg} | ${linkFilelist} | ${linkTrakt}`
  links.style.display = "block";
  links.style.position = "absolute";
  links.style.left = "1rem";
  links.style.top = "4.6rem";
  links.style.fontFamily = "'Roboto','Helvetica','Arial',sans-serif";
  links.style.zIndex = '9999';

  document.body.appendChild(links);

}