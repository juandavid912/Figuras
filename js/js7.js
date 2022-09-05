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


const material7 = new THREE.MeshStandardMaterial()
material7.color.set("#23FF00")
material7.metalness = 1;
material7.roughness = 0;

const ambientalight = new THREE.AmbientLight(0xffffff, 3);
scene.add(ambientalight)

const pointlight = new THREE.PointLight(0xffffff, 2)
scene.add(pointlight)
pointlight.position.set(5, 5, 5)

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

const cube = new THREE.Mesh( geometry, material7 );
scene.add( cube );

camera.position.z = 35;


//funcion 

function animate (){

    requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
	renderer.render( scene, camera );

}
animate();