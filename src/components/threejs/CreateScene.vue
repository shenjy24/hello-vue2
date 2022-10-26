<template>
  <div id="container">
    <div id="Stats-output"></div>
    <div id="WebGL-output"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import Stats from 'stats-js'
import * as Dat from 'dat-gui'

export default {
  name: "CreateScene",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      sphere: null,
      plane: null,
      stats: null,
      step: 0,
      controls: {
        rotationSpeed: 0.02,
        bouncingSpeed: 0.03,
      }
    }
  },
  mounted() {
    this.firstScene()
  },
  methods: {
    firstScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new THREE.Scene();

      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMapEnabled = true;

      // show axes in the screen
      let axes = new THREE.AxesHelper(20);
      this.scene.add(axes);

      // create the ground plane
      let planeGeometry = new THREE.PlaneGeometry(60, 30);
      let planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
      this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
      this.plane.receiveShadow = true;

      // rotate and position the plane
      this.plane.rotation.x = -0.5 * Math.PI;
      this.plane.position.x = 15;
      this.plane.position.y = 0;
      this.plane.position.z = 0;

      // add the plane to the scene
      this.scene.add(this.plane);

      // create a cube
      let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
      let cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      this.cube.castShadow = true;

      // position the cube
      this.cube.position.x = -4;
      this.cube.position.y = 3;
      this.cube.position.z = 0;

      // add the cube to the scene
      this.scene.add(this.cube);

      // create a sphere
      let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
      let sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // position the sphere
      this.sphere.position.x = 20;
      this.sphere.position.y = 4;
      this.sphere.position.z = 2;
      this.sphere.castShadow = true;

      // add the sphere to the scene
      this.scene.add(this.sphere);

      // position and point the camera to the center of the scene
      this.camera.position.x = -30;
      this.camera.position.y = 40;
      this.camera.position.z = 30;
      this.camera.lookAt(this.scene.position);

      // add spotlight for the shadows
      let spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      spotLight.castShadow = true;
      this.scene.add(spotLight);

      // add the output of the renderer to the html element
      document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

      this.initStats()

      this.initDat()

      // render the scene
      this.renderScene()
    },

    initDat() {
      let gui = new Dat.GUI();
      gui.add(this.controls, 'rotationSpeed', 0, 0.5);
      gui.add(this.controls, 'bouncingSpeed', 0, 0.5);
    },

    renderScene() {
      this.stats.update();
      // rotate the cube around its axes
      this.cube.rotation.x += this.controls.rotationSpeed;
      this.cube.rotation.y += this.controls.rotationSpeed;
      this.cube.rotation.z += this.controls.rotationSpeed;

      // bounce the sphere up and down
      this.step += this.controls.bouncingSpeed;
      this.sphere.position.x = 20 + (10 * (Math.cos(this.step)));
      this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)));

      // render using requestAnimationFrame
      requestAnimationFrame(this.renderScene);
      this.renderer.render(this.scene, this.camera);
    },

    initStats() {
      // fps显示
      this.stats = new Stats();
      this.stats.setMode(0); // 0: fps, 1: ms
      // Align top-left
      this.stats.domElement.style.position = 'absolute';
      this.stats.domElement.style.left = '0px';
      this.stats.domElement.style.top = '0px';
      document.getElementById("Stats-output").appendChild(this.stats.domElement);
    },
  }
}
</script>

<style scoped>
#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
</style>
