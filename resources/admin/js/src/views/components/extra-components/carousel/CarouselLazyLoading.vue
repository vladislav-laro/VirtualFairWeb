<!-- =========================================================================================
  File Name: CarouselLazyLoading.vue
  Description: Carousel with lazy loading

========================================================================================== -->


<template>
    <vx-card title="Lazy Loading" class="carousel-example" code-toggler>
        <!-- swiper -->
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">

            <swiper-slide v-for="slide in slides" :key="slide.img">
                <img :data-src="slide.img" class="swiper-lazy">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;!-- swiper --&gt;
    &lt;swiper :options=&quot;swiperOption&quot; :dir=&quot;$vs.rtl ? 'rtl' : 'ltr'&quot; :key=&quot;$vs.rtl&quot;&gt;

        &lt;swiper-slide v-for=&quot;slide in slides&quot; :key=&quot;slide.img&quot;&gt;
            &lt;img :data-src=&quot;slide.img&quot; class=&quot;swiper-lazy&quot;&gt;
            &lt;div class=&quot;swiper-lazy-preloader swiper-lazy-preloader-white&quot;&gt;&lt;/div&gt;
        &lt;/swiper-slide&gt;

        &lt;div class=&quot;swiper-pagination&quot; slot=&quot;pagination&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;swiper-button-next swiper-button-white&quot; slot=&quot;button-next&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;swiper-button-prev swiper-button-white&quot; slot=&quot;button-prev&quot;&gt;&lt;/div&gt;
    &lt;/swiper&gt;
&lt;/template&gt;

&lt;script&gt;
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                // Enable lazy loading
                lazy: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            slides: [
              { img: require('@assets/images/pages/carousel/banner-13.jpg') },
              { img: require('@assets/images/pages/carousel/banner-7.jpg')  },
              { img: require('@assets/images/pages/carousel/banner-10.jpg') },
              { img: require('@assets/images/pages/carousel/banner-16.jpg') },
              { img: require('@assets/images/pages/carousel/banner-20.jpg') },
            ]
        }
    },
  components: {
    swiper,
    swiperSlide
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  /*max-height: 100%;*/
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
&lt;/style&gt;
        </template>
    </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        // Enable lazy loading
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slides: [
        { img: require('@assets/images/pages/carousel/banner-13.jpg') },
        { img: require('@assets/images/pages/carousel/banner-7.jpg')  },
        { img: require('@assets/images/pages/carousel/banner-10.jpg') },
        { img: require('@assets/images/pages/carousel/banner-16.jpg') },
        { img: require('@assets/images/pages/carousel/banner-20.jpg') }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444 !important;
    min-height: 300px;
}

.swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    /*max-height: 100%;*/
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
}
</style>
