import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {
  
  
///// CASA NAVIDEÑA

///// PAREDES 
var paredGeo = new THREE.BoxGeometry(15, 10, 15);
var paredMat = new THREE.MeshBasicMaterial({
  color: 0xB30000, 
  side: THREE.DoubleSide,
});
var paredes = new THREE.Mesh(paredGeo, paredMat);
///scene.add(paredes);
paredes.position.set(0, 5, 0);

///// TECHO 
var techoGeo = new THREE.ConeGeometry(12, 8, 4);
var techoMat = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF, 
  side: THREE.DoubleSide,
});
var techo = new THREE.Mesh(techoGeo, techoMat);
////scene.add(techo);
techo.position.set(0, 12, 0);
techo.rotation.set(0, Math.PI / 4, 0);

///// PUERTA
var puertaGeo = new THREE.BoxGeometry(3, 5, 0.3);
var puertaMat = new THREE.MeshBasicMaterial({
  color: 0x0B8F00, 
  side: THREE.DoubleSide,
});
var puerta = new THREE.Mesh(puertaGeo, puertaMat);
///scene.add(puerta);
puerta.position.set(0, 2.5, 7.7);

///// PERILLA 
var  perillaGeo = new THREE.SphereGeometry(0.4, 16, 16);
var  perillaMat = new THREE.MeshBasicMaterial({
  color: 0xFFD700,
  side: THREE.DoubleSide,
});
var  perilla = new THREE.Mesh( perillaGeo,  perillaMat);
//scene.add( perilla);
 perilla.position.set(1, 2, 8.1);

///// VENTANAS
var ventanaGeo = new THREE.BoxGeometry(3.3, 3.3, 0.9);
var ventanaMat = new THREE.MeshBasicMaterial({
  color: 0xFFEE99,  
  side: THREE.DoubleSide,
});

var ventana1 = new THREE.Mesh(ventanaGeo, ventanaMat);
var ventana2 = new THREE.Mesh(ventanaGeo, ventanaMat);
///scene.add(ventana1);
///scene.add(ventana2);
ventana1.position.set(-4, 6, 7.7);
ventana2.position.set(4, 6, 7.7);

///// CHIMENEA 
var chimGeo = new THREE.CylinderGeometry(1.2, 1.2, 6, 16);
var chimMat = new THREE.MeshBasicMaterial({
  color: 0x5A5A5A,
  side: THREE.DoubleSide,
});
var chimenea = new THREE.Mesh(chimGeo, chimMat);
///scene.add(chimenea);
chimenea.position.set(-4, 14, -2);



///// ADORNOS 
var adornoGeo = new THREE.SphereGeometry(0.9, 16, 16);
var adornoMatRojo = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
var adornoMatVerde = new THREE.MeshBasicMaterial({ color: 0x00FF00 });

//LUZ ROJA
var adornoR1 = new THREE.Mesh(adornoGeo, adornoMatRojo);
var adornoR2 = new THREE.Mesh(adornoGeo, adornoMatRojo);

// LUZ VERDE
var adornoV1 = new THREE.Mesh(adornoGeo, adornoMatVerde);
var adornoV2 = new THREE.Mesh(adornoGeo, adornoMatVerde);

///scene.add(adornoR1);
///scene.add(adornoR2);
///scene.add(adornoV1);
///scene.add(adornoV2);

adornoR1.position.set(-6, 9, 7.3);
adornoR2.position.set(6, 9, 7.3);
adornoV1.position.set(-2, 9, 7.3);
adornoV2.position.set(2, 9, 7.3);







const casa=  new THREE.Group();
casa.add(adornoV1,adornoV2,adornoR1,adornoR2,chimenea,ventana1,ventana2,
perilla, puerta, techo,paredes);
casa.position.set(x,y,z);
return casa;  

}
