<!-- =========================================================================================
    File Name: CarouselNavigation.vue
    Description: Carousel with navigations

========================================================================================== -->


<template>
    <vx-card title="Navigations" class="carousel-example" code-toggler>
          <!-- swiper -->
          <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
            <swiper-slide>
              <img class="responsive" src="@assets/images/pages/carousel/banner-13.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/pages/carousel/banner-7.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/pages/carousel/banner-11.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/pages/carousel/banner-1.jpg" alt="banner">
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>

          <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;carousel-example&quot;&gt;
        &lt;swiper :options=&quot;swiperOption&quot; :dir=&quot;$vs.rtl ? 'rtl' : 'ltr'&quot; :key=&quot;$vs.rtl&quot;&gt;
            &lt;swiper-slide&gt;
              &lt;img class=&quot;responsive&quot; src=&quot;@assets/images/pages/carousel/banner-13.jpg&quot; alt=&quot;banner&quot;&gt;
            &lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;
              &lt;img class=&quot;responsive&quot; src=&quot;@assets/images/pages/carousel/banner-7.jpg&quot; alt=&quot;banner&quot;&gt;
            &lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;
              &lt;img class=&quot;responsive&quot; src=&quot;@assets/images/pages/carousel/banner-11.jpg&quot; alt=&quot;banner&quot;&gt;
            &lt;/swiper-slide&gt;
            &lt;swiper-slide&gt;
              &lt;img class=&quot;responsive&quot; src=&quot;@assets/images/pages/carousel/banner-1.jpg&quot; alt=&quot;banner&quot;&gt;
            &lt;/swiper-slide&gt;
            &lt;div class=&quot;swiper-button-prev&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;swiper-button-next&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
        &lt;/swiper&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
  data() {
    return {
        swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
&lt;/script&gt;
          </template>
      </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
