function foto() {
    var foto = document.getElementById("img");
    var lista = ["http://upload.wikimedia.org/wikipedia/commons/b/ba/Men_decathlon_PV_French_Athletics_Championships_2013_t141910a.jpg",
                "http://images6.fanpop.com/image/photos/33100000/CR7-Calma-calma-cristiano-ronaldo-33128148-714-890.jpg",
                "http://lg1designs.com/06-cr-125.jpg",
                "http://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/732px-Real_Madrid_CF.svg.png",
                "http://www.resultados-futbol.com/parada-iker-casillas-1-rf_523758.jpg",
                "http://www.juegalaroja.com/media/galeria/199/2/5/4/5/n_seleccion_espanola_varios-1755452.jpg",
                "http://worldversus.com/img/benzema.jpg",
                "http://as00.epimg.net/futbol/imagenes/2014/01/02/primera/1388629793_932784_1388630094_noticia_normal.jpg",
                "http://www.independent.co.uk/incoming/article8902641.ece/alternates/w620/pg-68-bale-1-reuters.jpg",
                "http://static.goal.com/356700/356780_heroa.jpg"]

   imagenes= lista[Math.floor(Math.random()*lista.length)]
    
    foto.innerHTML = "<img src="+imagenes+ ">";
 
}

