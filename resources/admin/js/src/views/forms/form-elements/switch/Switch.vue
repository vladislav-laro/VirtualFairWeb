<!-- =========================================================================================
    File Name: Switch.vue
    Description: Switch element - Imports all page portion

========================================================================================== -->


<template>
    <div id="form-element-switch-demo">
        <switch-state></switch-state>
        <switch-color></switch-color>
        <switch-text></switch-text>
        <switch-icons></switch-icons>
        <switch-array-value></switch-array-value>
    </div>
</template>

<script>
import SwitchState from './SwitchState.vue'
import SwitchColor from './SwitchColor.vue'
import SwitchText from './SwitchText.vue'
import SwitchIcons from './SwitchIcons.vue'
import SwitchArrayValue from './SwitchArrayValue.vue'

export default{
  components: {
    SwitchState,
    SwitchColor,
    SwitchText,
    SwitchIcons,
    SwitchArrayValue
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/pages/switch.scss";
</style>
