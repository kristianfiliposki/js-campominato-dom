/* variabili */
let boxes="";
let numeriGenerati=[]
const container=document.getElementById("container");
let box=document.querySelector("#container div")
let newDivs=[]





/* scelgo la modalita con cui giocare*/

/* facile */
document.getElementById("facile").addEventListener("click",function(){
    boxes=100;
    console.log(`ciao le caselle sono ${boxes}`)

})

/* medio */
document.getElementById("medio").addEventListener("click",function(){
    boxes=81;
    console.log(`ciao le caselle sono ${boxes}`)
    
    
})

/* difficile */
document.getElementById("difficile").addEventListener("click",function(){
    boxes=49;
    console.log(`ciao le caselle sono ${boxes}`)
    
})


/* play */
document.getElementById("play").addEventListener("click",function(){    
    /* se facile */
    if(boxes==100){
        

        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 100)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")
        container.innerHTML="";

    
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-facile");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n)  
        }    
    }
})
/*se medio  */
document.getElementById("play").addEventListener("click",function(){    
    if(boxes==81){
        
        
        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 81)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")
        container.innerHTML="";
        
        
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-medio");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n)  
        } 
    }
})

/* se difficile */
document.getElementById("play").addEventListener("click",function(){    
    if(boxes==49){
        
        
        for (let i = 0; i < 6; i++) {
            PcNumb=Math.floor(Math.random() * 49)+1;
            numeriGenerati.push(PcNumb);
            console.log(numeriGenerati)
        }
        
        
        let box=document.querySelector("#container div")
        container.innerHTML="";
        
        
        for(let n = 1 ;n <= boxes;n++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("box-difficile");
            newDiv.innerHTML=(n)
            newDivs.push(n)
            container.append(newDiv);
            clicked(newDiv,n)  
            }
        }
    })
    /* ti ho odiato!!! */
    function clicked(div,number){
        div.addEventListener("click",function(){
        div.classList.add('highlight');
    if(numeriGenerati.includes(number)){
        div.classList.remove('highlight');
        div.classList.add('errorbox');}
        alert("hai perso!")
    })
    }