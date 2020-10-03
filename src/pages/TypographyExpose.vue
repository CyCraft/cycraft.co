<template>
  <div class="background-black">
    <div class="page-title q-py-sm">TYPE</div>
    <div class="title-divider"></div>
    <div class="q-pa-md q-mx-lg">
      <div class="title-holder">
        <h1>Header 1</h1>
        <div class="title-label">
          Montserrat ExtraBold, 48px &vert; LetterSpacing: 20 &vert; LineHeight: 58px &vert;
          TextTransform: Uppercase
        </div>
      </div>
      <div class="title-holder">
        <h2>Header 2</h2>
        <div class="title-label">
          Montserrat Medium, 48px &vert; LetterSpacing: 10 &vert; LineHeight: 49px
        </div>
      </div>
      <div class="title-holder">
        <h3>Header 3</h3>
        <div class="title-label">
          Montserrat Bold, 20px &vert; LetterSpacing: 80 &vert; LineHeight: 28px &vert;
          TextTransform: Uppercase
        </div>
      </div>
      <div class="title-holder">
        <h4>Header 4</h4>
        <div class="title-label">
          Montserrat Medium, 20px &vert; LetterSpacing: 10 &vert; LineHeight: 28px
        </div>
      </div>
      <div class="title-holder">
        <h5>Header 5</h5>
        <div class="title-label">
          Montserrat Bold, 14px &vert; LetterSpacing: 80 &vert; LineHeight: 18px &vert;
          TextTransform: Uppercase
        </div>
      </div>
      <div class="title-holder">
        <div class="text-body1">Body 1</div>
        <div class="title-label">
          Montserrat Medium, 14px &vert; LetterSpacing: 10 &vert; LineHeight: 18px
        </div>
      </div>
      <div class="title-holder">
        <div class="text-body2">Body 2</div>
        <div class="title-label">
          Montserrat Medium, 12px &vert; LetterSpacing: 20 &vert; LineHeight: 15px
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
//$
h1
  color: #fff
h2
  color: #fff
h3
  color: #fff
h4
  color: #fff
h5
  color: #fff
h6
  color: #fff
.text-body1
  color: #fff
.text-body2
  color: #fff
.background-black
  background: black

.page-title
  font-size: 40px
  font-weight: 400
  font-family: Roboto, sans-serif
  color: #fff
  margin-left: 10vh

.title-holder
  margin-bottom: 10px
  padding: 10px 10px 20px

.title-divider
  width: 100%
  height: 1px
  background-color: #fff

.title-label
  +header-globals()
  margin-top: 10px
  color: #fff
  font-size: 13px
  line-height: 13px
  letter-spacing: 1px
</style>
