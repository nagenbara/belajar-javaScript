var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, -99999999.342];

for (i=0; i<angka.length; i++) {
  var x = isFinite (angka[i])
  if (x==true) {
    var y = "Not Infinity";
  }
  else {
    var y = "Is Infinity";
  }
  console.log("Angka", angka[i], y)
}
