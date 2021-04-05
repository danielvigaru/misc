// ==UserScript==
// @name             IMDB links
// @description      Links to torrents and trakt directly from imdb page
// @license          MIT
// @include          https://www.imdb.com/*
// @version          1.0
// @grant            none
// ==/UserScript==

function getIMDBid() {
  var regexImdbNum = /\/title\/tt(\d{7})\//;
  id = regexImdbNum.exec(document.location);
  return id[1];
}

var movieId = getIMDBid();

if (movieId) {

  // RARBG
  let rarbg = document.createElement('div');
  rarbg.innerHTML = '<a id="rarbgSearchButton">RARBG</a>';
  rarbg.style.display = "inline-block";
  rarbg.style.position = "fixed";
  rarbg.style.left = "1%";
  rarbg.style.top = "10%";
  rarbg.style.zIndex = '9999';

  document.body.append(rarbg);

  let icon_rarbg = document.getElementById('rarbgSearchButton');
  icon_rarbg.style.background = 'white';
  icon_rarbg.style.color = 'black';
  icon_rarbg.style.fontWeight = '800';
  icon_rarbg.style.padding = '5px';
  icon_rarbg.style.border = 'solid 2px black';
  icon_rarbg.style.borderRadius = '7px';
  icon_rarbg.style.textDecoration = 'none';
  icon_rarbg.style.fontSize = '0.8em';
  icon_rarbg.style.fontFamily = 'Calibri';

  icon_rarbg.href = 'https://rarbgmirror.org/torrents.php?imdb=' + movieId;
  icon_rarbg.target = '_blank';

  // filelist
  let filelist = document.createElement('div');
  filelist.innerHTML = '<a id="filelistSearchButton">FileList</a>';
  filelist.style.display = "inline-block";
  filelist.style.position = "fixed";
  filelist.style.left = "6%";
  filelist.style.top = "10%";
  filelist.style.zIndex = '9999';

  document.body.append(filelist);

  let icon_filelist = document.getElementById('filelistSearchButton');
  icon_filelist.style.background = 'white';
  icon_filelist.style.color = 'black';
  icon_filelist.style.fontWeight = '800';
  icon_filelist.style.padding = '5px';
  icon_filelist.style.border = 'solid 2px black';
  icon_filelist.style.borderRadius = '7px';
  icon_filelist.style.textDecoration = 'none';
  icon_filelist.style.fontSize = '0.8em';
  icon_filelist.style.fontFamily = 'Calibri';
  icon_filelist.href = 'https://filelist.io/browse.php?search=' + movieId;
  icon_filelist.target = '_blank';

  // trakt
  let trakt = document.createElement('div');
  trakt.innerHTML = '<a id="traktSearchButton">trakt</a>';
  trakt.style.display = "inline-block";
  trakt.style.position = "fixed";
  trakt.style.left = "11%";
  trakt.style.top = "10%";
  trakt.style.zIndex = '9999';

  document.body.append(trakt);

  let icon_trakt = document.getElementById('traktSearchButton');
  icon_trakt.style.background = 'white';
  icon_trakt.style.color = 'black';
  icon_trakt.style.fontWeight = '800';
  icon_trakt.style.padding = '5px';
  icon_trakt.style.border = 'solid 2px black';
  icon_trakt.style.borderRadius = '7px';
  icon_trakt.style.textDecoration = 'none';
  icon_trakt.style.fontSize = '0.8em';
  icon_trakt.style.fontFamily = 'Calibri';
  icon_trakt.href = 'https://trakt.tv/search/imdb?q=tt' + movieId;
  icon_trakt.target = '_blank';
}