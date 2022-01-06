<template>
    <div class="loadingBox">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>{{text}}</div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            required:false,
            type:String,
            default:'Loading'
        }
    }

};
</script>

<style scoped>
.loadingBox{
    position: fixed;
    top: 30%;
    width: 25%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 0px 9px -2px #000000;
    z-index: 99;
    left: 0px;
    right: 0px;
    text-align: center;
    padding: 20px
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(245, 14, 14);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(233, 11, 11) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>