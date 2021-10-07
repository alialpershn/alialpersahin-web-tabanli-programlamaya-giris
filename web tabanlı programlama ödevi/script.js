



function toplam() {
    var deger1 = parseInt(document.getElementById('birincisayi').value);
    var deger2 = parseInt(document.getElementById('ikincisayi').value);
    document.getElementById('sonuc').textContent = deger1 + deger2;
}
function cikartma() {
    var deger1 = parseInt(document.getElementById('birincisayi').value);
    var deger2 = parseInt(document.getElementById('ikincisayi').value);
    document.getElementById('sonuc').textContent = deger1 - deger2;
}
function carpma() {
    var deger1 = parseInt(document.getElementById('birincisayi').value);
    var deger2 = parseInt(document.getElementById('ikincisayi').value);
    document.getElementById('sonuc').textContent = deger1 * deger2;
}
function bolme() {
    var deger1 = parseInt(document.getElementById('birincisayi').value);
    var deger2 = parseInt(document.getElementById('ikincisayi').value);
    document.getElementById('sonuc').textContent = deger1 / deger2;
}
