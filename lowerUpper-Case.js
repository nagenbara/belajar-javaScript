
function upperlower(){
var kalimat1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
var kalimat2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
console.log(kalimat1.toLowerCase());
console.log(kalimat1.toUpperCase());
console.log(kalimat2.toLowerCase());
console.log(kalimat2.toUpperCase());
}
function codechart(){
var kalimat3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

for (i=0;i<6;i++){
console.log(kalimat3.charCodeAt(i));
}
}

upperlower();
codechart();
