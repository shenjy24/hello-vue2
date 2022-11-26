<template>
    <div id="container"></div>
</template>

<script>
import * as THREE from 'three'
import Stats from 'stats-js'
import * as Dat from 'dat-gui'
import TrackballControls from 'three-trackballcontrols'

export default {
  name: "HelloThreeJS",
  data() {
    return {
      step: 0
    }
  },
  mounted() {
    this.renderer
    this.camera
    this.scene
    this.light
    this.gui
    this.axesHelper
    this.stats
    this.trackballControls
    this.clock
    this.sphere
    this.cube
    this.controls

    // 执行
    this.execute()
    // 窗口大小变化
    window.onresize = this.onWindowResize
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene()
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
      // 设置相机位置
      this.camera.position.x = -30
      this.camera.position.y = 40
      this.camera.position.z = 30
      // 设置相机指向的位置 默认0，0，0
      this.camera.lookAt(this.scene.position)
    },
    initHelper() {
      this.axesHelper = new THREE.AxesHelper(10)
      this.scene.add(this.axesHelper)
    },
    initRender() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      // 设置背景色
      this.renderer.setClearColor(new THREE.Color(0x000000))
      document.getElementById('container').appendChild(this.renderer.domElement)
    },
    initStats() {
      this.stats = new Stats()
      document.getElementById('container').appendChild(this.stats['dom'])
    },
    initModel() {
      // 创建一个球体
      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      // 创建球体材质
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      // 开启阴影
      this.sphere.castShadow = true
      // 设置位置
      this.sphere.position.x = 20
      this.sphere.position.y = 4
      this.sphere.position.z = 2
      // 添加球体
      this.scene.add(this.sphere)

      // 创建一个立方体 长宽高为4
      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      // 创建立方体材质
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      // 立方体开启投影效果
      this.cube.castShadow = true
      // 设置位置
      this.cube.position.x = -4
      this.cube.position.y = 3
      this.cube.position.z = 0
      // 添加立方体
      this.scene.add(this.cube)

      // 创建一个几何平面，宽60，高20
      const planeGeometry = new THREE.PlaneGeometry(60, 20)
      // 创建带颜色材质,更换为MeshLambertMaterial材质，去掉网格结构
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
      this.plane = new THREE.Mesh(planeGeometry, planeMaterial)
      // 平面开启接收阴影效果
      this.plane.receiveShadow = true
      // 设置平面角度和位置
      this.plane.rotation.x = -0.5 * Math.PI
      this.plane.position.x = 15
      this.plane.position.y = 0
      this.plane.position.z = 0
      // 添加平面
      this.scene.add(this.plane)
    },
    initLight() {
      // 添加光源
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      spotLight.castShadow = true
      this.scene.add(spotLight)
    },
    initGui() {
      this.controls = {
        rotationSpeed: 0.02,
        bouncingSpeed: 0.03
      }

      const gui = new Dat.GUI()
      gui.add(this.controls, 'rotationSpeed', 0, 0.5)
      gui.add(this.controls, 'bouncingSpeed', 0, 0.5)
    },
    initControls() {
      this.trackballControls = new TrackballControls(this.camera, this.renderer.domElement)
      this.trackballControls.rotateSpeed = 1.0
      this.trackballControls.zoomSpeed = 1.2
      this.trackballControls.panSpeed = 0.8
      this.trackballControls.noZoom = false
      this.trackballControls.noPan = false
      this.trackballControls.staticMoving = true
      this.trackballControls.dynamicDampingFactor = 0.3
      this.trackballControls.keys = [65, 83, 68]
    },
    initClock() {
      this.clock = new THREE.Clock()
    },
    render() {
      this.trackballControls.update(this.clock.getDelta())
      this.stats.update()

      // rotate the this.cube around its axes
      this.cube.rotation.x += this.controls['rotationSpeed']
      this.cube.rotation.y += this.controls['rotationSpeed']
      this.cube.rotation.z += this.controls['rotationSpeed']

      // bounce the this.sphere up and down['']
      this.step += this.controls['bouncingSpeed']
      this.sphere.position.x = 20 + (10 * (Math.cos(this.step)))
      this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)))

      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    execute() {
      // 初始化场景
      this.initScene()
      // 初始化摄像头
      this.initCamera()
      // 初始化三维坐标系
      this.initHelper()
      // 初始化辅助UI
      this.initGui()
      // 初始化帧数显示工具
      this.initStats()
      // 初始化时钟工具
      this.initClock()
      // 初始化模型
      this.initModel()
      // 初始化渲染器
      this.initRender()
      // 初始化光源
      this.initLight()
      // 初始化控制器
      this.initControls()
      // 执行渲染
      this.render()
    }
  }
}
</script>

<style scoped>

</style>
