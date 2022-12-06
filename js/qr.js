//Crear el qr
const contenedorQR = document.getElementById('contenedorQR');
const QR = new QRCode(contenedorQR, 'https://github.com/MarceloContrerasGonzalez/PaginaUberIonicDesign/raw/master/TeLLevoAPP.apk');

const contenedorBoton = document.getElementById('cont_boton');


let bolMobile = getMobileOS();

if (bolMobile == true){
    let text = document.getElementById('textQR')
    //Si estas en movil, ocultar el qr
    text.style.display = "none"
    contenedorQR.style.display = "none";
} else {
    //Si estas en pc, ocultar el boton de descarga
    contenedorBoton.style.display = "none";
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

