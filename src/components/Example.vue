<template>
  <div class="example">
    <h1>{{ msg }}</h1>
    <p>
     Testing like Crazy     
    </p>  
     <div style="border: 3px solid red; width: 400px; margin:auto;">
      <p style="color: red">Using v-html directive: <a v-html=rawHtml></a></p>
      <p v-if=seen>Now you see me</p>
     </div>     
  <p>Original message: "{{ msg }}"</p>
  <p>Computed reversed message: "{{ reversedMessage() }}"</p>

  </div> 
</template>


<script>


export default {
  name: 'Example',
  data: function () {
      return {
          msg: "This is a twist"
      }
  },
  methods: {
  reversedMessage() {
      //console.log(`this fired`)
    return this.msg.split('').reverse().join('')
    }
  },
  props: {
    mssg: String,
    seen: Boolean,
    rawHtml: String   
  },  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
</style>
