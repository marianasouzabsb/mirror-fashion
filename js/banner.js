var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannersAtual = 0;

function trocaBanner(){
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannersAtual];
}
setInterval(trocaBanner, 4000);