<template>
  <div class="container">
    <div id="Stats-output"></div>
    <div id="WebGL-output"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import Stats from 'stats-js'
import * as Dat from 'dat-gui'
import TrackballControls from 'three-trackballcontrols'
import {ConvexGeometry} from 'three/examples/jsm/geometries/ConvexGeometry'
import {ParametricGeometry} from 'three/examples/jsm/geometries/ParametricGeometry'
import {ParametricGeometries} from "three/examples/jsm/geometries/ParametricGeometries"
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js"

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
      trackballControls: null,
      clock: null,
      planeGeometry: null,
      controls: {
        rotationSpeed: 0.02,
        bouncingSpeed: 0.03,
        numberOfObjects: 0
      }
    }
  },
  mounted() {
    this.createScene()
    this.controls.numberOfObjects = this.scene.children
    window.addEventListener('resize', this.onResize, false)
  },
  methods: {
    createScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new THREE.Scene();

      // 雾化效果
      // this.scene.fog = new THREE.Fog(0xffffff, 0.015, 100)
      this.scene.fog = new THREE.FogExp2(0xffffff, 0.01)

      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;   // 开启阴影效果

      // show axes in the screen
      let axes = new THREE.AxesHelper(20);
      this.scene.add(axes);

      // create the ground plane
      this.planeGeometry = new THREE.PlaneGeometry(60, 30);
      let planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
      this.plane = new THREE.Mesh(this.planeGeometry, planeMaterial);
      this.plane.receiveShadow = true;  // 设置地面接受阴影

      // rotate and position the plane
      this.plane.rotation.x = -0.5 * Math.PI;
      this.plane.position.x = 15;
      this.plane.position.y = 0;
      this.plane.position.z = 0;

      // add the plane to the scene
      this.scene.add(this.plane);

      // create a cube
      let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
      let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: true});
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      this.cube.castShadow = true;  // 设置投射阴影，此处会投射到地面上

      // position the cube
      this.cube.position.x = -4;
      this.cube.position.y = 3;
      this.cube.position.z = 0;

      // add the cube to the scene
      this.scene.add(this.cube);

      // create a sphere
      let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
      // 基础材质对光源无反应
      let sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // position the sphere
      this.sphere.position.x = 20;
      this.sphere.position.y = 4;
      this.sphere.position.z = 2;
      this.sphere.castShadow = true;  // 设置投射阴影

      // add the sphere to the scene
      this.scene.add(this.sphere);

      // position and point the camera to the center of the scene
      this.camera.position.x = -30;
      this.camera.position.y = 40;
      this.camera.position.z = 30;
      this.camera.lookAt(this.scene.position);

      // add subtle ambient lighting
      let ambientLight = new THREE.AmbientLight(0x0c0c0c);
      this.scene.add(ambientLight);

      // add spotlight for the shadows
      let spotLight = new THREE.SpotLight(0xFFFFFF);
      spotLight.position.set(-40, 40, -15);
      spotLight.castShadow = true;
      spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      spotLight.shadow.camera.far = 130;
      spotLight.shadow.camera.near = 40;
      this.scene.add(spotLight);

      // add the output of the renderer to the html element
      document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

      this.initStats()

      this.initDat()

      this.initTrackballControls()

      this.createBoundingWall()

      this.createHouse()

      this.addGeometries()

      // render the scene
      this.renderScene()
    },

    removeCube() {
      let allChildren = this.scene.children
      let lastObject = allChildren[allChildren.length - 1]
      if (lastObject instanceof THREE.Mesh) {
        this.scene.remove(lastObject)
        this.controls.numberOfObjects = this.scene.children.length
      }
    },

    addCube() {
      let cubeSize = Math.ceil(Math.random() * 3)
      let cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      let cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.castShadow = true
      cube.name = "cube-" + this.scene.children.length

      // position the cube randomly in the scene
      cube.position.x = -30 + Math.round((Math.random() * this.planeGeometry.parameters.width));
      cube.position.y = Math.round((Math.random() * 5));
      cube.position.z = -20 + Math.round((Math.random() * this.planeGeometry.parameters.height));

      // add the cube to the scene
      this.scene.add(cube);
      this.numberOfObjects = this.scene.children.length;
    },

    outputObjects() {
      console.log(this.scene.children)
    },

    onResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    initDat() {
      let gui = new Dat.GUI();
      gui.add(this.controls, 'rotationSpeed', 0, 0.5);
      gui.add(this.controls, 'bouncingSpeed', 0, 0.5);
      gui.add(this, 'addCube');
      gui.add(this, 'removeCube');
      gui.add(this, 'outputObjects');
      gui.add(this.controls, 'numberOfObjects').listen();
    },

    renderScene() {
      // 移动视角
      this.trackballControls.update(this.clock.getDelta())
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

    createBoundingWall() {
      let wallLeft = new THREE.BoxGeometry(70, 2, 2);
      let wallRight = new THREE.BoxGeometry(70, 2, 2);
      let wallTop = new THREE.BoxGeometry(2, 2, 50);
      let wallBottom = new THREE.BoxGeometry(2, 2, 50);

      let wallMaterial = new THREE.MeshLambertMaterial({
        color: 0xa0522d
      });

      let wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
      let wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
      let wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
      let wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);

      wallLeftMesh.position.set(15, 1, -25);
      wallRightMesh.position.set(15, 1, 25);
      wallTopMesh.position.set(-19, 1, 0);
      wallBottomMesh.position.set(49, 1, 0);

      this.scene.add(wallLeftMesh);
      this.scene.add(wallRightMesh);
      this.scene.add(wallBottomMesh);
      this.scene.add(wallTopMesh);

    },
    createHouse() {
      let roof = new THREE.ConeGeometry(5, 4);
      let base = new THREE.CylinderGeometry(5, 5, 6);

      // create the mesh
      let roofMesh = new THREE.Mesh(roof, new THREE.MeshLambertMaterial({
        color: 0x8b7213
      }));
      let baseMesh = new THREE.Mesh(base, new THREE.MeshLambertMaterial({
        color: 0xffe4c4
      }));

      roofMesh.position.set(25, 8, 0);
      baseMesh.position.set(25, 3, 0);

      roofMesh.receiveShadow = true;
      baseMesh.receiveShadow = true;
      roofMesh.castShadow = true;
      baseMesh.castShadow = true;

      this.scene.add(roofMesh);
      this.scene.add(baseMesh);
    },

    initTrackballControls() {
      this.trackballControls = new TrackballControls(this.camera, this.renderer.domElement);
      this.trackballControls.rotateSpeed = 1.0;
      this.trackballControls.zoomSpeed = 1.2;
      this.trackballControls.panSpeed = 0.8;
      this.trackballControls.noZoom = false;
      this.trackballControls.noPan = false;
      this.trackballControls.staticMoving = true;
      this.trackballControls.dynamicDampingFactor = 0.3;
      this.trackballControls.keys = [65, 83, 68];

      this.clock = new THREE.Clock()
    },

    addGeometries() {
      let geoms = []
      geoms.push(new THREE.CylinderGeometry(1, 4, 4))
      geoms.push(new THREE.BoxGeometry(2, 2, 2))
      geoms.push(new THREE.SphereGeometry(2))
      geoms.push(new THREE.IcosahedronGeometry(4))

      let points = [
        new THREE.Vector3(2, 2, 2),
        new THREE.Vector3(2, 2, -2),
        new THREE.Vector3(-2, 2, -2),
        new THREE.Vector3(-2, 2, 2),
        new THREE.Vector3(2, -2, 2),
        new THREE.Vector3(2, -2, -2),
        new THREE.Vector3(-2, -2, -2),
        new THREE.Vector3(-2, -2, 2),
      ]
      geoms.push(new ConvexGeometry(points))

      // create a lathgeometry
      let pts = []
      let detail = .1
      let radius = 3
      for (let angle = 0.0; angle < Math.PI; angle += detail) {
        pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
      }
      geoms.push(new THREE.LatheGeometry(pts, 12))

      geoms.push(new THREE.OctahedronGeometry(3))

      geoms.push(new ParametricGeometry(ParametricGeometries.mobius3d, 20, 10));

      geoms.push(new THREE.TetrahedronGeometry(3));

      geoms.push(new THREE.TorusGeometry(3, 1, 10, 10));

      geoms.push(new THREE.TorusKnotGeometry(3, 0.5, 50, 20));

      let j = 0;
      for (let i = 0; i < geoms.length; i++) {
        // let cubeMaterial = new THREE.MeshLambertMaterial({
        //   wireframe: true,
        //   color: Math.random() * 0xffffff
        // });

        let materials = [
          new THREE.MeshLambertMaterial({
            color: Math.random() * 0xffffff
          }),
          new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true
          })
        ];

        let mesh = createMultiMaterialObject(geoms[i], materials);
        mesh.traverse(function (e) {
          e.castShadow = true
        });

        //var mesh = new THREE.Mesh(geoms[i],materials[i]);
        //mesh.castShadow=true;
        mesh.position.x = -24 + ((i % 4) * 12);
        mesh.position.y = 4;
        mesh.position.z = -8 + (j * 12);

        if ((i + 1) % 4 === 0) {
          j++;
        }
        this.scene.add(mesh);
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  overflow: hidden;
}
</style>
