<template>
  <label class="cy-toggle">
    <input type="checkbox" />
    <span class="slider round"> </span>
  </label>
</template>
<script>
export default {
  name: 'CyToggle',
}
</script>
<style scoped>
.cy-toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 35px;
}

.cy-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 23px;
  width: 23px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  background-image: url(/cy-icon-black-on-white.svg);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #7c7c7c;
}
input:checked + .slider:before {
  background-image: url(/cy-icon-white-on-black.svg);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
