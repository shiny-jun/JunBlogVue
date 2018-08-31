<template>
        <div class="loading">
        <div id="caseRouge">
          <div id="load">
              <p>Building ...</p>
          </div>
          <div id="top"></div>
          <div id="left"></div>
          <div id="right"></div>
        </div>
      </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
