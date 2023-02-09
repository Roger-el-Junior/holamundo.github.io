//nivel1
function evalua1(){
    
    let pal1=document.getElementById("palabra1").name="play"
    let pal2=document.getElementById("palabra6").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("palabra6").style.borderColor="green"
            var cl2=document.getElementById("palabra1").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function resp1(){
    let pal1=document.getElementById("palabra6").name="play"
    let pal2=document.getElementById("palabra1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra1").style.borderColor="green"
            document.getElementById("palabra6").style.borderColor="green"

     evaluaPuntos()       
        }else{
            console.log("esta mal echo")
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function evalua2(){
    let pal1=document.getElementById("palabra2").name="day"
    let pal2=document.getElementById("palabra7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            console.log("esta bienbecho1")
            
            document.getElementById("palabra7").style.borderColor="green"
            document.getElementById("palabra2").style.borderColor="green"


evaluaPuntos()

        }else{
            console.log("has fallado")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function resp2(){
    let pal1=document.getElementById("palabra7").name="day"
    let pal2=document.getElementById("palabra2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra2").style.borderColor="green"
            document.getElementById("palabra7").style.borderColor="green"

evaluaPuntos()
        }else{
            console.log("esta mal echo")
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function evalua3(){
    let pal1=document.getElementById("palabra3").name="work"
    let pal2=document.getElementById("palabra10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            console.log("esta bienbecho1")
            
            document.getElementById("palabra3").style.borderColor="green"
            document.getElementById("palabra10").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("has fallado")
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function resp3(){
    let pal1=document.getElementById("palabra10").name="work"
    let pal2=document.getElementById("palabra3").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra3").style.borderColor="green"
            document.getElementById("palabra10").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function evalua4(){
    let pal1=document.getElementById("palabra4").name="closed"
    let pal2=document.getElementById("palabra9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta muy biem")
           document.getElementById("palabra4").style.borderColor="green"
            document.getElementById("palabra9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            console.log("has fayado")
        }
    }
}

function resp4(){
    let pal1=document.getElementById("palabra9").name="closed"
    let pal2=document.getElementById("palabra4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta bien echo")
            
            
            document.getElementById("palabra4").style.borderColor="green"
            document.getElementById("palabra9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            console.log("has fallado")
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function evalua5(){
    let pal1=document.getElementById("palabra5").name="go"
    let pal2=document.getElementById("palabra8").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta muy biem")
           document.getElementById("palabra5").style.borderColor="green"
            document.getElementById("palabra8").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
            console.log("has fayado")
        }
    }
}

function resp5(){
    let pal1=document.getElementById("palabra8").name="go"
    let pal2=document.getElementById("palabra5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta bien echo")
            
            
            document.getElementById("palabra5").style.borderColor="green"
            document.getElementById("palabra8").style.borderColor="green"
            evaluaPuntos()
        }
        else{
            console.log("has fallado")
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


/*nivel2*/

function table(){
    
    let pal1=document.getElementById("table").name="play"
    let pal2=document.getElementById("tabla").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("table").style.borderColor="green"
            document.getElementById("tabla").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function tabla(){
    let pal1=document.getElementById("tabla").name="play"
    let pal2=document.getElementById("table").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("tabla").style.borderColor="green"
            document.getElementById("table").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function old(){
    let pal1=document.getElementById("viejo").name="play"
    let pal2=document.getElementById("old").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("old").style.borderColor="green"
            document.getElementById("viejo").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function viejo(){
    
    let pal1=document.getElementById("old").name="play"
    let pal2=document.getElementById("viejo").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("old").style.borderColor="green"
            document.getElementById("viejo").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function sombrero(){
    
    let pal1=document.getElementById("hat").name="play"
    let pal2=document.getElementById("sombrero").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("hat").style.borderColor="green"
            document.getElementById("sombrero").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala3()
            pala5()
        }
        
    }
    
}

function hat(){
    let pal1=document.getElementById("sombrero").name="play"
    let pal2=document.getElementById("hat").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("hat").style.borderColor="green"
            document.getElementById("sombrero").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function casa(){
    
    let pal1=document.getElementById("house").name="play"
    let pal2=document.getElementById("casa").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("casa").style.borderColor="green"
            document.getElementById("house").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function house(){
    let pal1=document.getElementById("casa").name="play"
    let pal2=document.getElementById("house").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("house").style.borderColor="green"
            document.getElementById("casa").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function azul(){
    
    let pal1=document.getElementById("blue").name="play"
    let pal2=document.getElementById("azul").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("blue").style.borderColor="green"
            document.getElementById("azul").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala2()
            pala3()
            pala4()
            pala1()
        }
        
    }
    
}

function blue(){
    let pal1=document.getElementById("azul").name="play"
    let pal2=document.getElementById("blue").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("azul").style.borderColor="green"
            document.getElementById("blue").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala3()
            pala4()
            pala1()
            pala2()
        }
    }
}
/*fin nuvel 2*/
//nivel3

function pa_ni3_1(){
    
    let pal1=document.getElementById("pa_ni3_1").name="play"
    let pal2=document.getElementById("pa_ni3_10").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni3_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni3_10").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_10(){
    let pal1=document.getElementById("pa_ni3_10").name="play"
    let pal2=document.getElementById("pa_ni3_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni3_10").style.borderColor="green"
            document.getElementById("pa_ni3_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_2(){
    let pal1=document.getElementById("pa_ni3_2").name="day"
    let pal2=document.getElementById("pa_ni3_9").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_2").style.borderColor="green"
            document.getElementById("pa_ni3_9").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_9(){
    let pal1=document.getElementById("pa_ni3_9").name="day"
    let pal2=document.getElementById("pa_ni3_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni3_2").style.borderColor="green"
            document.getElementById("pa_ni3_9").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_3(){
    let pal1=document.getElementById("pa_ni3_3").name="work"
    let pal2=document.getElementById("pa_ni3_8").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_3").style.borderColor="green"
            document.getElementById("pa_ni3_8").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_8(){
    let pal1=document.getElementById("pa_ni3_8").name="work"
    let pal2=document.getElementById("pa_ni3_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni3_3").style.borderColor="green"
            document.getElementById("pa_ni3_8").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_4(){
    let pal1=document.getElementById("pa_ni3_4").name="what"
    let pal2=document.getElementById("pa_ni3_7").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni3_4").style.borderColor="green"
            document.getElementById("pa_ni3_7").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni3_7(){
    let pal1=document.getElementById("pa_ni3_7").name="what"
    let pal2=document.getElementById("pa_ni3_4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni3_4").style.borderColor="green"
            document.getElementById("pa_ni3_7").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni3_5(){
    let pal1=document.getElementById("pa_ni3_5").name="hay"
    let pal2=document.getElementById("pa_ni3_6").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni3_5").style.borderColor="green"
            document.getElementById("pa_ni3_6").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni3_6(){
    let pal1=document.getElementById("pa_ni3_6").name="hay"
    let pal2=document.getElementById("pa_ni3_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_5").style.borderColor="green"
            document.getElementById("pa_ni3_6").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel3
//nivel 4

function pa_ni4_1(){
    
    let pal1=document.getElementById("pa_ni4_1").name="play"
    let pal2=document.getElementById("pa_ni4_6").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni4_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni4_6").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_6(){
    let pal1=document.getElementById("pa_ni4_6").name="play"
    let pal2=document.getElementById("pa_ni4_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni4_6").style.borderColor="green"
            document.getElementById("pa_ni4_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_2(){
    let pal1=document.getElementById("pa_ni4_2").name="day"
    let pal2=document.getElementById("pa_ni4_5").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_2").style.borderColor="green"
            document.getElementById("pa_ni4_5").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_5(){
    let pal1=document.getElementById("pa_ni4_5").name="day"
    let pal2=document.getElementById("pa_ni4_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni4_2").style.borderColor="green"
            document.getElementById("pa_ni4_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_3(){
    let pal1=document.getElementById("pa_ni4_3").name="work"
    let pal2=document.getElementById("pa_ni4_4").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_3").style.borderColor="green"
            document.getElementById("pa_ni4_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_4(){
    let pal1=document.getElementById("pa_ni4_4").name="work"
    let pal2=document.getElementById("pa_ni4_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni4_3").style.borderColor="green"
            document.getElementById("pa_ni4_4").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_7(){
    let pal1=document.getElementById("pa_ni4_7").name="what"
    let pal2=document.getElementById("pa_ni4_10").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni4_7").style.borderColor="green"
            document.getElementById("pa_ni4_10").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni4_10(){
    let pal1=document.getElementById("pa_ni4_10").name="what"
    let pal2=document.getElementById("pa_ni4_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni4_7").style.borderColor="green"
            document.getElementById("pa_ni4_10").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni4_8(){
    let pal1=document.getElementById("pa_ni4_8").name="hay"
    let pal2=document.getElementById("pa_ni4_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni4_9").style.borderColor="green"
            document.getElementById("pa_ni4_8").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni4_9(){
    let pal1=document.getElementById("pa_ni4_9").name="hay"
    let pal2=document.getElementById("pa_ni4_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_9").style.borderColor="green"
            document.getElementById("pa_ni4_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel4
//nivel5

function pa_ni5_1(){
    
    let pal1=document.getElementById("pa_ni5_1").name="play"
    let pal2=document.getElementById("pa_ni5_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni5_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni5_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_4(){
    let pal1=document.getElementById("pa_ni5_4").name="play"
    let pal2=document.getElementById("pa_ni5_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni5_4").style.borderColor="green"
            document.getElementById("pa_ni5_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_2(){
    let pal1=document.getElementById("pa_ni5_2").name="day"
    let pal2=document.getElementById("pa_ni5_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_2").style.borderColor="green"
            document.getElementById("pa_ni5_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_3(){
    let pal1=document.getElementById("pa_ni5_3").name="day"
    let pal2=document.getElementById("pa_ni5_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni5_2").style.borderColor="green"
            document.getElementById("pa_ni5_3").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_5(){
    let pal1=document.getElementById("pa_ni5_5").name="work"
    let pal2=document.getElementById("pa_ni5_10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_10").style.borderColor="green"
            document.getElementById("pa_ni5_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_10(){
    let pal1=document.getElementById("pa_ni5_10").name="work"
    let pal2=document.getElementById("pa_ni5_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni5_5").style.borderColor="green"
            document.getElementById("pa_ni5_10").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_6(){
    let pal1=document.getElementById("pa_ni5_6").name="what"
    let pal2=document.getElementById("pa_ni5_9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni5_6").style.borderColor="green"
            document.getElementById("pa_ni5_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni5_9(){
    let pal1=document.getElementById("pa_ni5_9").name="what"
    let pal2=document.getElementById("pa_ni5_6").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni5_6").style.borderColor="green"
            document.getElementById("pa_ni5_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni5_8(){
    let pal1=document.getElementById("pa_ni5_8").name="hay"
    let pal2=document.getElementById("pa_ni5_7").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni5_8").style.borderColor="green"
            document.getElementById("pa_ni5_7").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni5_7(){
    let pal1=document.getElementById("pa_ni5_7").name="hay"
    let pal2=document.getElementById("pa_ni5_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_7").style.borderColor="green"
            document.getElementById("pa_ni5_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel5
//nivel 6 

function pa_ni6_1(){
    
    let pal1=document.getElementById("pa_ni6_1").name="play"
    let pal2=document.getElementById("pa_ni6_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni6_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni6_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_4(){
    let pal1=document.getElementById("pa_ni6_4").name="play"
    let pal2=document.getElementById("pa_ni6_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni6_4").style.borderColor="green"
            document.getElementById("pa_ni6_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_2(){
    let pal1=document.getElementById("pa_ni6_2").name="day"
    let pal2=document.getElementById("pa_ni6_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_2").style.borderColor="green"
            document.getElementById("pa_ni6_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_3(){
    let pal1=document.getElementById("pa_ni6_3").name="day"
    let pal2=document.getElementById("pa_ni6_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni6_2").style.borderColor="green"
            document.getElementById("pa_ni6_3").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_5(){
    let pal1=document.getElementById("pa_ni6_5").name="work"
    let pal2=document.getElementById("pa_ni6_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_6").style.borderColor="green"
            document.getElementById("pa_ni6_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_6(){
    let pal1=document.getElementById("pa_ni6_6").name="work"
    let pal2=document.getElementById("pa_ni6_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni6_5").style.borderColor="green"
            document.getElementById("pa_ni6_6").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_7(){
    let pal1=document.getElementById("pa_ni6_7").name="what"
    let pal2=document.getElementById("pa_ni6_10").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni6_7").style.borderColor="green"
            document.getElementById("pa_ni6_10").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni6_10(){
    let pal1=document.getElementById("pa_ni6_10").name="what"
    let pal2=document.getElementById("pa_ni6_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni6_7").style.borderColor="green"
            document.getElementById("pa_ni6_10").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni6_8(){
    let pal1=document.getElementById("pa_ni6_8").name="hay"
    let pal2=document.getElementById("pa_ni6_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni6_8").style.borderColor="green"
            document.getElementById("pa_ni6_9").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni6_9(){
    let pal1=document.getElementById("pa_ni6_9").name="hay"
    let pal2=document.getElementById("pa_ni6_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_9").style.borderColor="green"
            document.getElementById("pa_ni6_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel6
//nivel7

function pa_ni7_1(){
    
    let pal1=document.getElementById("pa_ni7_1").name="play"
    let pal2=document.getElementById("pa_ni7_8").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni7_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni7_8").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_8(){
    let pal1=document.getElementById("pa_ni7_8").name="play"
    let pal2=document.getElementById("pa_ni7_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni7_8").style.borderColor="green"
            document.getElementById("pa_ni7_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_2(){
    let pal1=document.getElementById("pa_ni7_2").name="day"
    let pal2=document.getElementById("pa_ni7_7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_2").style.borderColor="green"
            document.getElementById("pa_ni7_7").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_7(){
    let pal1=document.getElementById("pa_ni7_7").name="day"
    let pal2=document.getElementById("pa_ni7_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni7_2").style.borderColor="green"
            document.getElementById("pa_ni7_7").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_3(){
    let pal1=document.getElementById("pa_ni7_3").name="work"
    let pal2=document.getElementById("pa_ni7_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_3").style.borderColor="green"
            document.getElementById("pa_ni7_6").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_6(){
    let pal1=document.getElementById("pa_ni7_6").name="work"
    let pal2=document.getElementById("pa_ni7_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni7_3").style.borderColor="green"
            document.getElementById("pa_ni7_6").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_4(){
    let pal1=document.getElementById("pa_ni7_4").name="what"
    let pal2=document.getElementById("pa_ni7_9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni7_4").style.borderColor="green"
            document.getElementById("pa_ni7_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni7_9(){
    let pal1=document.getElementById("pa_ni7_9").name="what"
    let pal2=document.getElementById("pa_ni7_4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni7_4").style.borderColor="green"
            document.getElementById("pa_ni7_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni7_5(){
    let pal1=document.getElementById("pa_ni7_5").name="hay"
    let pal2=document.getElementById("pa_ni7_10").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni7_10").style.borderColor="green"
            document.getElementById("pa_ni7_5").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni7_10(){
    let pal1=document.getElementById("pa_ni7_10").name="hay"
    let pal2=document.getElementById("pa_ni7_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_5").style.borderColor="green"
            document.getElementById("pa_ni7_10").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

//fin de nivel7
//nivel8 

function pa_ni8_1(){
    
    let pal1=document.getElementById("pa_ni8_1").name="play"
    let pal2=document.getElementById("pa_ni8_10").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni8_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni8_10").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_10(){
    let pal1=document.getElementById("pa_ni8_10").name="play"
    let pal2=document.getElementById("pa_ni8_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni8_10").style.borderColor="green"
            document.getElementById("pa_ni8_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_4(){
    let pal1=document.getElementById("pa_ni8_4").name="day"
    let pal2=document.getElementById("pa_ni8_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_4").style.borderColor="green"
            document.getElementById("pa_ni8_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_3(){
    let pal1=document.getElementById("pa_ni8_3").name="day"
    let pal2=document.getElementById("pa_ni8_4").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni8_2").style.borderColor="green"
            document.getElementById("pa_ni8_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_5(){
    let pal1=document.getElementById("pa_ni8_5").name="work"
    let pal2=document.getElementById("pa_ni8_2").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_5").style.borderColor="green"
            document.getElementById("pa_ni8_2").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_2(){
    let pal1=document.getElementById("pa_ni8_2").name="work"
    let pal2=document.getElementById("pa_ni8_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni8_5").style.borderColor="green"
            document.getElementById("pa_ni8_2").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_6(){
    let pal1=document.getElementById("pa_ni8_6").name="what"
    let pal2=document.getElementById("pa_ni8_9").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni8_6").style.borderColor="green"
            document.getElementById("pa_ni8_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni8_9(){
    let pal1=document.getElementById("pa_ni8_9").name="what"
    let pal2=document.getElementById("pa_ni8_6").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni8_6").style.borderColor="green"
            document.getElementById("pa_ni8_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni8_8(){
    let pal1=document.getElementById("pa_ni8_8").name="hay"
    let pal2=document.getElementById("pa_ni8_7").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni8_8").style.borderColor="green"
            document.getElementById("pa_ni8_7").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni8_7(){
    let pal1=document.getElementById("pa_ni8_7").name="hay"
    let pal2=document.getElementById("pa_ni8_8").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_8").style.borderColor="green"
            document.getElementById("pa_ni8_7").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nuvel8
//nivel9

function pa_ni9_1(){
    
    let pal1=document.getElementById("pa_ni9_1").name="play"
    let pal2=document.getElementById("pa_ni9_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni9_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni9_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_4(){
    let pal1=document.getElementById("pa_ni9_4").name="play"
    let pal2=document.getElementById("pa_ni9_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni9_4").style.borderColor="green"
            document.getElementById("pa_ni9_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_2(){
    let pal1=document.getElementById("pa_ni9_2").name="day"
    let pal2=document.getElementById("pa_ni9_7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_2").style.borderColor="green"
            document.getElementById("pa_ni9_7").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_7(){
    let pal1=document.getElementById("pa_ni9_7").name="day"
    let pal2=document.getElementById("pa_ni9_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni9_7").style.borderColor="green"
            document.getElementById("pa_ni9_2").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_3(){
    let pal1=document.getElementById("pa_ni9_3").name="work"
    let pal2=document.getElementById("pa_ni9_10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_3").style.borderColor="green"
            document.getElementById("pa_ni9_10").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_10(){
    let pal1=document.getElementById("pa_ni9_10").name="work"
    let pal2=document.getElementById("pa_ni9_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni9_10").style.borderColor="green"
            document.getElementById("pa_ni9_3").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_5(){
    let pal1=document.getElementById("pa_ni9_5").name="what"
    let pal2=document.getElementById("pa_ni9_8").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni9_5").style.borderColor="green"
            document.getElementById("pa_ni9_8").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni9_8(){
    let pal1=document.getElementById("pa_ni9_8").name="what"
    let pal2=document.getElementById("pa_ni9_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni9_5").style.borderColor="green"
            document.getElementById("pa_ni9_8").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni9_6(){
    let pal1=document.getElementById("pa_ni9_6").name="hay"
    let pal2=document.getElementById("pa_ni9_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni9_6").style.borderColor="green"
            document.getElementById("pa_ni9_9").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni9_9(){
    let pal1=document.getElementById("pa_ni9_9").name="hay"
    let pal2=document.getElementById("pa_ni9_6").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_6").style.borderColor="green"
            document.getElementById("pa_ni9_9").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel9
//nivel10
function pa_ni10_1(){
    
    let pal1=document.getElementById("pa_ni10_1").name="play"
    let pal2=document.getElementById("pa_ni10_2").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni10_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni10_2").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_2(){
    let pal1=document.getElementById("pa_ni10_2").name="play"
    let pal2=document.getElementById("pa_ni10_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni10_1").style.borderColor="green"
            document.getElementById("pa_ni10_2").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_3(){
    let pal1=document.getElementById("pa_ni10_3").name="day"
    let pal2=document.getElementById("pa_ni10_4").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_3").style.borderColor="green"
            document.getElementById("pa_ni10_4").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_4(){
    let pal1=document.getElementById("pa_ni10_4").name="day"
    let pal2=document.getElementById("pa_ni10_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni10_3").style.borderColor="green"
            document.getElementById("pa_ni10_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_5(){
    let pal1=document.getElementById("pa_ni10_5").name="work"
    let pal2=document.getElementById("pa_ni10_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_5").style.borderColor="green"
            document.getElementById("pa_ni10_6").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_6(){
    let pal1=document.getElementById("pa_ni10_6").name="work"
    let pal2=document.getElementById("pa_ni10_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni10_6").style.borderColor="green"
            document.getElementById("pa_ni10_5").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_7(){
    let pal1=document.getElementById("pa_ni10_7").name="what"
    let pal2=document.getElementById("pa_ni10_8").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni10_7").style.borderColor="green"
            document.getElementById("pa_ni10_8").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni10_8(){
    let pal1=document.getElementById("pa_ni10_8").name="what"
    let pal2=document.getElementById("pa_ni10_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni10_7").style.borderColor="green"
            document.getElementById("pa_ni10_8").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni10_9(){
    let pal1=document.getElementById("pa_ni10_9").name="hay"
    let pal2=document.getElementById("pa_ni10_10").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni10_9").style.borderColor="green"
            document.getElementById("pa_ni10_10").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni10_10(){
    let pal1=document.getElementById("pa_ni10_10").name="hay"
    let pal2=document.getElementById("pa_ni10_9").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_10").style.borderColor="green"
            document.getElementById("pa_ni10_9").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}
//fin de nivel10
