import * as  THREE from "./three.module.js";
export default function nav({ x,y,z}) {

////foco de navidad

// punta
var puntag = new THREE.ConeGeometry(1.5, 3, 32);
var puntam = new THREE.MeshBasicMaterial({
  color: 0x00FF00, // punta
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.9,
});
var punta = new THREE.Mesh(puntag, puntam);
punta.position.set(0, -2, 0);
punta.rotation.set(34.5, 15, 0);

// foco
var focog = new THREE.SphereGeometry(2, 32, 32);
var focom = new THREE.MeshBasicMaterial({
  color: 0x00FF00,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.9,
});
var focon = new THREE.Mesh(focog, focom);
focon.position.set(0, 0, 0);

// boquilla
var boquillag = new THREE.CylinderGeometry(1.2, 1.2, 1.8, 16);
var boquillam = new THREE.MeshBasicMaterial({
  color: 0xA9A9A9,
  side: THREE.DoubleSide,
});
var boquilla = new THREE.Mesh(boquillag, boquillam);
boquilla.position.set(0, 2.2, 0);


const foco=  new THREE.Group();
foco.add(boquilla,focon,punta);
foco.position.set(x,y,z);
return foco;  

}
