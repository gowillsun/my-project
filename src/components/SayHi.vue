<template>
  <div class="hi">
    Hi Vue!
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style>
.hi {
  color : red;
  font-size : 33px;
  text-align: left;
}
</style>
