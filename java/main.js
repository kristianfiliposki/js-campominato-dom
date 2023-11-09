let boxes="";
const container=document.getElementById("container");
let box=document.querySelector("#container div")
PcNumb1=console.log(Math.floor(Math.random() * 49)+1);
PcNumb2=console.log(Math.floor(Math.random() * 49)+1);
PcNumb3=console.log(Math.floor(Math.random() * 49)+1);
PcNumb4=console.log(Math.floor(Math.random() * 49)+1);
PcNumb5=console.log(Math.floor(Math.random() * 49)+1);
PcNumb6=console.log(Math.floor(Math.random() * 49)+1);


/* scelgo la modalita */

/* facile */
document.getElementById("facile").addEventListener("click",function(){
    boxes=parseInt(100);
})

/* medio */
document.getElementById("medio").addEventListener("click",function(){
    boxes=parseInt(81);
    console.log(`ciao le caselle sono ${boxes}`)
})

/* difficile */
document.getElementById("difficile").addEventListener("click",function(){
    boxes=parseInt(49);
    console.log(boxes) 
})


/* play */
document.getElementById("play").addEventListener("click",function(){
    
    console.log(boxes)
    /* se facile */
    if(boxes==100){
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";
    
    
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n);          
        }

        function GenBox(){
            var newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-facile");
            clicked(newDiv)
        }   
            
    }
    /*se medio  */
    else if(boxes==81){
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";

        
        boxes=81;
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n);
        }

        function GenBox(){
            var newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-medio");
            clicked(newDiv)
        }    

    }
    /* se difficile */
    else if(boxes==49){
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";
        
        
        
        boxes=49;
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n)
        }

        function GenBox(){
            var newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-difficile");
            clicked(newDiv)            
        }   
        
    }
    
})

function clicked(newDiv){
    newDiv.addEventListener("click",function(){
        newDiv.classList.add('highlight');
    if(newDiv.innerHTML==(PcNumb1)||(PcNumb2)||(PcNumb3)||(PcNumb4)||(PcNumb5)||(PcNumb6)){
        newDiv.classList.remove('highlight');
        newDiv.classList.add('errorbox');}
    })
}
 


/* function GenNum() {
    let PcNumbers=[];
    for (let i = 0; i < 16; i++) {
        PcNumb=console.log(Math.floor(Math.random(i) * 49)+1);
        PcNumbers.push(PcNumb)
    }
    return(PcNumbers)
}  */


/* box.addEventListener("click",function(){
   if(box.innerHTML==PcNs[0]||box.innerHTML==PcNs[1]||box.innerHTML==PcNs[2]||box.innerHTML==PcNs[3]||box.innerHTML==PcNs[4]||box.innerHTML==PcNs[5]||box.innerHTML==PcNs[6]||box.innerHTML==PcNs[7]||box.innerHTML==PcNs[8]||box.innerHTML==PcNs[9]||box.innerHTML==PcNs[10]||box.innerHTML==PcNs[11]||box.innerHTML==PcNs[12]||box.innerHTML==PcNs[13]||box.innerHTML==PcNs[14]||box.innerHTML==PcNs[15]){
    
    if(box.innerHTML==PcNs[0]){
        console.log("hai perso");
    }
})
 */



