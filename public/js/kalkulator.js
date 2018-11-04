// penjumlahan.js
function kalkulator() {
    let angka = document.querySelectorAll('input');
    let i1= angka[0].value || 0; //angka pertama, jika tidak diisi, digantikan angka 0
    let i2= angka[1].value || 0; //angka kedua, jika tidak diisi, digantikan angka 0
    if(isNaN(i1) || isNaN(i2)) {
        alert('Harus memasukkan Angka (bulat atau pecahan).')
    }
    else {
        angka[2].value= parseInt(i1) + parseInt(i2)
    }
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);