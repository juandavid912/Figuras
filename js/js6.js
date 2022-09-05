//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color("hsl(0, 98%, 51%)");




//camaras

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight);

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria


const geometry = new THREE.SphereGeometry( 15, 32, 16 );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("../imagenes/hola6.jpg")

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap
material1.flatShading = true

const cube = new THREE.Mesh( geometry, material1 );
scene.add( cube );

camera.position.z = 28;


//funcion 

function animate (){

    requestAnimationFrame( animate );
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.003;
    line.rotation.x += 0.003;
    line.rotation.y += 0.003;
	renderer.render( scene, camera );

}
animate();