<template>
    <div class="setting-webinar-card card-border" :class="{'card-border': !noborder}">
        <div class="relative card-img">
            <img class="relative responsive" :src="`/fair_image/${background}`">
            <div class="card-over text-white flex flex-col w-full justify-between" >
                <div>
                    <span class="text-white absolute p-3 bg-cyan-light" style="font-size: 0.8rem">{{$date.dateFormatWithoutYear(workdate)}}</span> 
                </div>
                <div class="card-title">
                    <div class="flex flex-row items-center">
                        <template v-if="live">
                            <svg-icon size="w-8 h-8" icon="live"/>
                            <div class="ml-2 text-white uppercase" style="font-size: 0.8rem">{{$t('Live')}} </div>
                        </template>
                        <template v-else>
                            <svg-icon size="w-8 h-8" icon="video"/>
                            <div class="ml-2 text-white font-bold uppercase" style="font-size: 0.8rem">{{$t('Recorded')}} </div>
                        </template>
                    </div>
                    <div style="font-style: italic">{{title}}</div>
                </div>
            </div>
        </div>
        <div class="mt-2 center">
            <span class="flex items-center justify-center ml-4">
                <feather-icon svgClasses="w-5 h-5" icon="ClockIcon" class="text-cyan-dark"/>
                <span class="ml-2">{{time}}</span>
            </span>
        </div>
        <div class="flex flex-row items-center mt-2 px-4">
            <img class="user-img" :src="`/fair_image/${user_img ? user_img : 'placeholder.png'}`"/>
            <div class="ml-4 user-info">
                <div class="h6 font-bold">Lic. {{expositor_name}}</div>
                <div>{{expositor_profession}}</div>
            </div>
        </div>
        <div class="flex flex-row justify-end items-center mt-2">
            <vs-button v-show="!reserved" class="cyan-dark event-btn uppercase font-bold">
                {{$t('SeeAgain')}}
            </vs-button>
            <vs-button v-show="reserved" class="blue-dark event-btn p-big uppercase font-bold" @click="showWebinar()">
                {{$t('See')}}
            </vs-button>
        </div>
        <!-- <vs-divider class="px-2" /> -->
    </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    expositor_name: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    user_img: {
      type: String,
      required: true
    },
    noborder: {
      type: Boolean,
      required: false
    },
    workdate: {
      type: String,
      required: true  
    },
    background: {
      type: String,
      required: true  
    },
    reserved: {
      type: Boolean,
      required: false
    },
    live: {
      type: Boolean,
      required: false
    },
    userOption: {
      type: Number,
      required: true
    },
    show: {
      type: Function,
      required: false  
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    showWebinar () {
      this.show(this.user_option, this.id)
    }
  }
}
</script>
<style lang="scss">
.setting-webinar-card {
    background: white;
    margin: 1rem;
    font-size: 1rem;
    font-weight: normal;
    
    .user-img {
        border-radius: 50%;
        background-color: #33333388;
        height: 4rem !important;
        width: 4rem !important;
    }

    .event-btn {
        font-size: 1rem !important;
        padding: 1rem !important;
        min-width: 9rem !important;
        margin-top: .8rem !important;
    }

    .event-btn.p-big {
        padding: 1rem 2rem !important;
    }

    .desc-info {
        font-size: 0.9rem;
        padding: 0 1rem;
        font-style: italic;
    }

    .user-info {
        font-size: 0.9rem;
    }

    .card-over {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        bottom: 0;
        .card-title {
            background: #33333399;
            padding: 0.6rem;
        }
    }

}

.card-border {
    border: 1px solid #F2F2F2
}
</style>