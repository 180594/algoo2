let tab1= [3,1,7,9];
let tab2=[2,4,1,9,3,];
var test;
var sum1 =0;
var sum2 =0;
for (let i = 0; i < tab1.length; i++) {
    test= false;
    for ( let j=0; j<tab2.length;j++){
        if(tab1[i]===tab2[j]){
            test= true
        }
    }
    if(test===false){
        sum1+= tab1[i]
    }
    console.log(sum1);
    
}
for (let i = 0; i < tab2.length; i++) {
    test= false;
    for ( let j=0; j<tab1.length;j++){
        if(tab2[i]===tab1[j]){
            test= true
        }
    }
    if(test===false){
        sum1+= tab2[i]
    }
   console.log(sum1); 
    
}

for (let i = 0; i < tab1.length; i++) {
    test= false;
    for ( let j=0; j<tab2.length;j++){
        if(tab1[i]===tab2[j]){
            test= true
        }
    }
    if(test===true){
        sum2+= tab1[i]
    }
    
    
}
for (let i = 0; i < tab2.length; i++) {
    test= false;
    for ( let j=0; j<tab1.length;j++){
        if(tab2[i]===tab1[j]){
            test= true
        }
    }
    if(test===true){
        sum2+= tab2[i]
    }
   console.log(sum2); 
    
}