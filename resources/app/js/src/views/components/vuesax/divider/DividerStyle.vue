<!-- =========================================================================================
    File Name: DividerStyle.vue
    Description: Change style of divider line

========================================================================================== -->


<template>
    <vx-card title="Style" code-toggler>

        <p>You can change line's style with the property <code>border-style</code>. The allowed values are equivalent to the <code>border-style</code> property in CSS.</p>

        <vx-list :list="styleTypes" class="mt-3 mb-5"></vx-list>

        <div class="op-block">

            <vs-divider border-style="dotted" color="primary">dotted</vs-divider>
            <vs-divider border-style="dashed" color="success">dashed</vs-divider>
            <vs-divider border-style="solid" color="danger">solid</vs-divider>

        </div>

        <template slot="codeContainer">
&lt;vs-divider border-style=&quot;dotted&quot; color=&quot;primary&quot;&gt;dotted&lt;/vs-divider&gt;
&lt;vs-divider border-style=&quot;dashed&quot; color=&quot;success&quot;&gt;dashed&lt;/vs-divider&gt;
&lt;vs-divider border-style=&quot;solid&quot; color=&quot;danger&quot;&gt;solid&lt;/vs-divider&gt;
        </template>

    </vx-card>
</template>

<script>
export default{
  data () {
    return {
      'styleTypes': [
        '<strong>dotted</strong> - Defines a dotted border',
        '<strong>dashed</strong> - Defines a dotteddashed border',
        '<strong>solid</strong> - Defines a solid border(default)'
      ]
    }
  }
}
</script>
