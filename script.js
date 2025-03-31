document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#title", { opacity: 0, y: -50, duration: 1.5 });
    gsap.from("#intro", { opacity: 0, x: -100, duration: 1.5, delay: 0.5 });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("threeCanvas") });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: "white" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 5).normalize();
    scene.add(light);

    camera.position.z = 5;
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera); 
    }
    animate();
   
});
