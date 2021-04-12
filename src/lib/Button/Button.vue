<template>
  <button class="ting-button"
          :class="classes"
          :disabled="loading ? true : disabled">
    <span v-if="loading" class="ting-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
  import { computed } from "vue";

  export default {
    props: {
      size: {
        type: String,
        default: "normal",
      },
      level: {
        type: String,
        default: "default",
      },
      round: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const { round, size, level } = props;
      const classes = computed(() => {
        return {
          [`ting-size-${size}`]: size,
          [`ting-level-${level}`]: level,
          [`ting-${round ? "round" : "normal"}`]: round,
        };
      });
      return { classes };
    },
  };
</script>

<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #333;
// 默认字体颜色
$color: #333;
// 颜色参数
$blue: #40a9ff;
$red: #f56c6c;
// 角度参数
$radius: 4px;
$roundRadius: $h/2;
$grey: #909399;

.ting-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 0.25s;
  margin: 0 10px 8px 0;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.ting-round {
    border-radius: $roundRadius;
  }

  &.ting-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.ting-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.ting-level-default {
    background: #fff;
    border: 1px solid #222831;
    color: #4a4444;
    &:hover,
    &:focus {
      color: #fff;
      border-color: #57606f;
      background-color: #747d8c;
    }
  }
  &.ting-level-primary {
    background: #70a1ff;
    border: 1px solid #70a1ff;
    color: #fff;
    &:hover,
    &:focus {
      color: #1e90ff;
      border-color: #1e90ff;
      background: #fff;
    }
  }
  &.ting-level-success {
    background: #28a745;
    border: 1px solid #28a745;
    color: #fff;
    &:hover,
    &:focus {
      color: #28a745;
      border-color: #28a745;
      background-color: #fff;
    }
  }
  &.ting-level-warning {
    background: #f7e4a4;
    border: 1px solid #fce38a;
    color: #4a4444;
    &:hover,
    &:focus {
      color: #ffc107;
      border-color: #ffc107;
      background: #fff;
    }
  }
  &.ting-level-error {
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #d72323;
      border-color: #d72323;
      background-color: #fff;
    }
  }


  &[disabled] {
    cursor: not-allowed;
    color: #fff;
    background-color: #ddd;
    border: none;
    &:hover,
    &:focus {
      cursor: not-allowed;
      color: #fff;
      background-color: #ddd;
      border: none;
    }
  }

  > .ting-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: lighten($blue, 20%) lighten($blue, 10%) $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: ting-spin 1s infinite linear;
    &:hover,
    &:focus {
      cursor: not-allowed;
      color: #fff;
      background-color: #ddd;
      border: none;
    }
  }
  @keyframes ting-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


}
</style>