//Loader

  $(window).on("load",function(){
    $(".loader").fadeOut(2500);
  });

//No recargar página

  $(".btnContact").submit(function(e) {
    e.preventDefault();
});

//ALERT Contact

$('.btnContact').click(function(){  
  swal({
    title:"¿Estás seguro?",
    text: "Corroborá que los datos sean correctos.",
    buttons: {
           cancel: true,
           confirm: "Seguir"
             }
  }).then( val => {
    if(val)  {
            swal({
                 title: "¡Listo!",
                 text: "Tus datos han sido enviados. Te contactaremos en breve.",
                 icon: "success"
                 });
             }
  });
});

//Pido info a la API
fetch('https://apipetshop.herokuapp.com/api/articulos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var data = myJson.response
    miPrograma(data);
  });

//Información

function miPrograma(data){
    var app = new Vue({
        el: '#app',
        data:{
            toys : [],
            pharmacy : [],
}
});

//Obtengo los datos para el catálogo 'Farmacia' y 'Juguetes'
var toys = data.filter(function(toys) {
    return toys.tipo == 'Juguete';
});

app.toys = toys;

var pharmacy = data.filter(function(pharmacy) {
    return pharmacy.tipo == 'Medicamento';
});

app.pharmacy = pharmacy;
}