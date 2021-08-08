$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
);

let btn = document.querySelector("#boton1");
btn.addEventListener("click", (e)=>{

    e.preventDefault();
    let name = document.querySelector("#name");
    let instrument = document.querySelector("#instrumento");
    let password = document.querySelector("#password");
    let alert1 = document.querySelector("#spanname1");
    let alert2 = document.querySelector("#spanname2");
    let alert3 = document.querySelector("#spanname3");
    let form = document.querySelector("#examen");
    let btnshow = document.querySelector("#boton1");
    let personaldatosForm = document.querySelector("#personal-datos");
    let finalResult = document.querySelector("#info");
    
    let nombre = document.querySelector("#nombre");
    let piano = document.querySelector("#instrument");
    
    if(name.value ==""){
        alert1.style.display = "block";
        alert2.style.display = "none";
        alert3.style.display = "none";
        return;
    }else if(!/^[a-zA-Z]*$/g.test(name.value)){
        alert1.style.display = "block";
        alert2.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(instrument.value != "Piano" && instrument.value != "piano"){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(!/^[a-zA-Z]*$/g.test(instrument.value)){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(instrument.value == ""){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }
    else if(isNaN(password.value)){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
        return;

    }else if(password.value != "23132" && password.value !="54323"){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
        return;

    }else if(password.value == ""){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
      
        return;

    }else{
        alert1.style.display = "none";
        alert2.style.display = "none";
        alert3.style.display = "none";
        form.style.display = "block";
        btnshow.style.display = "none";
       personaldatosForm.style.display="none";
        finalResult.style.display = "flex";
        nombre.textContent = name.value;
        piano.textContent = "A tu examen de:"+" "+instrument.value;


    
    }

});



//Examen validacion
let btnExam = document.querySelector("#buttonformII");

btnExam.addEventListener("click", (e)=>{
    e.preventDefault();

    let resultado = 0;
    let pregunta1 = document.examen.exa1.value;
    let pregunta2 = document.examen.exa2.value;
    let pregunta3 = document.examen.exa3.value;
    let pregunta4 = document.examen.exa4.value;
    let pregunta5 = document.examen.exa5.value;
    let pregunta6 = document.examen.exa6.value;
    let pregunta7 = document.examen.exa7.value;
    let pregunta8 = document.examen.exa8.value;
    let pregunta9 = document.examen.exa9.value;
    let pregunta10 = document.examen.exa10.value;

    let ShowResultado1 = document.querySelector("#resultado1");
    let ShowResultado2 = document.querySelector("#resultado2");

    let apearResult1 = document.querySelector("#r1");
    let apearResult2 = document.querySelector("#r2");

    let form =  document.querySelector("#examen");
    let nota = document.querySelector("#nota");
    if(pregunta1 == "fa#, sol#, la, si, do#, re, mi, fa#"){
        
        resultado++;

    }else if(pregunta1 == ""){
        alert(" pregunta 1 no ha sido completada");
        return;
    }else{
        resultado;
    }



    if(pregunta2 == ""){
        alert(" pregunta 2 no ha sido completada");
        return;
    }else if(pregunta2 == "c"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta3 =="false"){
        resultado++;
    }else if(pregunta3 == ""){
        alert(" pregunta 3 no ha sido completada");
        return;
    }else{
        resultado;
    }


    if(pregunta4 == "f#"){
        resultado++;
    }else if(pregunta4 == ""){
        alert(" pregunta 4 no ha sido completada");
        return;
    }else{
        resultado;
    }



    if(pregunta5 == "c"){
        resultado++;
    }else if(pregunta5 == ""){
        alert(" pregunta 5 no ha sido completada");
        return;
    }else{
        resultado;
    }


    if(pregunta6 == "3"){
        resultado++;
    }else if(pregunta6 == ""){
        alert(" pregunta 6 no ha sido completada");
        return;
    }else{
        resultado;
    }


    if(pregunta7 == "true"){
        resultado++;
    }else if(pregunta7 == ""){
        alert(" pregunta 7 no ha sido completada");
        return;
    }else{
        resultado;
    }

    if(pregunta8 == "b"){
        resultado++;
    }else if(pregunta8 == ""){
        alert(" pregunta 8 no ha sido completada");
        return;
    }else{
        resultado;
    }



    if(pregunta9 == "d"){
        resultado++;
    }else if(pregunta9 == ""){
        alert(" pregunta 9 no ha sido completada");
        return;
    }else{
        resultado;
    }

    if(pregunta10 == "d"){
        resultado++;
    }else if(pregunta10 == ""){
        alert(" pregunta 10 no ha sido completada");
        return;
    }else{
        resultado;
    }



    if(resultado <=5){
      
        apearResult1.style.display = "block";
        ShowResultado1.textContent = "Su califiacion es:" +" "+resultado+" "+"No Aprobado";
        form.style.display = "none";
        nota.textContent = "Calificacion Obtenida "+resultado+"/10";

    }else if(resultado ==6){
        apearResult2.style.display = "block";
        ShowResultado2.textContent = "Su calificacion es:" +" "+resultado +" "+" "+"Bien, pero practica mas";
        form.style.display = "none";
        nota.textContent = "Calificacion Obtenida "+resultado+"/10";

    }else if(resultado >=7){
        apearResult2.style.display = "block";
        ShowResultado2.textContent = "Su calificacion es:" +" "+resultado;
        form.style.display = "none";
        nota.textContent = "Calificacion Obtenida "+resultado+"/10";

    }
    
});