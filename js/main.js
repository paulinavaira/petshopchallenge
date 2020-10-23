 $(window).on("load",function(){
    $(".loader").fadeOut(2500);
  });


  $(".btnContact").submit(function(e) {
    e.preventDefault();
});

$('.btnContact').click(function(){  
  swal({
    title:"¿Estás seguro?",
    text: "Corroborá que los datos sean correctos.",
    buttons: {
           cancel: true,
           confirm: "Aceptar"
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

fetch('https://apipetshop.herokuapp.com/api/articulos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var data = myJson.response
    miPrograma(data);
  });


function miPrograma(data){
    var app = new Vue({
        el: '#app',
        data:{
            toys : [],
            pharmacy : [],
}
});

var toys = data.filter(function(toys) {
    return toys.tipo == 'Juguete';
});

app.toys = toys;

var pharmacy = data.filter(function(pharmacy) {
    return pharmacy.tipo == 'Medicamento';
});

app.pharmacy = pharmacy;
}