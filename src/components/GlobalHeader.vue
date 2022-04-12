<template>
  <div class="header container-fluid position-relative">
    <div class="row py-4">
      <div class="col flex-start">
        <div class="lang-wrap pl-3">
          <b-btn
            v-for="btn in lang"
            :key="btn.value"
            variant="link"
            class="white text fw-700 p-0 px-1"
            @click="handleLocale(btn.value)"
            >{{ btn.text }}</b-btn
          >
        </div>
        <icon-list class="d-none d-md-flex"></icon-list>
      </div>
      <div class="col flex-center">
        <h1>
          <b-btn variant="link" @click="$store.dispatch('changeType', 'Home')"
            ><img class="logo" src="@/assets/img/logo.png" alt="logo"
          /></b-btn>
        </h1>
      </div>
      <div class="col flex-end">
        <b-btn
          variant="link yellow-btn rounded-pill yellow-2 px-4 text"
          disabled
          >Mint HSS</b-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: [
        { text: "EN", value: "en" },
        { text: "KR", value: "ko" },
      ],
    };
  },
  methods: {
    handleLocale(val) {
      this.$i18n.locale = val;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.lang-wrap {
  button {
    position: relative;
    line-height: 1;
    &::after {
      position: absolute;
      top: 10%;
      left: 100%;
      content: "";
      height: 100%;
      width: 2px;
      background-color: #fff;
    }
    &:last-child {
      &::after {
        content: none;
      }
    }
  }
}
</style>
