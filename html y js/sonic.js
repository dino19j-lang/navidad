import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {

///// sonic 

/// SONIC POLY

// PANZA / CUERPO
var geometry05 = new THREE.SphereGeometry(7, 8, 8);
var materyal06 = new THREE.MeshBasicMaterial({ color: 0x0276FA });
var cuerpo = new THREE.Mesh(geometry05, materyal06);
////scene.add(cuerpo);
cuerpo.position.set(0, 20, 0);

// PECHO BEIGE
var geometryPanza = new THREE.SphereGeometry(4.5, 8, 8);
var materialPanza = new THREE.MeshBasicMaterial({ color: 0xFFEABD });
var panza = new THREE.Mesh(geometryPanza, materialPanza);
////scene.add(panza);
panza.position.set(0, 20, 3.5);


////barbilla

var geometryBarbilla =  new THREE.TorusGeometry(3,5,10);

var materialBarbilla = new THREE.MeshBasicMaterial({ color: 0xFFEABD });

var barbilla = new THREE.Mesh(geometryBarbilla, materialBarbilla);
//scene.add(barbilla);
barbilla.position.set(0, 31, 4);
barbilla.rotation.set(7.9, 0, 0);



// PIERNAS
var geometryPierna = new THREE.CylinderGeometry(1.2, 1.2, 10, 6);
var pierna1 = new THREE.Mesh(geometryPierna, materyal06);
///scene.add(pierna1);
pierna1.position.set(-2, 10, 0);

var pierna2 = new THREE.Mesh(geometryPierna, materyal06);
///scene.add(pierna2);
pierna2.position.set(2, 10, 0);

// CALCETINES
var geometryCalcetin = new THREE.TorusGeometry(2,2,3);
var materialCalcetin = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var calcetin1 = new THREE.Mesh(geometryCalcetin, materialCalcetin);
//7scene.add(calcetin1);
calcetin1.position.set(-2, 5, 0);
calcetin1.rotation.set(7.9, 0, 0);




var calcetin2 = new THREE.Mesh(geometryCalcetin, materialCalcetin);
//scene.add(calcetin2);
calcetin2.position.set(2, 5, 0);
calcetin2.rotation.set(7.9, 0, 0);

var materialRojo = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
var materialBlanco = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var materialAmarillo = new THREE.MeshBasicMaterial({ color: 0xFFD700 });

// ----- ZAPATO IZQUIERDO -----

// Parte trasera (cubo base) 
var materialRojo = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
var materialBlanco = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var materialAmarillo = new THREE.MeshBasicMaterial({ color: 0xFFD700 });

var geometryZapatoBase = new THREE.BoxGeometry(5, 4, 5);
var zapatoBase1 = new THREE.Mesh(geometryZapatoBase, materialRojo);
///scene.add(zapatoBase1);
zapatoBase1.position.set(-2, 2, 0);

// Parte delantera (punta)
var geometryZapatoPunta = new THREE.ConeGeometry(3.8, 5, 3); 
var zapatoPunta1 = new THREE.Mesh(geometryZapatoPunta, materialRojo);
///scene.add(zapatoPunta1);
zapatoPunta1.position.set(-2, 2, 5); 
zapatoPunta1.rotation.set(3.14 / 2, 0, 0); 

// Franja blanca
var geometryFranja = new THREE.BoxGeometry(5, 0.5, 4.2);
var franja1 = new THREE.Mesh(geometryFranja, materialBlanco);
///scene.add(franja1);
franja1.position.set(-2, 2, 2.8);
franja1.rotation.set(3.14 / 2, 0, 0); 

// Hebilla amarilla
var geometryHebilla = new THREE.BoxGeometry(1, 1, 0.2);
var hebilla1 = new THREE.Mesh(geometryHebilla, materialAmarillo);
//7scene.add(hebilla1);
hebilla1.position.set(-4.5, 2, 3);
hebilla1.rotation.set(0, 90, 0); 

// ----- ZAPATO DERECHO -----
var zapatoBase2 = new THREE.Mesh(geometryZapatoBase, materialRojo);
///scene.add(zapatoBase2);
zapatoBase2.position.set(2, 2, 0); 

var zapatoPunta2 = new THREE.Mesh(geometryZapatoPunta, materialRojo);
///scene.add(zapatoPunta2);
zapatoPunta2.position.set(2, 2, 5); 
zapatoPunta2.rotation.set(3.14 / 2, 0, 0);
var franja2 = new THREE.Mesh(geometryFranja, materialBlanco);
//scene.add(franja2);
franja2.position.set(2, 2, 2.8);
franja2.rotation.set(3.14 / 2, 0, 0); 

var hebilla2 = new THREE.Mesh(geometryHebilla, materialAmarillo);
///scene.add(hebilla2);
hebilla2.position.set(4.5, 2, 3);
hebilla2.rotation.set(0, 90, 0); 
// CABEZA (más grande)
var geometryCabeza = new THREE.SphereGeometry(10, 8, 8);
var cabeza = new THREE.Mesh(geometryCabeza, materyal06);
//scene.add(cabeza);
cabeza.position.set(0, 35, 0);

// OJOS
var geometryOjo = new THREE.SphereGeometry(5.5, 12, 12);
var materialOjo = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var ojo1 = new THREE.Mesh(geometryOjo, materialOjo);
//scene.add(ojo1);

ojo1.position.set(-1.5, 37, 5);

var ojo2 = new THREE.Mesh(geometryOjo, materialOjo);
//scene.add(ojo2);

ojo2.position.set(1.5, 37, 5);

// PUPILAS
var geometryPupila = new THREE.SphereGeometry(1.8, 8, 8);
var materialPupila = new THREE.MeshBasicMaterial({ color: 0x000000 });
var pupila1 = new THREE.Mesh(geometryPupila, materialPupila);
///scene.add(pupila1);
pupila1.position.set(-1.5, 37, 9.5);
pupila1.scale.set(0.6, 1.2, 1);

var pupila2 = new THREE.Mesh(geometryPupila, materialPupila);
//scene.add(pupila2);
pupila2.position.set(1.5, 37, 9.5);
pupila2.scale.set(0.6, 1.2, 1);


// nariz
var geometrynariz = new THREE.SphereGeometry(1.8, 8, 8);
var materialnariz = new THREE.MeshBasicMaterial({ color: 0x000000 });
var nariz = new THREE.Mesh(geometrynariz, materialnariz);
//scene.add(nariz);
nariz.position.set(0, 33, 10);
nariz.scale.set(0.6, 1.2, 1);
nariz.rotation.set(80, 0, -0.3);


// OREJAS
var geometryOreja = new THREE.ConeGeometry(5, 10, 8);
var oreja1 = new THREE.Mesh(geometryOreja, materyal06);
//scene.add(oreja1);
oreja1.position.set(-5, 43, -1);
oreja1.rotation.set(0, 0, 0.3);

var oreja2 = new THREE.Mesh(geometryOreja, materyal06);
//scene.add(oreja2);
oreja2.position.set(5, 43, -1);
oreja2.rotation.set(0, 0, -0.3);


// OREJA beige
var geometryOrejab = new THREE.ConeGeometry(3, 10, 9);
var materialOrejab = new THREE.MeshBasicMaterial({ color: 0xFFEABD });

var orejabe = new THREE.Mesh(geometryOrejab, materialOrejab);
///scene.add(orejabe);
orejabe.position.set(-5.3, 43, -0.1);
orejabe.rotation.set(0, 0, 0.3);


var orejabe2 = new THREE.Mesh(geometryOrejab, materialOrejab);
///scene.add(orejabe2);
orejabe2.position.set(5.3, 43, 0.1);
orejabe2.rotation.set(0, 0, -0.3);


// SPIKES 
var geometrySpike = new THREE.ConeGeometry(6, 12, 12);
var spike1 = new THREE.Mesh(geometrySpike, materyal06);
///scene.add(spike1);
spike1.position.set(0, 44, -9);
spike1.rotation.set(200, 0, 0);

var spike2 = new THREE.Mesh(geometrySpike, materyal06);
///scene.add(spike2);
spike2.position.set(0, 35, -12);
spike2.rotation.set(80, 0, 0);

var spike3 = new THREE.Mesh(geometrySpike, materyal06);
///scene.add(spike3);
spike3.position.set(0, 28, -13);
spike3.rotation.set(180, 0, 0);

var spike4 = new THREE.Mesh(geometrySpike, materyal06);
///scene.add(spike4);
spike4.position.set(4, 35, -12);
spike4.rotation.set(80, 0, 0);

var spike5 = new THREE.Mesh(geometrySpike, materyal06);
///scene.add(spike5);
spike5.position.set(-4, 35, -12);
spike5.rotation.set(80, 0, 0);

// SPIKES espalda
var geometrySpikes = new THREE.ConeGeometry(4, 8, 6);
var spikes1 = new THREE.Mesh(geometrySpikes, materyal06);
///scene.add(spikes1);
spikes1.position.set(-2, 20, -6);
spikes1.rotation.set(180, 0, 0);

var spikes2 = new THREE.Mesh(geometrySpikes, materyal06);
///scene.add(spikes2);
spikes2.position.set(2, 20, -5);
spikes2.rotation.set(180, 0, 0);


// BRAZO IZQUIERDO
var materialPiel = new THREE.MeshBasicMaterial({ color: 0xFFEABD });
var geometryBrazo = new THREE.CylinderGeometry(1, 1, 8, 6);
var brazo1 = new THREE.Mesh(geometryBrazo, materialPiel);
///scene.add(brazo1);
brazo1.position.set(-6, 23, 0);
brazo1.rotation.set(0.2, 0, -1.2);

var geometryAntebrazo = new THREE.CylinderGeometry(1, 1, 5, 6);
var antebrazo1 = new THREE.Mesh(geometryAntebrazo, materialPiel);
///scene.add(antebrazo1);
antebrazo1.position.set(-10.2, 20.1, -0.5);
antebrazo1.rotation.set(0.2, 0, 2.7);

// BRAZO DERECHO
var brazo2 = new THREE.Mesh(geometryBrazo, materialPiel);
///scene.add(brazo2);
brazo2.position.set(6, 23, 0);
brazo2.rotation.set(20, 0, -1.2);

var antebrazo2 = new THREE.Mesh(geometryAntebrazo, materialPiel);
////scene.add(antebrazo2);
antebrazo2.position.set(10, 21.5, 0.8);
antebrazo2.rotation.set(0.2, 0, -2.7);



// Guante bordes

var geometryborde = new THREE.TorusGeometry(1,2,20);
var materialCalcetin = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

var borde1 = new THREE.Mesh(geometryborde, materialCalcetin);
///scene.add(borde1);
borde1.position.set(-10, 19, 0);
borde1.rotation.set(7.9, 0, 0);



var borde2 = new THREE.Mesh(geometryborde, materialCalcetin);
///scene.add(borde2);
borde2.position.set(11, 20, 1);
borde2.rotation.set(7.9, 0, 0);


//// Guante izquierdo

var materialGuante = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var geometryGuante = new THREE.SphereGeometry(4, 5, 10);

var guante1 = new THREE.Mesh(geometryGuante, materialGuante);
///scene.add(guante1);
guante1.scale.set(1.3, 0.9, 1.2);
guante1.position.set(-11, 16, 1); // un poco hacia adelante

// Guante derecho
var guante2 = new THREE.Mesh(geometryGuante, materialGuante);
///scene.add(guante2);
guante2.scale.set(1.3, 0.9, 1.2);
guante2.position.set(12, 16, 1); // un poco hacia adelante




const sonic=  new THREE.Group();
sonic.add(panza,barbilla,cuerpo,pierna1,pierna2,calcetin1,calcetin2,zapatoBase1,zapatoPunta1,franja1,hebilla1,zapatoBase2,zapatoPunta2,franja2,hebilla2
,cabeza,ojo1,ojo2,pupila1,pupila2,nariz,oreja1,oreja2,orejabe,orejabe2,spike1,spike2,spike3,spike4,spike5,spikes1,spikes2,brazo1,antebrazo1
,brazo2,antebrazo2,borde1,borde2,guante1,guante2);
sonic.position.set(x,y,z);
return sonic;  

}
