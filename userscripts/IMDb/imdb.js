// ==UserScript==
// @name             IMDB links
// @description      Links to torrents and trakt directly from imdb page
// @license          MIT
// @include          https://www.imdb.com/*
// @version          2.2.0
// @updateURL        https://github.com/danielvigaru/misc/raw/main/userscripts/IMDb/imdb.js
// @grant            none
// ==/UserScript==

function getIMDBid() {
  let regexImdbNum = /\/title\/tt(?:0*)(\d{7})\//;
  let id = regexImdbNum.exec(document.location);
  return id[1];
}

window.onload = () => {

  let movieId = getIMDBid();

  if (movieId) {

    let linkConstructor = "<a style='text-decoration:none; color:black;' target='_blank'"
    let linkRarbg = `${linkConstructor} href='https://rarbgmirror.org/torrents.php?imdb=tt${movieId}'">RARBG</a>`
    let linkFilelist = `${linkConstructor} href='https://filelist.io/browse.php?search=tt${movieId}'">FileList</a>`
    let linkTrakt = `${linkConstructor} href='https://trakt.tv/search/imdb?q=tt${movieId}'">Trakt</a>`

    let links = document.createElement('div');
    links.innerHTML = `${linkTrakt} | ${linkFilelist} | ${linkRarbg}`
    links.style.fontFamily = "'Roboto','Helvetica','Arial',sans-serif";
    links.style.padding = '0.5em 1em';

    let banner = document.querySelector('.banner');
    banner.innerHTML = ''; // clear the content of the banner
    banner.appendChild(links);

  }
}