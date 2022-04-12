<template>
  <div>
    <global-header></global-header>
    <components :is="type"></components>
    <global-footer></global-footer>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import Home from "@/views/Home";
import { mapState } from "vuex";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    Home: Home.Home,
    Sub: Home.Sub,
  },
  computed: {
    ...mapState(["type"]),
  },
};
</script>

<style lang="scss" scoped></style>
