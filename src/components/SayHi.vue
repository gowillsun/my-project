<template>
  <div class="hi">
    <div>{{message}}</div>
    <div>
      <!-- 无参数方法的调用 -->
      <input type="button" @click="show_my_value()" value="调用无参数方法">
      <!-- 有参数方法的调用 -->
      <input type="button" v-on:click="say_hi('Jim')" value='调用有参数方法'>
      <!-- @click等同于v-on:click -->
    </div>
    <div>
      <div v-if="a>2" >
        a&gt;2
      </div>
      <div v-else-if="a===2" >
        a=2
      </div>
      <div v-else>
        a&lt;2
      </div>
    </div>

    <div>
      <li v-for="tech in technologies" :key="tech" >
        {{tech}}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue!',
      my_value: '默认值',
      a: 2,
      technologies: [
        'nvm', 'npm', 'node', 'webpack', 'ecma_script'
      ]
    }
  },
  methods: {
    // 方法声明
    show_my_value: function () {
      // 注意下面的 this.my_value,要用到this关键字
      alert('my_value:' + this.my_value)
      this.a--
    },
    say_hi: function (name) {
      alert('Hi' + name)
      this.a++
    }
  }
}
</script>

<style>
.hi {
  color : red;
  font-size : 18px;
  text-align: left;
}
</style>
