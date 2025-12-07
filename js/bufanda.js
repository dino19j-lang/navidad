import * as  THREE from "./three.module.js";
export default function nav({ x,y,z}) {

///bufanda

// bufand
var bufgeo = new THREE.TorusGeometry(4, 0.6, 16, 100, 6.28);
var bufmat = new THREE.MeshBasicMaterial({
  color: 0xC00000, 
  side: THREE.DoubleSide,
});
var buf = new THREE.Mesh(bufgeo, bufmat);
buf.position.set(0, 0, 0);
buf.rotation.set(1.57, 0.3, 0);

// colgante1
var colganteg = new THREE.BoxGeometry(1.2, 6, 0.6);
var colgantem = new THREE.MeshBasicMaterial({
  color: 0xC00000,
  side: THREE.DoubleSide,
});
var colgante1 = new THREE.Mesh(colganteg, colgantem);
colgante1.position.set(2, -3, 1);

// colgante2
var colgante2 = new THREE.Mesh(colganteg, colgantem);
colgante2.position.set(-2, -3, -1);

// Bordes blancos 
var bordeg = new THREE.BoxGeometry(1.2, 0.5, 0.7);
var bordem = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.DoubleSide,
});

var borde1 = new THREE.Mesh(bordeg, bordem);
borde1.position.set(2, -6, 1);

var borde2 = new THREE.Mesh(bordeg, bordem);
borde2.position.set(-2, -6, -1);







const bufanda=  new THREE.Group();
bufanda.add(buf,colgante1,colgante2,borde1,borde2);
bufanda.position.set(x,y,z);
return bufanda;  

}
