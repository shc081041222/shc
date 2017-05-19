module.exports = function main(source) {
 
  
  var source2 = source.split("");
  var sum = 0;
  for (var i = 0; i < source2.length; i++) {
      
      source2[i] = parseInt(source2[i]);//字符型变成整型
      sum += source2[i];
	  
   }
   
   return sum;
}
