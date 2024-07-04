<template>
  <div class="gradient-background" @mousemove="updateGradient" @mouseleave="resetGradient">
      <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradientStart: '#ff6e7f',
      gradientEnd: '#6fe9ff',
      x: 0,
      y: 0
    }
  },
  methods: {
    updateGradient(event) {
      this.x = event.clientX
      this.y = event.clientY
      this.$el.style.background = `radial-gradient(circle at ${this.x}px ${this.y}px, ${this.gradientStart}, ${this.gradientEnd})`
    },
    resetGradient() {
      this.$el.style.background = ''
    }
  }
}
</script>

<style scoped>
  .gradient-background {
    height: 100%;
    transition: background 0.3s ease;
    background: radial-gradient(circle, #ff6e7f, #bfe9ff);
  }
</style>
