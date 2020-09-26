<template>
  <h5 class="right">
    <span><slot></slot></span>
  </h5>
</template>
<style scoped>
h5 {
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Montserrat, sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.12px;
  text-transform: uppercase;
}
h5 span {
  margin: 0 5px;
}

h5:after {
  background: white;
  height: 1px;
  flex: 1;
  content: '';
}
h5.left:after {
  background: none;
}
h5.right:before {
  background: none;
}
</style>
