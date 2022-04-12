<template>
  <div class="container-fluid">
    <!-- visual -->
    <section class="main-visual p-0 mb-5">
      <div class="d-none d-md-block">
        <div class="filter"></div>
        <img src="@/assets/img/main-visual.png" alt="main visual" />
        <div class="animation-box"></div>
      </div>
      <div class="d-block d-md-none">
        <div class="filter"></div>
        <img src="@/assets/img/main-visual-mobile.jpeg" alt="main visual" />
        <div class="animation-box-mobile"></div>
      </div>
    </section>
    <!-- // visual -->

    <!-- section 1 -->
    <section class="pt-5">
      <h4 class="title mb-4">{{ $t("home.section_1.title") }}</h4>
      <p class="text mb-5">{{ $t("home.section_1.text") }}</p>
      <b-btn
        variant="outline"
        class="yellow-btn fw-900 rounded-0 w-100 py-4 title-lg mb-5"
        @click="$store.dispatch('changeType', 'Sub')"
      >
        Enter</b-btn
      >
    </section>
    <!-- // section1 -->
    <divider></divider>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
