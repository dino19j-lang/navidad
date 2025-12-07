import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {



///// muñeco con lenetes

///// CUERPO 
var cuerpoGeo = new THREE.SphereGeometry(4, 32, 32);
var cuerpoMat = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
});
var cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat);
///scene.add(cuerpo);
cuerpo.position.set(0, 4, 0);

///// CABEZA 
var cabezaGeo = new THREE.SphereGeometry(2.5, 32, 32);
var cabeza = new THREE.Mesh(cabezaGeo, cuerpoMat);
///scene.add(cabeza);
cabeza.position.set(0, 9, 0);

///// NARIZ 
var narizGeo = new THREE.ConeGeometry(0.5, 2, 16);
var narizMat = new THREE.MeshBasicMaterial({
  color: 0xFF6A00, 
});
var nariz = new THREE.Mesh(narizGeo, narizMat);
///scene.add(nariz);
nariz.position.set(0, 9, 2.3);
nariz.rotation.set(3.1416 / 2, 0, 0);

///// BOTONES 
var botonGeo = new THREE.SphereGeometry(0.5, 12, 12);
var botonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

var boton1 = new THREE.Mesh(botonGeo, botonMat);
var boton2 = new THREE.Mesh(botonGeo, botonMat);
var boton3 = new THREE.Mesh(botonGeo, botonMat);
///scene.add(boton1);
//scene.add(boton2);
///scene.add(boton3);

boton1.position.set(0, 6.5, 3.4);
boton2.position.set(0, 5.2, 3.7);
boton3.position.set(0, 4.0, 3.7);

///// lentes
var vidrioGeo = new THREE.BoxGeometry(1.5, 0.9, 0.2);
var vidrioMat = new THREE.MeshBasicMaterial({
  color: 0x000000,  
  side: THREE.DoubleSide,
});

// Lentes
var lenteIzq = new THREE.Mesh(vidrioGeo, vidrioMat);
var lenteDer = new THREE.Mesh(vidrioGeo, vidrioMat);
///scene.add(lenteIzq);
///scene.add(lenteDer);

lenteIzq.position.set(-1, 9.8, 2.5);
lenteDer.position.set(1, 9.8, 2.5);

// Puente lentes
var puenteGeo = new THREE.BoxGeometry(0.8, 0.3, 0.2);
var puente = new THREE.Mesh(puenteGeo, vidrioMat);
///scene.add(puente);
puente.position.set(0, 9.8, 2.5);

// Patas de los lentes
var pataGeo = new THREE.BoxGeometry(0.2, 0.2, 2);
var pataIzq = new THREE.Mesh(pataGeo, vidrioMat);
var pataDer = new THREE.Mesh(pataGeo, vidrioMat);
///scene.add(pataIzq);
///scene.add(pataDer);

pataIzq.position.set(-2., 9.9, 1.7);
pataDer.position.set(2, 9.8, 1.7);

pataIzq.rotation.set(0, 32 / 2, 0);
pataDer.rotation.set(0, -32 / 2, 0);

///// BRAZOS 
var brazoGeo = new THREE.CylinderGeometry(0.15, 0.15, 5, 8);
var brazoMat = new THREE.MeshBasicMaterial({ color: 0x8B4513 });

var brazoIzq = new THREE.Mesh(brazoGeo, brazoMat);
var brazoDer = new THREE.Mesh(brazoGeo, brazoMat);
///scene.add(brazoIzq);
///scene.add(brazoDer);

brazoIzq.position.set(-4.2, 5, 0);
brazoDer.position.set(4.2, 7, 0);

brazoIzq.rotation.set(0, 0, 7 / 3);
brazoDer.rotation.set(0, 0, -3.1416 / 3);

const snow=  new THREE.Group();
snow.add(cuerpo,cabeza,nariz,boton1,boton2,boton3,lenteDer,lenteIzq,
  puente, pataDer,pataIzq,brazoDer,brazoIzq );
snow.position.set(x,y,z);
return snow;  

}
