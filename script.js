var array=[];
var size=array.length;
function teste(){
    var numero= parseInt(document.getElementById("num").value)
  
    
    console.log(empurra(numero))
    document.getElementById("listaNumeros").innerText = array.join(","); 
    document.getElementById('num').value=''
    
}

function empurra(n){   
    array[size]=n;
    size++;
    return array;
}
function ordenarNumeros(array) {


for(let i=0;i<size-1;i++){
    for(let f=0;f<size-i-1;f++){
        if(array[f]>array[f+1]){
            let j=array[f]
            array[f]=array[f+1]
            array[f+1]=j;
        }
    }
}

    document.getElementById("listaOrdenada").innerText = array.join(", "); 
    
    
}
    
    








