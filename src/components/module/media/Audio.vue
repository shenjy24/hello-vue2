<template>
  <div>
    <button @click="playPause">播放/暂停</button>
  </div>
</template>

<script>
import {playSound, SoundType} from "@/js/audio";

export default {
  name: "Audio",
  data() {
    return {
      audio: null
    }
  },
  methods: {
    playPause() {
      if (this.audio) {
        this.audio.stop()
        this.audio = null
      } else {
        this.audio = playSound(SoundType.RING)
      }
    }
  }
}
</script>

<style scoped>

</style>
