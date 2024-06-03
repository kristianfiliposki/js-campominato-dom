/* variabili */
let boxes="";
let numeriGenerati=[]
const container=document.getElementById("container");
const score=document.getElementById("score");
let box=document.querySelector("#container div");
let newDivs=[]
let counter="0"

/* al click accade...*/
function clicked(div,number,container){
    div.addEventListener("click",function(){
        div.classList.remove('highlight');
        div.classList.add('highlight');
        if(numeriGenerati.includes(number)){
            div.classList.remove('highlight');
            container.innerHTML=""
            container.classList.add('errorbox');
            alert("hai perso,RIPROVA!");
        }
        else if ((div.classList.contains('highlight'))) {
            counter++;
            console.log(counter);
            score.innerHTML=counter;
            
        }          
    })
}

/* scelgo la modalita con cui giocare*/

/* facile */
document.getElementById("facile").addEventListener("click",function(){
    boxes=100;
    counter=0;
    console.log(`ciao le caselle sono ${boxes}`)
    container.classList.remove('errorbox');
    score.innerHTML=0;



})

/* medio */
document.getElementById("medio").addEventListener("click",function(){
    boxes=81;
    counter=0;
    console.log(`ciao le caselle sono ${boxes}`)
    container.classList.remove('errorbox');
    score.innerHTML=0;


    
    
})

/* difficile */
document.getElementById("difficile").addEventListener("click",function(){
    boxes=49;
    counter=0;
    console.log(`ciao le caselle sono ${boxes}`)
    container.classList.remove('errorbox');
    score.innerHTML=0;


    
})


/* play */
document.getElementById("play").addEventListener("click",function(){    
    /* se facile */
    if(boxes==100){
        
        container.innerHTML="";


        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 100)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")

    
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-facile");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n,container)  
        }    
    }
})
/*se medio  */
document.getElementById("play").addEventListener("click",function(){    
    if(boxes==81){
        
        container.innerHTML="";

        
        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 81)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")
        
        
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-medio");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n,container)  
        } 
    }
})

/* se difficile */
document.getElementById("play").addEventListener("click",function(){    
    if(boxes==49){
        container.innerHTML="";

        
        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 49)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")
        
        
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-difficile");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n,container)  
            }
        }
    })


   