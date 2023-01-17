var kata1="Semangat...";
var kata2="*****";
console.log(kata1.repeat(5));
console.log("")

for (x=1;x<2;x++) {
  for (y=1;y<=20;y+=4) {
   console.log(kata2.repeat(y));
  }
}

for (m=1;m<2;m++) {
  for (n=21;n>0;n=n-4) {
     console.log(kata2.repeat(n));
  }
}
