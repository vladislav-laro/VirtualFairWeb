<!-- =========================================================================================
    File Name: SliderTicks.vue
    Description: Add ticks to you slider using step

========================================================================================== -->


<template>
    <vx-card title="Ticks" code-toggler>

        <p>With Ticks you can allow the user to select a value inside a range of allowed values. With the property <strong>step</strong> you can change the distance between each Tick</p>

        <div class="mt-5">
            <vs-slider step="10" v-model="value1"/>
            <vs-slider ticks step="25" v-model="value2"/>
            <vs-slider ticks step="0.5" :step-decimals="true" v-model="value3"/>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-slider step=10 v-model=&quot;value1&quot;/&gt;
  &lt;vs-slider ticks step=25 v-model=&quot;value2&quot;/&gt;
  &lt;vs-slider ticks step=0.5 :step-decimals=&quot;true&quot; v-model=&quot;value3&quot;/&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      value1:60,
      value2:25,
      value3: 25.5
    }
  }
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      value1: 60,
      value2: 25,
      value3: 50.5
    }
  }
}
</script>
