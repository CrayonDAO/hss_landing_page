<template>
  <div>
    <a
      v-for="icon in iconList"
      :key="icon.icon"
      class="ml-3 border-whtie rounded-circle flex-center flex-column"
      :style="{ width: boxSize, height: boxSize }"
      :href="icon.herf"
      target="_blank"
    >
      <font-awesome-icon :icon="`fa-brands ${icon.icon}`" :size="size" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
    },
    boxSize: {
      type: String,
      default: "30px",
    },
  },
  data() {
    return {
      iconList: [
        {
          icon: "fa-instagram",
          herf: "https://www.instagram.com/accounts/login/?next=/highslothsociety/",
        },
        { icon: "fa-discord", herf: "https://discord.com/invite/crayonDAO" },
        { icon: "fa-twitter", herf: "https://twitter.com/highsloths" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
