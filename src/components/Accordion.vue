<template>
  <div>
    <div class="accordion" role="tablist">
      <b-btn
        block
        v-b-toggle="`accordion-${i + 1}`"
        variant="link"
        class="flex-between py-3 text-left"
        ><span class="title mb-0">{{ head }}</span>
        <span :class="[visiable ? 'active' : '', 'accordion-arrow']">
          <font-awesome-icon class="white" icon="fa-solid fa-angle-down" />
        </span>
      </b-btn>

      <b-collapse
        :id="`accordion-${i + 1}`"
        role="tabpanel"
        @show="visiable = true"
        @hide="visiable = false"
      >
        <div v-html="body" class="px-3 pb-3 text"></div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: String,
    },
    body: {
      type: String,
    },
    i: {
      tpye: Number,
    },
  },
  data() {
    return {
      visiable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  border-bottom: 0.5px solid rgba($color: #fff, $alpha: 0.2);
  .accordion-arrow {
    transition: all 0.2s linear;
  }
  .accordion-arrow.active {
    transform: rotate(0.5turn);
  }
  &:first-child {
    border-top: 0.5px solid rgba($color: #fff, $alpha: 0.2);
  }
}
</style>
