<!-- =========================================================================================
    File Name: Avatar.vue
    Description: Avatars

========================================================================================== -->


<template>
    <div id="avatar-demo">
        <avatar-default></avatar-default>
        <avatar-size></avatar-size>
        <avatar-color></avatar-color>
        <avatar-with-badge></avatar-with-badge>
        <avatar-icon></avatar-icon>
    </div>
</template>

<script>
import AvatarDefault from './AvatarDefault.vue'
import AvatarSize from './AvatarSize.vue'
import AvatarColor from './AvatarColor.vue'
import AvatarWithBadge from './AvatarWithBadge.vue'
import AvatarIcon from './AvatarIcon.vue'

export default{
  components: {
    AvatarDefault,
    AvatarSize,
    AvatarColor,
    AvatarWithBadge,
    AvatarIcon
  }
}
</script>
