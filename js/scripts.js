
// Menu Mobile

document.getElementById("hamburguer-icon").onclick = () => {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};


document.getElementById("sliding-header-menu-close-button").onclick = () => {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

let about_tags = document.getElementsByClassName("single-tab");


for (let i = 0; i < about_tags.length; i++) {


  about_tags[i].onclick = function () {

    for(let j = 0; j < about_tags.length; j++){
      about_tags[j].style['background-color'] = unselected_color;
      about_tags[j].style['font-weight'] = "normal";

    }
    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";
  
    let selecionar = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionar];
};



}
// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Através da expertise de nossos colaboradores oferecemos o que há de melhor das tecnologias do Design Web para nossos clientes.'
  },

  {
    'title': 'Branding',
    'text': 'Através de um brandind alinhado as principais tendências do mercado, permitimos que sua empresa se aproxime daqueles que mais importam, seus clientes.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Um marketing digital perfeito para cada parte de sua empresa.'
  }
  
];


// Data Footer



  
   


  //   service-previous"
  //  service-next
  // service-title
  // service-text



   let servico_atual = 0;
  

   document.getElementById("service-previous").onclick = () => {

     if(servico_atual == 0){

      var servico_anterior = our_services.length - 1;

     } else {

      var servico_anterior = servico_atual - 1;

     }
     document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
     document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;

     servico_atual = servico_anterior;
     
   };



   
  
   document.getElementById("service-next").onclick = () => {

    if(servico_atual == our_services.length){

      var servico_posterior = 0;

    } else {

      var servico_posterior = servico_atual + 1;

    }
    document.getElementById("service-title").innerHTML = our_services[servico_posterior].title;
    document.getElementById("service-text").innerHTML = our_services[servico_posterior].text;

  servico_atual = servico_posterior;

   
  };
//  Data Footer

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
  // current_year

  document.getElementById("current_year").innerHTML = ano_atual;


  //  map

 


  // API Key: AIzaSyCKgDsvpndndbxSzB-eV9N3i7JZRxG_4hE

function initMap() {
  var uluru = {lat: -25.441434, lng: -49.308482};

  var map = new google.maps.Map(document.getElementById("map"), {zoom: 16, center: uluru});

  var marker = new google.maps.Marker({position: uluru, map: map});
}

window.initMap = initMap;