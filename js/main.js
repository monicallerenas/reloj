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

    setTimeout("mueveReloj()",1000)
    onfocus="window.document.form_reloj.reloj.blur()" 
//funcion para el dia

    /*var dia= new ("","Lunes", "Martes", "Miercoles","Jueves","Viernes", "Sabado", "Domingo");
    var mes= new ("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

    dateText+=dia[dayValue];
    dateText+=mes[monthValue];
*/



  /*  dayValue = A.getDay()
if (dayValue == 0)
dateText += "Domingo"
else if (dayValue == 1)
dateText += "Lunes"
else if (dayValue == 2)
dateText += "Martes"
else if (dayValue == 3)
dateText += "Miercoles"
else if (dayValue == 4)
dateText += "Jueves"
else if (dayValue == 5)
dateText += "Viernes"
else if (dayValue == 6)
dateText += "Sabado"

monthValue = A.getMonth()
dateText += " "
if (monthValue == 0)
dateText += "Enero"
if (monthValue == 1)
dateText += "Febrero"
if (monthValue == 2)
dateText += "Marzo"
if (monthValue == 3)
dateText += "Abril"
if (monthValue == 4)
dateText += "Mayo"
if (monthValue == 5)
dateText += "Junio"
if (monthValue == 6)
dateText += "Julio"
if (monthValue == 7)
dateText += "Agosto"
if (monthValue == 8)
dateText += "Septiembre"
if (monthValue == 9)
dateText += "Octubre"
if (monthValue == 10)
dateText += "Noviembre"
if (monthValue == 11)
dateText += "Diciembre"


*/
    var n=0;
    function selecionapais(obj){
    n=obj.options[obj.selectedIndex].value;
    alert(selecionapais ('Lima', '+5'));
    alert(selecionapais ('Mexico', '-5'));
  //tufunction(n);
}
} 