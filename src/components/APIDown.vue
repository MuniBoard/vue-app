<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'api-down',
  data: () => {
    return {
      msg : "Oh Oh! Seems like the API is down! Wait a while, maybe it'll come online..."
    }
  },
}
</script>