import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {

 ////REGALO 

  var geometry04 = new THREE.BoxGeometry(12,12,12,4,12,20);

var materyal05 = new THREE.MeshBasicMaterial({
        color: 0xF53F18, side: THREE.DoubleSide, 
     }) 

 var mesh08=new THREE.Mesh(geometry04,materyal05);
///scene.add(mesh08);
mesh08.position.set(0,0,0);

///// envoltura
var cintaVerGeo = new THREE.BoxGeometry(1, 13, 0.5);
var cintaMat = new THREE.MeshBasicMaterial({
  color: 0xFFD700, 
  side: THREE.DoubleSide,
});

var cintaVerticalGeo = new THREE.BoxGeometry(1, 13, 0.5);
var cintaMat = new THREE.MeshBasicMaterial({
  color: 0xFFD700, 
  side: THREE.DoubleSide,
});

// CIRCULO moño
var moñoCentroGeo = new THREE.SphereGeometry(2, 16, 16);
var moñoCentro = new THREE.Mesh(moñoCentroGeo, cintaMat);
///scene.add(moñoCentro);
moñoCentro.position.set(0, 6, 0);

// lazo
var lazoIzqGeo = new THREE.TorusGeometry(2, 1.4, 5, 10,3 );
var lazoIzq = new THREE.Mesh(lazoIzqGeo, cintaMat);
//scene.add(lazoIzq);
lazoIzq.position.set(-2, 5.5, 0);
lazoIzq.rotation.set(1.57, 43, 1.57);

var lazoDerGeo = new THREE.TorusGeometry(2, 1.4, 5, 10,3);
var lazoDer = new THREE.Mesh(lazoDerGeo, cintaMat);
///scene.add(lazoDer);
lazoDer.position.set(2, 5.5, 0);
lazoDer.rotation.set(1.57, 26, -1.57);


////FRANJA chida

var franjag = new THREE.BoxGeometry(2, 12.5, 13);
var franja1= new THREE.Mesh(franjag, cintaMat);
///scene.add(franja1);
franja1.position.set(0, 0, 0);

var franja2g = new THREE.BoxGeometry(13, 12.5, 2);
var franja2 = new THREE.Mesh(franja2g, cintaMat);
///scene.add(franja2);
franja2.position.set(0, 0, 0);



const regalo=  new THREE.Group();
regalo.add(mesh08,moñoCentro,lazoDer,lazoIzq,franja1,franja2);
regalo.position.set(x,y,z);
return regalo;  

}
