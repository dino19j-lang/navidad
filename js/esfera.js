import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {

////// ESFERA DE NAVIDAD

// esfera
var esferag = new THREE.SphereGeometry(5, 32, 32);
var esferam = new THREE.MeshBasicMaterial({
  color: 0x0264F0, 
  side: THREE.DoubleSide,
});
var esferan = new THREE.Mesh(esferag, esferam);
///scene.add(esfera);
esferan.position.set(0, 0, 0);


// Tapa 
var tapag = new THREE.CylinderGeometry(1.2, 1.2, 1.5, 16);
var tapamat = new THREE.MeshBasicMaterial({
  color: 0xD4AF37, 
  side: THREE.DoubleSide,
});
var tapa = new THREE.Mesh(tapag, tapamat);
//scene.add(tapa);
tapa.position.set(0, 5.8, 0);

// Arrito
var arogeo = new THREE.TorusGeometry(0.8, 0.15, 10, 30, 6.28);
var aromat = new THREE.MeshBasicMaterial({
  color: 0xFFD700,
  side: THREE.DoubleSide,
});
var aro = new THREE.Mesh(arogeo, aromat);
//scene.add(aro);
aro.position.set(0, 6.6, 0);





const esfera=  new THREE.Group();
esfera.add(esferan,tapa,aro);
esfera.position.set(x,y,z);
return esfera;  

}
