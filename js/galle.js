import * as  THREE from "./three.module.js";
export default function nav({ x,y,z}) {

///galle
var galletageo = new THREE.CylinderGeometry(6, 8,1.2, 40);
var galletamat = new THREE.MeshBasicMaterial({
  color: 0xC68642, 
  side: THREE.DoubleSide,
});
var galleta = new THREE.Mesh(galletageo, galletamat);
galleta.position.set(0, 1, 0);


// Chispas 
var chispageo = new THREE.SphereGeometry(1, 15, 10);
var chispamat = new THREE.MeshBasicMaterial({
  color: 0x3B200C,
  side: THREE.DoubleSide,
});

var chispa1 = new THREE.Mesh(chispageo, chispamat);
chispa1.position.set(1.5, 2, 2);

var chispa2 = new THREE.Mesh(chispageo, chispamat);
chispa2.position.set(-2.2, 2, -1);

var chispa3 = new THREE.Mesh(chispageo, chispamat);
chispa3.position.set(2.5, 2, -2);

var chispa4 = new THREE.Mesh(chispageo, chispamat);
chispa4.position.set(-3, 2, 1.5);

var chispa5 = new THREE.Mesh(chispageo, chispamat);
chispa5.position.set(0.5, 2, -3);

var chispa6 = new THREE.Mesh(chispageo, chispamat);
chispa6.position.set(0, 2, 0);





const galle=  new THREE.Group();
galle.add(galleta,chispa1,chispa2,chispa3,chispa4,chispa5,chispa6);
galle.position.set(x,y,z);
return galle;  

}
