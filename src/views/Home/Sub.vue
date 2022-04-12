<template>
  <div class="container-fluid">
    <!-- visual -->
    <section class="p-0 sub-visual">
      <div class="d-none d-md-block">
        <img src="@/assets/img/sub-visual.png" alt="sub main visual" />
        <div class="filter"></div>
      </div>
      <div class="d-block d-md-none">
        <img src="@/assets/img/sub-visual-mobile.png" alt="sub main visual" />
        <div class="filter"></div>
      </div>
    </section>
    <!-- // visual -->

    <!-- section 1  하이 늘보 소사이어티-->
    <section class="container py-4 mt-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col-md-8">
              <h4 class="title">{{ $t("sub.section_1.title") }}</h4>
              <p class="text">
                {{ $t("sub.section_1.text") }}
              </p>

              <div>
                <a
                  class="discord-btn py-4 mb-4 text"
                  :style="{ width: '90%' }"
                  href="https://discord.com/invite/crayonDAO"
                  target="_blank"
                >
                  <font-awesome-icon
                    icon="fa-brands fa-discord"
                    size="xl"
                    class="mr-2"
                  />

                  {{ $t("sub.section_1.btn") }}
                </a>
              </div>

              <p class="yellow-2 list-text-sm mb-3">
                {{ $t("sub.section_1.notice") }}
              </p>
            </div>
            <div class="col-md-4 flex-center">
              <div class="w-100">
                <div
                  class="bg-img d-none d-md-block"
                  :style="{
                    backgroundImage: `url(${require('@/assets/img/mystery-sloth-pc.png')}`,
                  }"
                ></div>
                <div
                  class="bg-img d-block d-md-none"
                  :style="{
                    backgroundImage: `url(${require('@/assets/img/mystery-sloth-mobile.jpg')}`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // section 1 -->

    <divider></divider>

    <!-- section 2 하이 늘보 멤버십-->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <h4 class="title">{{ $t("sub.section_2.title") }}</h4>

          <p class="text mb-0">
            {{ $t("sub.section_2.text") }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row py-5 benefit-list px-1 px-xl-5 px-lg-4 px-md-5">
            <div
              v-for="(row, i) in benefitArr"
              :key="i"
              class="col-6 col-lg-3 benefit-item px-0"
            >
              <div class="bg-img">
                <div class="flex-center">
                  <div
                    class="bg-img benefit-img"
                    :style="{
                      backgroundImage: `url(${row.img})`,
                      backgroundSize: '100%',
                      paddingBottom: '55%',
                      paddingTop: '15%',
                    }"
                  ></div>
                </div>
                <p
                  v-html="$t(`sub.section_2.list_text_${i + 1}`)"
                  class="text-center list-text"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // section 2 -->

    <divider></divider>

    <!-- section 3  HHS의 첫 번째 고대 유물 -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col-md-8">
              <h4 class="title">{{ $t("sub.section_3.title") }}</h4>
              <p class="text">
                {{ $t("sub.section_3.text") }}
              </p>
              <div>
                <img
                  src="@/assets/img/sub-section3-media.png"
                  alt="media img"
                />
              </div>
            </div>
            <div class="col-md-4 flex-center">
              <div class="w-100">
                <div
                  class="bg-img"
                  :style="{
                    backgroundImage: `url(${require('@/assets/img/sub-section3-img.png')}`,
                    backgroundSize: 'contain',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // section 3 -->

    <divider></divider>

    <!-- section 4 web3 기술로 보호되는 우리의 큰 뜻 -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col-md-8">
              <h4 class="title">{{ $t("sub.section_4.title") }}</h4>
              <p class="text">
                {{ $t("sub.section_4.text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // section 4 -->

    <divider></divider>

    <!-- section 5 하이 늘보 소사이어티 로드맵 -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col-md-6">
              <h4 class="title">{{ $t("sub.section_5.title") }}</h4>
              <p class="text">
                {{ $t("sub.section_5.text") }}
              </p>
            </div>
            <div class="col-md-6">
              <ul>
                <li v-for="i in 10" :key="i" class="fw-300 mb-4">
                  <div
                    v-html="$t(`sub.section_5.list_text_${i}`)"
                    class="text"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // section 5 -->
    <divider></divider>
    <!-- section 6 하이 늘보 소사이어티 운영위원회 -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col-md-6">
              <h4 class="title">{{ $t("sub.section_6.title") }}</h4>
              <div v-html="$t(`sub.section_6.text`)" class="text"></div>
            </div>
            <div class="col-md-6 flex-center">
              <div
                class="bg-img"
                :style="{
                  backgroundImage: `url(${require('@/assets/img/sub-section6-img.png')}`,
                  backgroundSize: 'contain',
                  paddingBottom: '14rem',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 6 -->
    <divider></divider>
    <!-- section 7 하이늘보 소사이터이 행동 강령 -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0">
          <div class="row">
            <div class="col">
              <h4 class="title">{{ $t("sub.section_7.title") }}</h4>
              <p class="text">
                {{ $t("sub.section_7.text") }}
              </p>
              <ul>
                <li v-for="i in 4" :key="i" class="fw-300 text mb-0">
                  {{ $t(`sub.section_7.list_text_${i}`) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 7 -->
    <divider></divider>
    <!-- section 8 FAQs -->
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col col-md-10 px-0 mb-5">
          <div class="flex-center mb-5">
            <h4 class="my-5 title-lg">
              {{ $t("sub.section_8.title") }}
            </h4>
          </div>
          <accordion
            v-for="i in 10"
            :key="i"
            :i="i"
            :head="$t(`sub.section_8.accordion.list_${i}.head`)"
            :body="$t(`sub.section_8.accordion.list_${i}.body`)"
          ></accordion>
        </div>
      </div>
    </section>
    <!-- // section 8 -->
    <divider></divider>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      benefitArr: [
        {
          img: require("@/assets/img/sub-section2-img-arr-1.png"),
        },
        {
          img: require("@/assets/img/sub-section2-img-arr-2.png"),
        },
        {
          img: require("@/assets/img/sub-section2-img-arr-3.png"),
        },
        {
          img: require("@/assets/img/sub-section2-img-arr-4.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
