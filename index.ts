const _cuaca: string ="hujan";

if (_cuaca === "tidak hujan") {
    const _aksi = "kita tidak pergi jalan2"
    console.log(_aksi);
}
else {
  const _aksi = "kita pergi jalan2";
  console.log(_aksi);
}


//chaining condition
const _umur: number = 18;
let _aksi: string;
if(_umur>17 && _umur<21) {
     _aksi ="boleh buat KTP";
    console.log(_aksi);
}else if (_umur>20) {
    _aksi ="harusnya sudah punya KTP";
    console.log(_aksi);
}else {
    _aksi ="belum lahir";
    console.log(_aksi);
}

//switch case digunakan untuk comparison ===
const _buah: string="pir"

switch(_buah) {
    case "apel":
    console.log("Harga buah apel = 5000")
    break; //utk menyetop
    case "jeruk":
    console.log("Harga buah jeruk = 7000")
    default: //sama kaya else
    console.log("Harga buah xxx = 1000")
}

//falsy
if(NaN) {
console.log("Jalan");
}

//looping
for (let i: number=1; i<=10; i++){
    console.log(i);
}

//while loop
let  n: number=10;
while (n>0) {
    console.log(n);

    n--;
}

//do while loop




