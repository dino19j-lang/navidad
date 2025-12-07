import * as  THREE from "./three.module.js";
export default function ofre({ x,y,z}) {
  
  
////arbol chido

///// TRONCO
var troncoGeo = new THREE.CylinderGeometry(1.5, 1.5, 4, 16);
var troncoMat = new THREE.MeshBasicMaterial({
  color: 0x8B4513,
  side: THREE.DoubleSide,
});
var tronco = new THREE.Mesh(troncoGeo, troncoMat);

tronco.position.set(0, 2, 0);

///// NIVEL 1 
var nivel1Geo = new THREE.ConeGeometry(7, 7, 32);
var nivelMat = new THREE.MeshBasicMaterial({
  color: 0x0D7A0D,
  side: THREE.DoubleSide,
});
var nivel1 = new THREE.Mesh(nivel1Geo, nivelMat);
nivel1.position.set(0, 6, 0);

///// NIVEL 2 
var nivel2Geo = new THREE.ConeGeometry(6, 6, 32);
var nivel2 = new THREE.Mesh(nivel2Geo, nivelMat);

nivel2.position.set(0, 10, 0);

///// NIVEL 3 
var nivel3Geo = new THREE.ConeGeometry(5, 5, 32);
var nivel3 = new THREE.Mesh(nivel3Geo, nivelMat);

nivel3.position.set(0, 13.5, 0);

///// CINTA 
var cintaMat = new THREE.MeshBasicMaterial({
  color: 0xFFD700, 
  side: THREE.DoubleSide
});


var cintaGeo1 = new THREE.TorusGeometry(5.5, 0.45, 8, 40, 9);
var cinta1 = new THREE.Mesh(cintaGeo1, cintaMat);

cinta1.rotation.set(23.5, 75.3, 0);
cinta1.position.set(0, 5, 0);


var cintaGeo2 = new THREE.TorusGeometry(5, 0.45, 8, 40, 9);
var cinta2 = new THREE.Mesh(cintaGeo2, cintaMat);

cinta2.rotation.set(23.5, 75.3, 0);
cinta2.position.set(0, 8.5, 0);

var cintaGeo3 = new THREE.TorusGeometry(4.6, 0.45, 8, 40, 9);
var cinta3 = new THREE.Mesh(cintaGeo3, cintaMat);

cinta3.rotation.set(23.5, 75.3, 0);
cinta3.position.set(0, 12, 0);

////// ESFERA DE NAVIDAD

// esfera
var esferag = new THREE.SphereGeometry(5, 32, 32);
var esferam = new THREE.MeshBasicMaterial({
  color: 0x0264F0, 
  side: THREE.DoubleSide,
});

var esferam1 = new THREE.MeshBasicMaterial({
  color: 0xF02929, 
  side: THREE.DoubleSide,
});
var esferam2 = new THREE.MeshBasicMaterial({
  color: 0x5BD900, 
  side: THREE.DoubleSide,
});
var esferam3 = new THREE.MeshBasicMaterial({
  color: 0xEBDF3D, 
  side: THREE.DoubleSide,
});

var esferan = new THREE.Mesh(esferag, esferam);

esferan.position.set(0, 0, 0);

var esferan2 = new THREE.Mesh(esferag, esferam1);

esferan.position.set(0, 0, 0);

var esferan3 = new THREE.Mesh(esferag, esferam2);

esferan.position.set(0, 0, 0);

var esferan4 = new THREE.Mesh(esferag, esferam3);

esferan.position.set(0, 0, 0);


// Tapa 
var tapag = new THREE.CylinderGeometry(1.2, 1.2, 1.5, 16);
var tapamat = new THREE.MeshBasicMaterial({
  color: 0xD4AF37, 
  side: THREE.DoubleSide,
});
var tapa = new THREE.Mesh(tapag, tapamat);

tapa.position.set(0, 5.8, 0);

// Arrito
var arogeo = new THREE.TorusGeometry(0.8, 0.15, 10, 30, 6.28);
var aromat = new THREE.MeshBasicMaterial({
  color: 0xFFD700,
  side: THREE.DoubleSide,
});
var aro = new THREE.Mesh(arogeo, aromat);

aro.position.set(0, 6.6, 0);




var esfera1 = new THREE.Group();
    esfera1.add(aro,tapa,esferan);
    esfera1.position.set(-4.5,5.6,0)
 
esfera1.scale.set(-0.2,0.2, 0.2);


var esfera2 = new THREE.Group();
    esfera2.add(aro,tapa,esferan2);
    esfera2.position.set(3.5,10,0)
 
esfera2.scale.set(-0.2,0.2, 0.2);



var esfera3 = new THREE.Group();
    esfera3.add(aro,tapa,esferan3);
    esfera3.position.set(-4.5,10,0)

esfera3.scale.set(-0.2,0.2, 0.2);


var esfera4 = new THREE.Group();
    esfera4.add(aro,tapa,esferan4);
    esfera4.position.set(0,1.5,5)
  
esfera4.scale.set(-0.2,0.2, 0.2);

var az1 = esfera1.clone();

    az1.position.set(0,1.5,-5)


var az2 = esfera1.clone();

    az2.position.set(0,10,-4)

    
var ve1 = esfera3.clone();

    ve1.position.set(3.5,1.5,0)

    var ve2 = esfera3.clone();

    ve2.position.set(0,6,5)

 var ro1 = esfera2.clone();

    ro1.position.set(0,6,-4)

var ro2 = esfera2.clone();

    ro2.position.set(-4,1.5,0)

var ama1 = esfera4.clone();
    
    ama1.position.set(0,10, 4.3)

var ama2 = esfera4.clone();

    ama2.position.set(5.5,6,0)







const arna=  new THREE.Group();
arna.add(tronco,nivel1,nivel2,nivel3,cinta1,cinta2,cinta3
,esfera1,esfera2,esfera3,esfera4,az1,az2,ve1,ve2,ro1,ro2,
ama1,ama2);
arna.position.set(x,y,z);
return arna;  

}
