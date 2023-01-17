

 function balikKata(kata) {
   jumlah = kata.length;
   jumlahHuruf = jumlah - 1;
   for (i=0;i<jumlah;i++){
  console.log(kata.charAt(jumlahHuruf));
  jumlahHuruf--;
}
 }

console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
