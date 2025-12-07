import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {
  
  
  ///// GORRO DE NAVIDAD

// tela roja
var telageo = new THREE.ConeGeometry(6.5, 10, 32);
var telamat = new THREE.MeshBasicMaterial({
  color: 0xD30000, 
  side: THREE.DoubleSide,
});
var gorro = new THREE.Mesh(telageo, telamat);
///scene.add(gorro);
gorro.position.set(0, 6, 0);
gorro.rotation.set(0., 0, 0); 

//borrego
var borgeo = new THREE.CylinderGeometry(6.8, 6.2, 2, 72);
var bormat = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
});
var borrego = new THREE.Mesh(borgeo, bormat);
//scene.add(borrego);
borrego.position.set(0, 0, 0);

// punta
var pungeo = new THREE.SphereGeometry(1.2, 16, 16);
var punmat = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
});
var punta = new THREE.Mesh(pungeo, punmat);
//scene.add(punta);
punta.position.set(0, 11, 1);







const gorra=  new THREE.Group();
gorra.add(punta,borrego,gorro);
gorra.position.set(x,y,z);
return gorra;  

}
