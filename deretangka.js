function deretAngka(n) {
for (i=1;i<=n;i++)
 if (n%3 === 0) {
   console.log("NIO")
 }
 else if (n%5 === 0) {
   console.log('MIC')
 }
 else {
   console.log(n)
 }
}


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))
