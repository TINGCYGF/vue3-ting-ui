<template>
  <div class="ting">
    <input
      class="ting-input"
      :class="{
      disabled: disabled === true || disabled === 'true',
      readonly: readonly === true || disabled === 'true',
    }"
      :value="value"
      :error="error"
      :disabled="disabled === true || disabled === 'true'"
      :readonly="readonly === true || readonly === 'true'"
      :placeholder="placeholder"
      :type="type"
      @change="change"
      @input="onInput"
      @focus="focus"
      v-bind="$attrs"
    />
    <!-- clearable -->
    <Icon v-if="clearable" class="ting-clear-icon" :class="{active: value !== ''}" @click="clearValue" name="close" ></Icon>

    <template v-if="error !== false " class="ting-error-icon">
      <Icon name="prompt" class="ting-icon" style="color: #c61e1e"></Icon>
      <span v-if="error !== true && 'true' " class="ting-error">{{error}}</span>
    </template>

  </div>

</template>

<script lang="ts">
import Icon from '../Icon/Icon.vue'

export default {
  name: "t-input",
  components: {Icon},
  props: {
    checked: {type: Boolean, default: false},
    disabled: {
      type: [Boolean, String],
      default: false
    },
    placeholder: String,
    error: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: [Boolean, String],
      default: false
    },
    clearable: {
      type: [Boolean, String],
      default: false
    },
    type: {
      type: String,
      default: 'text',
    },
    value: String,
    active: Boolean
  },
  setup(props, context){
    const onInput = (ev: InputEvent) => {
      context.emit("update:value", (ev.target as HTMLInputElement).value);
      context.emit("update:checked", (ev.target as HTMLInputElement).checked);
    };
    const clearValue = () => {
      context.emit("update:value", '');
    }

    const change = (ev: MouseEvent) => {
      context.emit("change", ev);
    };

    const focus = (ev: MouseEvent) => {
      context.emit("focus", ev);
    };
    return {onInput, clearValue, change, focus}
  }
}
</script>

<style lang="scss">
$height: 36px;
$border-color: #999999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(93, 93, 93, 0.5);
$color-placeholder: #aeaeae;
.ting{
  position: relative;
  white-space: nowrap;
  display: inline-block;
  .ting-input{
    font-size: $font-size;
    display: inline-block;
    height: $height;
    border: 1px solid $border-color;
    padding: 0 8px;
    border-radius: $border-radius;
    margin: 0.5em;

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 1px $box-shadow-color;
      outline: none;
    }
    &.readonly{
      border-color: #9b9b9b;
      color: #929292;
    }
    &.disabled{
      cursor: not-allowed;
      border-color: #b0afaf;
      color: #8d8d8d;
    }
    &::placeholder {
      color: $color-placeholder;
    }
  }
  .ting-error {
    font-size: 0.6em;
    color: #dd4c4c;
  }
  .ting-clear-icon{
    display: none;
    &.active{
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 12px;
    }
  }
}

</style>