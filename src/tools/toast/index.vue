<template>
  <div class="toast" v-if="over" :class="{'fade-in': showClass, 'fade-out': !showClass, success: type == 'success', fail: type=='fail'}">
      <div v-if="type == 'success'" style="color: #6bfa1f;">√ {{msg}}</div>
      <div v-if="type == 'fail'" style="color: #ec1b1b;">× {{msg}}</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.toast {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 15px 15px 20px;
  font-weight: 600;
}
.success {
    background: #f0f9eb;
}

.fail {
    background: #fef0f0;
}
.fade-in {
  animation: fadeIn 0.3s;
}

.fade-out {
  animation: fadeOut 0.3s;
}

@keyframes fadeIn {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
@keyframes fadeOut {
  100% {
    top: 0;
    opacity: 0;
  }
  0% {
    top: 40px;
    opacity: 1;
  }
}
</style>