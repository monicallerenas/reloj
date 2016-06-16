function mueveReloj(){ 

    momentoActual = new Date() 
    hora = momentoActual.getHours() 
    minuto = momentoActual.getMinutes() 
    segundo = momentoActual.getSeconds() 

    str_segundo = new String (segundo) 
    
    if (str_segundo.length == 1) 
        segundo = "0" + segundo 

    str_minuto = new String (minuto) 
    if (str_minuto.length == 1) 
        minuto = "0" + minuto 

    str_hora = new String (hora) 
    if (str_hora.length == 1) 
        hora = "0" + hora 

    horaImprimible = hora + " : " + minuto + " : " + segundo 

    document.form_reloj.reloj.value = horaImprimible 

    
    onfocus="window.document.form_reloj.reloj.blur()" 
    var n=0;


   
}

 function selecionapais(){
        console.log(this)
        var texto = '';

        var d=new Date();
        var dia=new Array(7);
        dia[0]=" Domingo";
        dia[1]=" Lunes";
        dia[2]=" Martes";
        dia[3]=" Miercoles";
        dia[4]=" Jueves";
        dia[5]=" Viernes";
        dia[6]=" Sabado";
        texto += "Hoy es:" +dia[d.getDay()];
      
        var mm=new Date();
        var m2 = mm.getMonth() + 1;
        var mesok = (m2 < 10) ? '0' + m2 : m2;
        var mesok=new Array(12);
        mesok[0]=" Enero";
        mesok[1]=" Febrero";
        mesok[2]=" Marzo";
        mesok[3]=" Abril";
        mesok[4]=" Mayo";
        mesok[5]=" Junio";
        mesok[6]=" Julio";
        mesok[7]=" Agosto";
        mesok[8]=" Septiembre";
        mesok[9]=" Octubre";
        mesok[10]=" Noviembre";
        mesok[11]=" Diciembre";
        texto +=  "" + mesok[mm.getMonth()];

        var  today = new Date();
        var m = today.getMonth() + 1;
        var mes = (m < 10) ? '0' + m : m;

        texto += ''+today.getDate(),'/'+mes,'/'+today.getYear();
        document.getElementById('phora').innerHTML = texto;
        
    }


//selecionapais();