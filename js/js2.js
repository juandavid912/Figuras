//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAB40FF);


var fogColor = new THREE.Color(0xAB40FF);
scene.background = fogColor; 
scene.fog = new THREE.Fog(fogColor, 0.60, 5);

//camaras

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight);

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x0400FF} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;


//funcion 

function animate (){

    requestAnimationFrame( animate );
    //cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );

}
animate();