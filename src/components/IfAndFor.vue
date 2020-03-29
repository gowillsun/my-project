<template>
  <div>
    <div>v-if 与 v-for 的优先级</div>
    <div>
      <p>全部技术名称</p>
      <li v-for="tech in technologies"  :key="tech" >
        {{tech}}
      </li>
      <p>v-if 与 v-for 的结合使用，只打印出以 “n” 开头的技术：现在写法已经改变，建议使用计算属性</p>
      <li v-for="tech in techenologiesfilted"  :key="tech" >
        {{tech}}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      technologies: [
        'nvm', 'npm', 'node', 'webpack', 'ecma_script'
      ]

    }
  },
  computed: {
    // 计算属性的 getter
    techenologiesfilted: function () {
      let techenologiesnew = []
      this.technologies.forEach(element => {
        if (element.indexOf('n') === 0) {
          techenologiesnew.push(element)
        }
      })
      return techenologiesnew
    }
  }
}
</script>

<style  scoped>

</style>
