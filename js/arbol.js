import * as  THREE from "./three.module.js";
export default function nav({ x,y,z}) {

//madera
var trog = new THREE.CylinderGeometry(1, 1, 4, 16);
var tromat = new THREE.MeshBasicMaterial({
  color: 0x8B4513, 
  side: THREE.DoubleSide,
});
var tro = new THREE.Mesh(trog, tromat);
tro.position.set(0, -4, 0);

///hojas
var c1g = new THREE.ConeGeometry(6, 6, 16);
var c1m = new THREE.MeshBasicMaterial({
  color: 0x0A5C0A, 
  side: THREE.DoubleSide,
});
var c1 = new THREE.Mesh(c1g, c1m);
c1.position.set(0, -1, 0);

var c2g = new THREE.ConeGeometry(5, 5, 16);
var c2 = new THREE.Mesh(c2g, c1m);
c2.position.set(0, 2, 0);

var c3g = new THREE.ConeGeometry(4, 4, 16);
var c3 = new THREE.Mesh(c3g, c1m);
c3.position.set(0, 5, 0);






const arbol=  new THREE.Group();
arbol.add(c1,c2,c3,tro);
arbol.position.set(x,y,z);
return arbol;  

}
