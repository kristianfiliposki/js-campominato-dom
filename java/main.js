let boxes="";
let PcNs=[];
const container=document.getElementById("container");
let box=document.querySelector("#container div")


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
            Game();
        }

        function GenBox(){
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-facile");
            
            newDiv.addEventListener("click",function(){
                if(PcN==n){console.log("hai perso")}
                newDiv.classList.toggle('highlight');
            })
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
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-medio");
            for (i = 0;i< 16;i++ ) {
                PcN=`${Math.floor(Math.random() * 81)+1}`;
                PcNs.push(PcN);
                console.log(PcNs)
            }
            newDiv.addEventListener("click",function(){
                if(PcN==n){console.log("hai perso")}
                newDiv.classList.toggle('highlight');
            })
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
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-difficile");
            
            PcN=`${Math.floor(Math.random() * 49)}`;
            PcNs.push(PcN);
            console.log(PcNs)
            newDiv.addEventListener("click",function(){
                
            if(PcN==n){console.log("hai perso")}
            newDiv.classList.toggle('highlight');
            })

        }   

    }
    
})

function Game(){
    PcN=`${Math.floor(Math.random() * 49)}`;
            PcNs.push(PcN);
            console.log(PcNs)
            newDiv.addEventListener("click",function(){

            })

            return PcNs

} 



/* let i = 0;
while (i< 16 ) {
    PcN=`${Math.floor(Math.random() * 100)+1}`;
    i++
    PcNs.push(PcN);
}



console.log(PcNs) */
/* box.addEventListener("click",function(){
   if(box.innerHTML==PcNs[0]||box.innerHTML==PcNs[1]||box.innerHTML==PcNs[2]||box.innerHTML==PcNs[3]||box.innerHTML==PcNs[4]||box.innerHTML==PcNs[5]||box.innerHTML==PcNs[6]||box.innerHTML==PcNs[7]||box.innerHTML==PcNs[8]||box.innerHTML==PcNs[9]||box.innerHTML==PcNs[10]||box.innerHTML==PcNs[11]||box.innerHTML==PcNs[12]||box.innerHTML==PcNs[13]||box.innerHTML==PcNs[14]||box.innerHTML==PcNs[15]){
    
    if(box.innerHTML==PcNs[0]){
        console.log("hai perso");
    }
})
 */



