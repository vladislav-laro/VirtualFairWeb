<!-- =========================================================================================
    File Name: Loading.vue
    Description: Loading - Imports all page portions

========================================================================================== -->


<template>
    <div id="loading-demo">
        <loading-default></loading-default>
        <loading-type></loading-type>
        <loading-color></loading-color>
        <loading-background></loading-background>
        <loading-contained></loading-contained>
    </div>
</template>

<script>
import LoadingDefault from './LoadingDefault.vue'
import LoadingType from './LoadingType.vue'
import LoadingColor from './LoadingColor.vue'
import LoadingBackground from './LoadingBackground.vue'
import LoadingContained from './LoadingContained.vue'

export default{
  components: {
    LoadingDefault,
    LoadingType,
    LoadingColor,
    LoadingBackground,
    LoadingContained
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/pages/loading.scss";
</style>
