// ==UserScript==
// @name             IMDB links
// @description      Links to torrents and trakt directly from imdb page
// @license          MIT
// @include          https://www.imdb.com/*
// @version          1.1.1
// @updateURL        https://github.com/danielvigaru/misc/raw/main/userscripts/IMDb/imdb.js
// @grant            none
// ==/UserScript==

function getIMDBid() {
  let regexImdbNum = /\/title\/tt(\d{7})\//;
  let id = regexImdbNum.exec(document.location);
  return id[1];
}

var movieId = getIMDBid();

if (movieId) {

  // RARBG
  let rarbg = document.createElement('div');
  rarbg.innerHTML = '<a id="rarbgSearchButton">RARBG</a>';
  rarbg.style.display = "inline-block";
  rarbg.style.position = "absolute";
  rarbg.style.left = "1em";
  rarbg.style.top = "4.5em";
  rarbg.style.zIndex = '9999';

  document.body.append(rarbg);

  let icon_rarbg = document.getElementById('rarbgSearchButton');
  icon_rarbg.style.background = '#F5C518';
  icon_rarbg.style.color = 'black';
  icon_rarbg.style.fontWeight = '800';
  icon_rarbg.style.padding = '5px';
  icon_rarbg.style.borderRadius = '7px';
  icon_rarbg.style.textDecoration = 'none';
  icon_rarbg.style.fontSize = '0.8em';
  icon_rarbg.style.fontFamily = "'Roboto','Helvetica','Arial',sans-serif";
  icon_rarbg.href = 'https://rarbgmirror.org/torrents.php?imdb=' + movieId;
  icon_rarbg.target = '_blank';

  // filelist
  let filelist = document.createElement('div');
  filelist.innerHTML = '<a id="filelistSearchButton">FileList</a>';
  filelist.style.display = "inline-block";
  filelist.style.position = "absolute";
  filelist.style.left = "5em";
  filelist.style.top = "4.5em";
  filelist.style.zIndex = '9999';

  document.body.append(filelist);

  let icon_filelist = document.getElementById('filelistSearchButton');
  icon_filelist.style.background = '#F5C518';
  icon_filelist.style.color = 'black';
  icon_filelist.style.fontWeight = '800';
  icon_filelist.style.padding = '5px';
  icon_filelist.style.borderRadius = '7px';
  icon_filelist.style.textDecoration = 'none';
  icon_filelist.style.fontSize = '0.8em';
  icon_filelist.style.fontFamily = "'Roboto','Helvetica','Arial',sans-serif";
  icon_filelist.href = 'https://filelist.io/browse.php?search=tt' + movieId;
  icon_filelist.target = '_blank';

  // trakt
  let trakt = document.createElement('div');
  trakt.innerHTML = '<a id="traktSearchButton">Trakt</a>';
  trakt.style.display = "inline-block";
  trakt.style.position = "absolute";
  trakt.style.left = "9em";
  trakt.style.top = "4.5em";
  trakt.style.zIndex = '9999';

  document.body.append(trakt);

  let icon_trakt = document.getElementById('traktSearchButton');
  icon_trakt.style.background = '#F5C518';
  icon_trakt.style.color = 'black';
  icon_trakt.style.fontWeight = '800';
  icon_trakt.style.padding = '5px';
  icon_trakt.style.borderRadius = '7px';
  icon_trakt.style.textDecoration = 'none';
  icon_trakt.style.fontSize = '0.8em';
  icon_trakt.style.fontFamily = "'Roboto','Helvetica','Arial',sans-serif";
  icon_trakt.href = 'https://trakt.tv/search/imdb?q=tt' + movieId;
  icon_trakt.target = '_blank';
}