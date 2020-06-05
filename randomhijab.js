function getRandomUrl(urls) {
var minIndex = 0;
var maxIndex = urls.length - 0.5;
var randomIndex = Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
return urls[randomIndex];
}
var urls = [

"https://www.youtube.com/embed/RCSrh6am0BQ?autoplay=1", 
"https://www.youtube.com/embed/nDveC3G4Uxs?autoplay=1",
"https://www.youtube.com/embed/Rjk4YQe_Yzc?autoplay=1",
"https://www.youtube.com/embed/Tv9XjAU9dzs?autoplay=1",
"https://www.youtube.com/embed/iVXkFftbZNo?autoplay=1",
"https://www.youtube.com/embed/s3mDva_Wd8U?autoplay=1"

];
var randomSelectedUrl = getRandomUrl(urls);
$("#vitrine").html(
"<iframe class='random-iframe' src='" + randomSelectedUrl + "' allow='autoplay; encrypted-media'></iframe>");
