


//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAB40FF);

var loader = new THREE.TextureLoader();
loader.load("../imagenes/pain.webp", function(texture){
    scene.background = texture;
});


//camaras

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight);

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria


const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 'red', wireframe: true} );
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
