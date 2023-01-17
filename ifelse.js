var siswa1 = 190;
var siswa2 = 165;
var siswa3 = 190.2;
var tertinggi;
var tengah;
var terpendek;

if (siswa1 > siswa2 && siswa1 > siswa3) {
    tertinggi = "siswa1"
  if (siswa2 > siswa3) {
    tengah = "siswa2"
    terpendek = "siswa3"
  } else {
    tengah = "siswa3"
    terpendek = "siswa2"
  }
}
 else if (siswa2 > siswa1 && siswa2 > siswa3) {
    tertinggi = "siswa2"
  if (siswa1 > siswa3) {
    tengah = "siswa1"
    terpendek = "siswa3"
  } else {
    tengah = "siswa3"
    terpendek = "siswa1"
  }
} else if (siswa3 > siswa1 && siswa3> siswa2) {
    tertinggi = "siswa3"
  if (siswa1 > siswa2) {
    tengah = "siswa1"
    terpendek = "siswa2"
  } else {
    tengah = "siswa2"
    terpendek = "siswa1"
  }
}

console.log(tertinggi, tengah, terpendek);
