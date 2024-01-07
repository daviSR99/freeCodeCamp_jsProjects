function rot13(str) {
 
    var decrypted ="";
 for (var i =0; i<str.length; i++){
     var asciiNumber = str[i].charCodeAt();
     
     if(asciiNumber >=65 && asciiNumber <= 77)
     {
       decrypted += String.fromCharCode(asciiNumber+13);
     }
     else if(asciiNumber >=78 && asciiNumber <=90){
       decrypted += String.fromCharCode(asciiNumber - 13);
     } 
     else{
       decrypted +=str[i];
     }  
 }
 return decrypted;
 
 }
 
 rot13("SERR PBQR PNZC");