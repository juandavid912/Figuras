


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

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("../imagenes/hola3.jpg") 

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap
material1.flatShading = true


const cube = new THREE.Mesh( geometry, material1 );
scene.add( cube );

camera.position.z = 3;


//funcion 

function animate (){

    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
	renderer.render( scene, camera );

}
animate();
