function reveal(){
    document.getElementById("Fl").style.display = "inline-block";
    document.getElementById("Ev").style.display = "inline-block";
    document.getElementById("Zi").style.display = "inline-block";
    document.getElementById("Ba").style.display = "inline-block";
    document.getElementById("Sa").style.display = "inline-block";
    document.getElementById("Ma").style.display = "inline-block";
    document.getElementById("Cac").style.display = "none";
}

var carousel = document.getElementById('carouselExampleCaptions');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var carouselText1 = document.getElementById('Carouseltext');
var carouselText2 = document.getElementById('Carouseltext2');
var carouselText3 = document.getElementById('Carouseltext3');

carousel.addEventListener('slide.bs.carousel', function(event) {
    if (event.relatedTarget === slide1) {
      carouselText1.textContent = "Climate Change as defined as the drastic change of the Earth's climate. This is a change due to excessive greenhouse gases in the earth's atmosphere. Additionally, the production of crops decreased rapidly, and by 2030, climate change may take over this effect. High greenhouse emissions cause major declines in crops such as corn by 24% and wheat by 17%.";
    } else {
      carouselText1.textContent = "";
    }
  });

carousel.addEventListener('slide.bs.carousel', function(event) {
  if (event.relatedTarget === slide2) {
    carouselText2.textContent = "The contributing factor induced by climate change to the decline of crop production is extreme heat stress, which limits plant growth and development. The decrease in photosynthetic rate negatively impacts plant development in heat and water stress, such as lowered internal plant CO2, inhibition of photosynthetic enzymes (e.g., Rubisco), and synthesis of ATP (adenosine triphosphate), which produces chemical energy that is needed for regulating plant biochemical reactions.";
  } else {
    carouselText2.textContent = "";
  }
});

carousel.addEventListener('slide.bs.carousel', function(event) {
    if (event.relatedTarget === slide3) {
      carouselText3.textContent = "Additionally, an increase in soil temperature declines soil watercontent. In response to Climate Change's detrimental effects to agriculture, Climate SMART agriculture was established with its three pillars: food security, adaptation, and reducing mitigation (World Agroforestry, 2021). This research focuses on the second pillar of Climate SMART agriculture which is adapting and building resilience to climate change by creating new engineered crops that are more resilient to the climate.";
    } else {
      carouselText3.textContent = "";
    }
  });