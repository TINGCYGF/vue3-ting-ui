<template>
  <div class="ting-tabs">
    <div class="ting-tabs-nav" ref="container">
      <div
        class="ting-tabs-nav-item"
        v-for="(tabNode, index) in tabsNodes"
        :ref="
          (el) => {
            if (tabNode.props.title === selected) selectedItem = el;
          }
        "
        @click="select(tabNode)"
        :class="
          [tabNode.props.title === selected ? 'selected' : ''] +
          [tabNode.props.disabled === '' ? 'disabled' : '']
        "
        :key="index"
      >
        {{ tabNode.props.title }}
      </div>
      <div class="ting-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ting-tabs-content">
      <component
        class="ting-tabs-content-item"
        :key="current.props.title"
        :is="current"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, watchEffect } from "vue";
export default {
  name: 't-tabs',
  props: {
    selected: String,
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const { left: NavLeft } = container.value.getBoundingClientRect();
          const {
            left: SelectedLeft,
          } = selectedItem.value.getBoundingClientRect();
          const left = SelectedLeft - NavLeft;
          indicator.value.style.left = left + "px";
        },
        // 解决异步
        {
          flush: "post", //效果更新需要缓冲时间
        }
      );
    });
    // 获取插槽结点
    const tabsNodes = context.slots.default();

    tabsNodes.forEach((tabNode) => {
      // @ts-ignore
      if (tabNode.type.name !== Tab.name) {
        throw new Error("t-tabs 子标签必须是 t-tab");
      }
    });
    // 返回当前选中结点
    const current = computed(() => {
      return tabsNodes.find((tabNode) => tabNode.props.title === props.selected);
    });
    // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
    const select = (tabNode) => {
      if (tabNode.props.disabled === "") {
        return;
      }
      context.emit("update:selected", tabNode.props.title);
    };

    return {
      current,
      tabsNodes,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.ting-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px;
      margin: 0 8px;
      cursor: pointer;
      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }
      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 20px 8px;
  }

}
</style>
