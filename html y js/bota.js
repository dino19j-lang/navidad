import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {

///// BOTA DE NAVIDAD 

// calcetin
var calgeo = new THREE.CylinderGeometry(3, 3, 10, 32);
var calmat = new THREE.MeshBasicMaterial({
  color: 0xC40022, 
  side: THREE.DoubleSide,
});
var calcetin = new THREE.Mesh(calgeo, calmat);
//scene.add(calcetin);
calcetin.position.set(0, 5, 0);

var piegeo = new THREE.CylinderGeometry(2.8, 2.9, 7, 42);
var pie = new THREE.Mesh(piegeo, calmat);
//scene.add(pie);
pie.position.set(0.6, -1, 0);
pie.rotation.set(0, 0, 1.57); 

// Punta 
var puntageo = new THREE.SphereGeometry(3, 16, 16);
var punta = new THREE.Mesh(puntageo, calmat);
//scene.add(punta);
punta.position.set(4, -1, 0);

// peluche
var bordegeo = new THREE.CylinderGeometry(3.5, 3.5, 2, 32);
var bordemat = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
});
var borde = new THREE.Mesh(bordegeo, bordemat);
//scene.add(borde);
borde.position.set(0, 10, 0);


const bota=  new THREE.Group();
bota.add(calcetin,pie,borde,punta);
bota.position.set(x,y,z);
return bota;  

}
