module.exports = function check(str, bracketsConfig) {
  // your solution
  var brackets = str.split(''),
  k=Boolean,
    j;
  for (j=0;j<bracketsConfig.length;j++){
    i=0;
   do {
      if(brackets[i]==bracketsConfig[j][0] && brackets[i+1]==bracketsConfig[j][1]){
      brackets.splice(i,2);
        i=0;
      j=0}
      else {
        i++}    
  } while(i<brackets.length)}
  if (brackets.length == 0 ) {
    k=true;
} else k = false;
  return k;
}
