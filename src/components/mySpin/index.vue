<template>
  <div class="mask" v-show="spinShow">
    <div class="g_spin">
      <div class="la-ball-circus la-2x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySpin",
  props: {
    spinShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(201, 201, 201);
  background: rgb(201, 201, 201);
  opacity: 0.6;
  z-index: 9999999999999;

  .g_spin {
    .la-ball-circus,
    .la-ball-circus > div {
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .la-ball-circus {
      display: block;
      font-size: 0;
      color: #fff;
    }

    .la-ball-circus.la-dark {
      color: #333;
    }

    .la-ball-circus > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
    }

    .la-ball-circus {
      width: 16px;
      height: 16px;
    }

    .la-ball-circus > div {
      position: absolute;
      top: 0;
      left: -100%;
      display: block;
      width: 16px;
      width: 100%;
      height: 16px;
      height: 100%;
      border-radius: 100%;
      opacity: 0.5;
      -webkit-animation: ball-circus-position 2.5s infinite
          cubic-bezier(0.25, 0, 0.75, 1),
        ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
      -moz-animation: ball-circus-position 2.5s infinite
          cubic-bezier(0.25, 0, 0.75, 1),
        ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
      -o-animation: ball-circus-position 2.5s infinite
          cubic-bezier(0.25, 0, 0.75, 1),
        ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
      animation: ball-circus-position 2.5s infinite
          cubic-bezier(0.25, 0, 0.75, 1),
        ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
    }

    .la-ball-circus > div:nth-child(1) {
      -webkit-animation-delay: 0s, -0.5s;
      -moz-animation-delay: 0s, -0.5s;
      -o-animation-delay: 0s, -0.5s;
      animation-delay: 0s, -0.5s;
    }

    .la-ball-circus > div:nth-child(2) {
      -webkit-animation-delay: -0.5s, -1s;
      -moz-animation-delay: -0.5s, -1s;
      -o-animation-delay: -0.5s, -1s;
      animation-delay: -0.5s, -1s;
    }

    .la-ball-circus > div:nth-child(3) {
      -webkit-animation-delay: -1s, -1.5s;
      -moz-animation-delay: -1s, -1.5s;
      -o-animation-delay: -1s, -1.5s;
      animation-delay: -1s, -1.5s;
    }

    .la-ball-circus > div:nth-child(4) {
      -webkit-animation-delay: -1.5s, -2s;
      -moz-animation-delay: -1.5s, -2s;
      -o-animation-delay: -1.5s, -2s;
      animation-delay: -1.5s, -2s;
    }

    .la-ball-circus > div:nth-child(5) {
      -webkit-animation-delay: -2s, -2.5s;
      -moz-animation-delay: -2s, -2.5s;
      -o-animation-delay: -2s, -2.5s;
      animation-delay: -2s, -2.5s;
    }

    .la-ball-circus.la-sm {
      width: 8px;
      height: 8px;
    }

    .la-ball-circus.la-sm > div {
      width: 8px;
      height: 8px;
    }

    .la-ball-circus.la-2x {
      width: 32px;
      height: 32px;
    }

    .la-ball-circus.la-2x > div {
      width: 32px;
      height: 32px;
    }

    .la-ball-circus.la-3x {
      width: 48px;
      height: 48px;
    }

    .la-ball-circus.la-3x > div {
      width: 48px;
      height: 48px;
    }

    @-webkit-keyframes ball-circus-position {
      50% {
        left: 100%;
      }
    }
    @-moz-keyframes ball-circus-position {
      50% {
        left: 100%;
      }
    }
    @-o-keyframes ball-circus-position {
      50% {
        left: 100%;
      }
    }
    @keyframes ball-circus-position {
      50% {
        left: 100%;
      }
    }
    @-webkit-keyframes ball-circus-size {
      50% {
        -webkit-transform: scale(0.3, 0.3);
        transform: scale(0.3, 0.3);
      }
    }
    @-moz-keyframes ball-circus-size {
      50% {
        -moz-transform: scale(0.3, 0.3);
        transform: scale(0.3, 0.3);
      }
    }
    @-o-keyframes ball-circus-size {
      50% {
        -o-transform: scale(0.3, 0.3);
        transform: scale(0.3, 0.3);
      }
    }
    @keyframes ball-circus-size {
      50% {
        -webkit-transform: scale(0.3, 0.3);
        -moz-transform: scale(0.3, 0.3);
        -o-transform: scale(0.3, 0.3);
        transform: scale(0.3, 0.3);
      }
    }

    .la-ball-circus.la-2x > div {
      width: 26px;
      height: 26px;
      background: #52c41a !important;
    }

    .la-ball-circus.la-2x > div:nth-child(2n) {
      background: $--color-primary !important;
    }
  }

  .ivu-spin-fix {
    background-color: transparent;
  }
}

.mask-spin {
  margin: 10px;
}
</style>
