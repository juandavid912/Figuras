//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAB40FF);


//camaras

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria


const geometry = new THREE.ConeGeometry(2, 3, 5);


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("../imagenes/hola1.jpg")

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line);

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap
material.flatShading = true
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//fin de la geometria

//geometria 2 

const geometry2 = new THREE.SphereGeometry( 15, 32, 16 );

const textureLoader2 = new THREE.TextureLoader();
const matcap2 = textureLoader2.load("../imagenes/hola1.jpg")

const edges2 = new THREE.EdgesGeometry(geometry2);
const line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line2);

const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap2
material2.flatShading = true
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

// fin de la geometria 2

//geometria 3

const geometry3 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const textureLoader3 = new THREE.TextureLoader();
const matcap3 = textureLoader3.load("../imagenes/hola1.jpg")

const edges3 = new THREE.EdgesGeometry(geometry3);
const line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line3);

const material3 = new THREE.MeshMatcapMaterial();
material3.matcap = matcap3
material3.flatShading = true
const capsule = new THREE.Mesh( geometry3, material3 );
scene.add( capsule );

// din de la geometria 3

//figura 4 

const geometry4 = new THREE.CylinderGeometry( 5, 5, 20, 32 );

const textureLoader4 = new THREE.TextureLoader();
const matcap4 = textureLoader3.load("../imagenes/hola1.jpg")

const edges4 = new THREE.EdgesGeometry(geometry4);
const line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0xffffff }));
scene.add(line4);


const material4 = new THREE.MeshMatcapMaterial();
material4.matcap = matcap4
material4.flatShading = true

const cylinder = new THREE.Mesh( geometry4, material4 );
scene.add( cylinder );

//fin de la figura 4

const control = new THREE.DragControls([cube, line, sphere,line2, capsule, line3, cylinder, line4 ], camera, renderer.domElement);

const flyControls = new THREE.FlyControls (camera, renderer.domElement)
flyControls.movementSpeed = 50;
flyControls.rollspeed = 50;
flyControls.autoForward = false;
flyControls.dragTolock =  false;

control.addEventListener("hoveron", function(event){
    console.log(event.object.material)
    event.object.material.wireframe = true
    event.object.scale.y *=2
})

control.addEventListener("hoveroff", function(event){
    console.log(event.object.material)
    event.object.material.wireframe = false
    event.object.scale.y /=2
})


camera.position.z = 35;
cube.position.z = 20;
line.position.z = 20;
cube.position.x = -15;
line.position.x = -15;
sphere.position.z = -40;
line2.position.z = -40;
sphere.position.x = -30;
line2.position.x = -30;
capsule.position.z = 25;
line3.position.z = 25;
capsule.position.x = 0;
line3.position.x = 0;
cylinder.position.x = 20;
line4.position.x = 20;





//funcion 

function animate() {

    requestAnimationFrame(animate);
/*     cube.rotation.x += 0.01;
    cube.rotation.y += 0.003;
    line.rotation.x += 0.01;
    line.rotation.y += 0.003; */
    renderer.render(scene, camera);
    flyControls.update(0.5)

}
animate();

