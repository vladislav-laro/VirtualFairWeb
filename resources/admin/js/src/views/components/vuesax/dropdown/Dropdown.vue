<!-- =========================================================================================
    File Name: Dropdown.vue
    Description: Dropdown - Imports all page portions

========================================================================================== -->


<template>
    <div id="dropdown-demo">
        <dropdown-default></dropdown-default>
        <dropdown-color></dropdown-color>
        <dropdown-group-option></dropdown-group-option>
        <dropdown-custom-content></dropdown-custom-content>
        <dropdown-button></dropdown-button>
    </div>
</template>

<script>
import DropdownDefault from './DropdownDefault.vue'
import DropdownColor from './DropdownColor.vue'
import DropdownGroupOption from './DropdownGroupOption.vue'
import DropdownCustomContent from './DropdownCustomContent.vue'
import DropdownButton from './DropdownButton.vue'

export default{
  components: {
    DropdownDefault,
    DropdownColor,
    DropdownGroupOption,
    DropdownCustomContent,
    DropdownButton
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/pages/dropdown.scss";
</style>
