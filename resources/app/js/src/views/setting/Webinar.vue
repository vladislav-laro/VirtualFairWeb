<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full setting-webinar-main">
            <bread-crumb icon="webinar" type="svg" :text="$t('MyWebinar')" />
            <div class="w-full bg-white-grey">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white">
                        <div class="p-6 pb-2 flex flex-row items-center">
                            <span class="h6 font-bold">({{reserved_webinar_count + past_webinar_count}} {{$t('Available')}})</span>
                            <span class="h6 ml-10 flex flex-row items-center ml-2">
                                <!-- <span class="mr-6">{{$t('Category')}}</span> <feather-icon icon="ChevronRightIcon" /> -->
                                <v-select v-model="selected_category" :options="categories" style="width: 200px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2">
                                <v-select v-model="selected_type" :options="types" style="width: 160px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2">
                                <v-select v-model="selected_exhibitor" :options="exhibitors" style="width: 160px;"/> 
                            </span>
                        </div>
                        <div v-if="reserved_webinar_count > 0">
                          <div class="px-8">
                              <h2 class="font-bold my-8 uppercase">{{$t('Reserved')}} {{$t('Or')}} {{$t('Aggregates')}}</h2>
                          </div>
                          <div class="vx-row" >
                              <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in filtered_reserved_webinars" >
                                  <div class="px-2">
                                      <webinar-card 
                                          :reserved="true"
                                          :workdate="item.talk.talk_date"
                                          :time="period(item.talk.start_time, item.talk.end_time)"
                                          :title="item.talk.title"
                                          :expositor_name="`${item.talk.user.first_name} ${item.talk.user.last_name}`"
                                          :expositor_profession="`${item.talk.user.address}`"
                                          :background="item.talk.background"
                                          :userOption="item.talk.user_option"
                                          :user_img="`${item.talk.user.avatar}`"
                                          :live="item.talk.live===1"
                                          :id="item.talk.id"
                                          :show="show"
                                          />
                                  </div>
                              </div>    
                          </div>
                        </div>
                        <div v-if="past_webinar_count > 0">
                          <div class="px-8">
                              <h2 class="font-bold uppercase my-8">{{$t('Seen')}} </h2>
                          </div>
                          <div class="vx-row" >
                              <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in filtered_past_webinars" >
                                  <div class="px-2">
                                      <webinar-card 
                                          :workdate="item.talk.talk_date"
                                          :time="period(item.talk.start_time, item.talk.end_time)"
                                          :title="item.talk.title"
                                          :expositor_name="`${item.talk.exhibitor_name}`"
                                          :expositor_profession="`${item.talk.exhibitor_profession}`"
                                          :background="item.talk.background"
                                          :userOption="item.talk.user_option"
                                          :user_img="`${me.avatar}`"
                                          :live="item.talk.live===1"
                                          :id="item.talk.id"
                                          :show="show" />
                                  </div>
                              </div>    
                          </div>
                        </div>
                    </div>
                    <div class="vx-col w-1/4 event-los-panel bg-white-grey">
                        <div class="ml-8 bg-white" style="height: 100%">
                            <div class="p-6 font-bold">
                                <span class="h6 font-bold upper-case">{{$t('Ads')}} </span>
                            </div>
                            <div class="px-4">
                              <swiper :options="swiperOption">
                                <swiper-slide :key="`swiper-item-${index}`" v-for="(item, index) in ads_list">
                                  <img class="responsive" :src="`/fair_image/${item.url ? item.url : 'placeholder.png'}`" alt="">
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
            </div>
        </div> 
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import Datepicker from 'vuejs-datepicker'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import WebinarCard from './WebinarCard.vue'
import vSelect from 'vue-select'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    vSelect,
    WebinarCard,
    swiper,
    swiperSlide
  },
  data () {
    return {
      me: {},
      reserved_webinars: [],
      past_webinars: [],
      exhibitors: [{id: 0, label: this.$t('Everyone')}],
      selected_exhibitor: {id: 0, label: this.$t('Everyone')},
      categories: [
        {id: 0, label: this.$t('Everyone')},
        {id: 1, label: this.$t('Reserved')},
        {id: 2, label: this.$t('Seen')}
      ],
      types: [
        {id: 0, label: this.$t('Everyone')},
        {id: 1, label: this.$t('Live')},
        {id: 2, label: this.$t('Recorded')}
      ],
      selected_type: {id: 0, label: this.$t('Everyone')},
      selected_category: {id: 0, label: this.$t('Everyone')},
      ads_list: [],
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
  computed: {
    available () {
      return (this.reserved_webinar_count + this.past_webinar_count) > 0
    },
    reserved_webinar_count () {
      let count = 0
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.reserved_webinars) {
        if (this.selected_type_id === 0) {
          count += this.reserved_webinars.filter((it) => {
            if (this.selected_exhibitor_id === 0) return true
            return it.talk.user_id === this.selected_exhibitor_id
          }).length
        } else {
          count += this.reserved_webinars.filter((it) => (it.talk.live === this.selected_type_id) && (this.selected_exhibitor_id === 0 ? true : it.talk.user_id === this.selected_exhibitor_id)).length
        }
      }
      return count
    },
    past_webinar_count () {
      let count = 0
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 2) && this.past_webinars) {
        if (this.selected_type_id === 0) {
          count += this.past_webinars.filter((it) => {
            if (this.selected_exhibitor_id === 0) return true
            return it.talk.user_id === this.selected_exhibitor_id
          }).length
        } else {
          count += this.past_webinars.filter((it) => (it.talk.live === this.selected_type_id) && (this.selected_exhibitor_id === 0 ? true : it.talk.user_id === this.selected_exhibitor_id)).length
        }
      }
      return count
    },
    filtered_reserved_webinars () {
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.reserved_webinars) {
        if (this.selected_type_id === 0) {
          return this.reserved_webinars.filter((it) => {
            if (this.selected_exhibitor_id === 0) return true
            return it.talk.user_id === this.selected_exhibitor_id
          })
        } else {
          return this.reserved_webinars.filter((it) => (it.talk.live === this.selected_type_id) && (this.selected_exhibitor_id === 0 ? true : it.talk.user_id === this.selected_exhibitor_id)) 
        }
      }
      return []
    },
    filtered_past_webinars () {
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 2) && this.past_webinars) {
        if (this.selected_type_id === 0) {
          return this.past_webinars.filter((it) => {
            if (this.selected_exhibitor_id === 0) return true
            return it.talk.user_id === this.selected_exhibitor_id
          })
        } else {
          return this.past_webinars.filter((it) => (it.talk.live === this.selected_type_id) && (this.selected_exhibitor_id === 0 ? true : it.talk.user_id === this.selected_exhibitor_id)) 
        }
      }
      return []
    },
    selected_cat_id () {
      if (this.selected_category) return this.selected_category.id
      return 0
    },
    selected_type_id () {
      if (this.selected_type) return this.selected_type.id
      return 0
    },
    selected_exhibitor_id () {
      if (this.selected_exhibitor) return this.selected_exhibitor.id
      return 0
    }
  },
  methods: {
    period (start_time, end_time) {
      if (start_time === null || end_time === null) return ''
      const st = this.$date.timeFormat(start_time)
      const et = this.$date.timeFormat(end_time)  
      return `${st} - ${et}`  
    },
    show (option, id) {
      if (option === 0) {
        this.$vs.notify({
          title: this.$t('Error'),
          text: this.$t('WebinarOption'),
          color: 'danger',
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        })
        return
      }
      const action = `/api/room/talk/check/${id}`
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          console.log(response.data)
          this.$loading.hide(this)
          if (response.data.status !== 'ok') {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('WebinarDate'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
            
          } else {
            if (this.show && this.id) this.show(this.id)  
            
            this.$loading.show(this)
            this.$http.post('/api/room/webinar/see', {_id: id})
              .then((response) => {
                this.$loading.hide(this)
                if (response.data.status === 'ok') {
                  this.$vs.notify({
                    title: this.$t('Success'),
                    text: this.$t('SuccessMessage'),
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle'
                  })
                  this.$router.go()

                } else {
                  this.$vs.notify({
                    title: this.$t('Error'),
                    text: this.$t('FailMessage'),
                    color: 'danger',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle'
                  })
                } 
              })
          }
        })
    }  
  },
  created () {
    this.me = JSON.parse(localStorage.getItem('userInfo'))
    this.$loading.show(this)
    this.$http.post('/api/setting/webinar')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        this.reserved_webinars = data.reserved_webinars
        this.past_webinars = data.past_webinars
        console.log(data)
        for (const wc in this.reserved_webinars) {
          // console.log(this.exhibitors, this.webinars[wc].user_id, this.exhibitors.lastIndexOf((ex) => ex.id === this.webinars[wc].user_id))
          if (!this.exhibitors.find((ex) => ex.id === this.reserved_webinars[wc].talk.user_id)) {
            this.exhibitors.push({id: this.reserved_webinars[wc].talk.user_id, label: this.reserved_webinars[wc].talk.exhibitor_name})
          }
        }
        for (const wc in this.past_webinars) {
          // console.log(this.exhibitors, this.webinars[wc].user_id, this.exhibitors.lastIndexOf((ex) => ex.id === this.webinars[wc].user_id))
          if (!this.exhibitors.find((ex) => ex.id === this.past_webinars[wc].talk.user_id)) {
            this.exhibitors.push({id: this.past_webinars[wc].talk.user_id, label: this.past_webinars[wc].talk.exhibitor_name})
          }
        }
        console.log(this.exhibitors)
      })
    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })
  }
}
</script>
<style lang="scss">

.setting-webinar-main {
  .page-content{
      background: white;

      .event-panel {
        padding: 0 !important;        
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .chevron-border {
           border: 1px solid #f2f2f2;
           border-radius: 0.5rem;
           padding: 0.4rem; 
        }
      }

       .event-los-panel {
        padding: 0 !important;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
      }

  }
  .vx-row {
      margin: 0 !important;
  }

  .vx-col {
      padding: 0 !important;
  }
}

</style>