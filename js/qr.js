//Crear el qr
//Qr del header
const contenedorQR = document.getElementById('contenedorQR');
const QR = new QRCode(contenedorQR, 'https://github.com/MarceloContrerasGonzalez/PaginaUberIonicDesign/raw/master/TeLLevoAPP.apk');
//Qr del footer
const contenedorQR2 = document.getElementById('contenedorQR2');
const QR2 = new QRCode(contenedorQR2, 'https://github.com/MarceloContrerasGonzalez/PaginaUberIonicDesign/raw/master/TeLLevoAPP.apk');

//Boton de arriba
const contenedorBoton = document.getElementById('cont_boton');
//Boton del footer
const contenedorBoton2 = document.getElementById('cont_boton2');


let bolMobile = getMobileOS();

if (bolMobile == true){
    let text = document.getElementById('textQR')
    let text2 = document.getElementById('textQR2')
    //Si estas en movil, ocultar el qr
    text.style.display = "none"
    text2.style.display = "none"
    contenedorQR.style.display = "none";
    contenedorQR2.style.display = "none";
} else {
    //Si estas en pc, ocultar el boton de descarga
    contenedorBoton.style.display = "none";
    contenedorBoton2.style.display = "none";
}
//splat.textContent= plat.toString();

//Funcion para detectar si el aparato es un celular o pc
function getMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if ( /*(/windows phone/i.test(userAgent)) ||*/ (/android/i.test(userAgent)) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)){
        console.log(userAgent)
        return true;
    }
    // Windows Phone must come first because its UA also contains "Android"
   /* if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    */

    //return "pc";
    return false;
}