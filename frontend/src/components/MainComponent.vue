<template>
  <div>
    <button @click="runScript">Run Script</button>
    <pre>{{ scriptOutput }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scriptOutput: '',
    };
  },
  methods: {
    async runScript() {
      try {
        const response = await fetch('http://localhost:3000/run-script');
        const data = await response.json();
        this.scriptOutput = data.output;
      } catch (error) {
        console.error('Error running script:', error);
      }
    },
  },
};
</script>

