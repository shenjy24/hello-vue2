<template>
  <div class="container">
    <div id="stats-output"></div>
    <div id="webgl-output"></div>
  </div>
</template>

<script>

import * as THREE from 'three'
import _ThreeBSP from '@/js/ThreeBSP.js'
import getThreeBSP from 'threebsp'

const ThreeBSP = getThreeBSP(THREE)

export default {
  name: "SolidGeometry",
  data() {
    return {
      scene: null,
      camera: null
    }
  },
  mounted() {
    this.useThreeBSP()
  },
  methods: {
    useThreeBSP() {
      this.scene = new THREE.Scene();
      // 定义相机
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.x = -30
      this.camera.position.y = 40
      this.camera.position.z = 30
      this.camera.lookAt(this.scene.position)
      // 定义渲染器
      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.getElementById('webgl-output').appendChild(this.renderer.domElement)

      // 定义墙体
      let cubeGeometry = new THREE.BoxGeometry(1, 10, 30)
      let cube = new THREE.Mesh(cubeGeometry)
      // 定义窗户
      let door = new THREE.BoxGeometry(1, 8, 15)
      let doorMesh = new THREE.Mesh(door)
      doorMesh.position.z = 0
      // 定义两个BSP对象
      let cubeBSP = new ThreeBSP(cube)
      let doorBSP = new ThreeBSP(doorMesh)
      // 取交集
      let resultBSP = cubeBSP.subtract(doorBSP)
      let result = resultBSP.toMesh()
      // 转成geometry
      let cubeGeometry1 = result.geometry
      let cubeMaterial = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('model/door1.png')
      })
      let wallMesh = new THREE.Mesh(cubeGeometry1, cubeMaterial)
      this.screen.add(wallMesh)

      this.render()
    },
    render() {
      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
  }
}
</script>

<style scoped>

</style>
