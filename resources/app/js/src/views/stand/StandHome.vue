<template>
    <div class="w-full">
        <app-header activeItem="3"></app-header>
        <div class="flex w-full breadcrumb justify-between" >
            <div class="flex flex-row w-full nav-item">
                <nav-back-button/>
                <div class="flex items-center text-white w-full justify-center">
                    <div class="w-1/3 p-8">
                        <div class="uppercase fs-10 text-white">{{$t('SearchCategory')}}</div>
                        <vs-input :placeholder="$t('Search')" class="w-full"/>
                    </div>
                    <div class="w-1/3 p-8">
                        <div class="uppercase fs-10 text-white">{{$t('SearchName')}}</div>
                        <vs-input :placeholder="$t('Search')" class="w-full"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="vx-row stand-home-main">
            <div class="vx-col lg:w-3/4 md:w-2/3 sm:w-full xs:w-full py-8 px-12">
                <div class="relative w-full h-full" v-if="fair">
                    <!-- <img class="stand_wrapper" @load="onLoadImg()" :src="`/fair_image/${fair.fair_type.interior}`"> -->
                    <template v-if="fair.fair_type">
                        <img ref="refFairImg" class="stand_wrapper responsive" @load="onLoadImg()" :src="`/fair_image/${fair.fair_type.interior}`">
                    </template>
                    <template v-for="(item, index) in stands.filter((st, index) => st.country_id === country.id && index < 9)">
                        <img class="stand_img absolute cursor-pointer"
                            @click="goStandPage(item.id, item.user_id)"
                            :src="`/fair_image/${item.stand_location.stand_type.building}`"
                            :key="`stand-${index}`"
                            :style="`top: ${item.stand_location.top * 100}%; left: ${item.stand_location.left * img_width}px`" >
                        
                        <img class="logo_img rounded absolute cursor-pointer" 
                            @click="goStandPage(item.id, item.user_id)"
                            :src="logoImage(item.logo)"
                            :key="`logo-${index}`"
                            :style="`top: ${(item.stand_location.top - 0.01) * 100}%; left: ${(item.stand_location.left - 0.01) * img_width}px`" >
                    </template>
                    
                </div>
            </div>    
            <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-full xs: w-full">
                <div class="uppercase mt-4 fs-11 font-bold mb-4">{{$t('Ads')}}</div>
                <div class="mr-4">
                  <swiper :options="swiperOption">
                    <swiper-slide :key="`swiper-item-${index}`" v-for="(item, index) in ads_list">
                      <img class="responsive" :src="`/fair_image/${item.url}`" alt="">
                      <!-- @assets/images/pages/carousel/banner-16.jpg-->
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev">
                        <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronLeftIcon"/>
                    </div>
                    <div class="swiper-button-next" slot="button-next">
                        <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronRightIcon"/>
                    </div>
                  </swiper>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    AppHeader,
    NavBackButton,
    swiper,
    swiperSlide
  },
  data () {
    return {
      fair: {},
      fair_type: {},
      country: {},
      stands: [],
      ads_list: [],
      me: {},
      loading: false,
      img_width: 0,
      img_height: 0,
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination2',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      } 
    }
  },
  methods: {
    logoImage (logo) {
      if (logo === null) return '/fair_image/placeholder.png'  
      return `/fair_image/${logo}`
    },
    goStandPage (stand_id, user_id) {
      if (!user_id) {
        if (this.me.type === 'lecturer') return this.purchaseStand(stand_id)
        this.$vs.notify({
          title:'Notificación',
          text:'No eres expositor, por lo que no puedes adquirir un stand.',
          color:'success',
          iconPack: 'feather',
          icon:'icon-mail'})
      }
      return this.$router.push(`/fair/stand/2/2/${stand_id}`)  
    },
    purchaseStand (stand_id) {
      
      this.$router.push(`/stand/purchase/${stand_id}`)
    },
    onLoadImg () {
      this.loading = true
      this.img_width = this.$refs.refFairImg.clientWidth
      this.img_height = this.$refs.refFairImg.clientHeight
    }
  },
  created () {
    this.$loading.show(this)
    this.$http.get('/api/fair/get_current_stands')
      .then((response) => {

        this.$loading.hide(this)  
        console.log(response.data)
        const data = response.data
        this.fair = data.fair
        if (!this.fair) {
          return this.$router.back()
        }
        this.fair_type = data.fair.fair_type
        this.country = data.country
        this.stands = data.stands
        
      })
      .catch(() => {})

    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })

    const userInfo = localStorage.getItem('userInfo')
    console.log(userInfo)
    if (!userInfo) {
      return this.$router.push('/home')
    }
    this.me = JSON.parse(userInfo)
  }
}
</script>
<style lang="scss">
.stand-home-main {
    height: calc(var(--vh, 1vh) * 100 - 8.2rem - 86px);
    .h-responsive {
        height: 100%;
        width: auto;
    }

    //.stand_wrapper {
    //    height: calc(var(--vh, 1vh) * 100 - 12.6rem - 86px);
    //    width: auto;
    //}
    .stand_img {
        max-width: 15%;
        max-height: 15%;
    }

    .logo_img {
        max-width: 4%;
        max-height: 4%;
        //margin-left: 100px;
        background: white;
        box-shadow: 1px 2px 3px #33333355;
    }
}
.breadcrumb {
    background: #123058;
    .nav-item {
        div {
          text-transform: uppercase;
          font-size: 1.3rem;
        }
    }
    .user-img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      border: 1px solid silver
    }
    .user-name {
      font-size: 0.8rem !important;
    }
}
</style>