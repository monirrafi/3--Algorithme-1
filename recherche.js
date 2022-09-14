let tab = [1,2,15,3,8]
let i=0;
let elem =40;
let taille =tab.length;
while(tab[i] != elem && i<taille){
    i++;
}
if(i==taille){
    console.log("introuvable"+i);
}else{
    console.log("existe"+i);
} 