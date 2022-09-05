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


const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material1 = new THREE.MeshNormalMaterial();
material1.flatShading = true

const cube = new THREE.Mesh( geometry, material1 );
scene.add( cube );

camera.position.z = 28;


//funcion 

function animate (){

    requestAnimationFrame( animate );
    cube.rotation.x += 0.007;
    cube.rotation.y += 0.007;
    line.rotation.x += 0.007;
    line.rotation.y += 0.007;
	renderer.render( scene, camera );

}
animate();