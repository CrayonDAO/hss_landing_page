<template>
  <div class="container-fluid" :style="{ borderBottom: '18px solid #ecdfad' }">
    <div class="row py-5">
      <div class="col-md-4 mb-3 mb-md-0">
        <!-- <b-input-group class="rounded-0">
          <b-input
            class="bg-black rounded-0 border-gray white email-input list-text-sm bg-black py-2"
            :style="{ height: 'auto' }"
            placeholder="Eamil address"
          ></b-input>

          <template #append>
            <b-button
              variant="link"
              class="bg-gray white rounded-0 border-gray list-text-sm px-4 py-2"
              @click="inputEmail"
              >Sign up</b-button
            >
          </template>
        </b-input-group>
        <p class="gray list-text-sm">
          we'll never share this info. No spam, ever. Unsubscribe anytime
        </p> -->
      </div>
      <div class="col-md-4 flex-center">
        <h1><img class="logo" src="@/assets/img/logo.png" alt="logo" /></h1>
      </div>
      <div class="col-md-4 flex-column">
        <!-- sns -->
        <icon-list class="flex-end mb-4" size="sm" boxSize="24px"></icon-list>
        <!-- // sns -->
        <!-- text -->
        <p class="text-right fw-200 list-text">
          <span> 2022 Crayon Ventures Ltd. </span><br />
          <span> Terms & Conditions </span>
        </p>
        <!-- // text -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: [
        { text: "English", value: "en" },
        { text: "Korean", value: "ko" },
      ],
    };
  },
  methods: {
    inputEmail(e) {
      console.log("------------------------------------");
      console.log(e);
      console.log("------------------------------------");
    },
  },
};
</script>

<style lang="scss" scoped></style>
