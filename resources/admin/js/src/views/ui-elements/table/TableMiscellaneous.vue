<!-- =========================================================================================
    File Name: TableMiscellaneous.vue
    Description: Combine filter,sorter, pagination etc.

========================================================================================== -->


<template>
    <vx-card title="Miscellaneous" code-toggler>

        <p>You can add a <strong>filtered, sorted, paginated and multi selected</strong> table with combination of the <code>search</code>, <code>multiple</code> and <code>pagination</code> properties for example</p><br>

        <vs-table multiple v-model="selected" pagination max-items="3" search :data="users">

            <template slot="thead">
                <vs-th sort-key="email">Email</vs-th>
                <vs-th sort-key="username">Name</vs-th>
                <vs-th sort-key="website">Website</vs-th>
                <vs-th sort-key="id">Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

        <prism language="js" class="rounded-lg">
{{ selected }}
        </prism>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-table multiple v-model=&quot;selected&quot; pagination max-items=&quot;3&quot; search :data=&quot;users&quot;&gt;

    &lt;template slot=&quot;thead&quot;&gt;
      &lt;vs-th sort-key=&quot;email&quot;&gt;Email&lt;/vs-th&gt;
      &lt;vs-th sort-key=&quot;username&quot;&gt;Name&lt;/vs-th&gt;
      &lt;vs-th sort-key=&quot;website&quot;&gt;Website&lt;/vs-th&gt;
      &lt;vs-th sort-key=&quot;id&quot;&gt;Nro&lt;/vs-th&gt;
    &lt;/template&gt;

    &lt;template slot-scope=&quot;{data}&quot;&gt;
      &lt;vs-tr :data=&quot;tr&quot; :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

        &lt;vs-td :data=&quot;data[indextr].email&quot;&gt;
          {{ "\{\{ data[indextr].email \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].username&quot;&gt;
          {{ "\{\{ data[indextr].username \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
          {{ "\{\{ data[indextr].website \}\}" }}
        &lt;/vs-td&gt;

        &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
          {{ "\{\{ data[indextr].id \}\}" }}
        &lt;/vs-td&gt;

      &lt;/vs-tr&gt;
    &lt;/template&gt;
  &lt;/vs-table&gt;

  &lt;pre&gt; {{ "\{\{ selected \}\}" }} &lt;/pre&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      selected: [],
      'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      users: [
        {
          &quot;id&quot;: 1,
          &quot;name&quot;: &quot;Leanne Graham&quot;,
          &quot;username&quot;: &quot;Bret&quot;,
          &quot;email&quot;: &quot;Sincere@april.biz&quot;,
          &quot;website&quot;: &quot;hildegard.org&quot;,
        },
        {
          &quot;id&quot;: 2,
          &quot;name&quot;: &quot;Ervin Howell&quot;,
          &quot;username&quot;: &quot;Antonette&quot;,
          &quot;email&quot;: &quot;Shanna@melissa.tv&quot;,
          &quot;website&quot;: &quot;anastasia.net&quot;,
        },
        {
          &quot;id&quot;: 3,
          &quot;name&quot;: &quot;Clementine Bauch&quot;,
          &quot;username&quot;: &quot;Samantha&quot;,
          &quot;email&quot;: &quot;Nathan@yesenia.net&quot;,
          &quot;website&quot;: &quot;ramiro.info&quot;,
        },
        {
          &quot;id&quot;: 4,
          &quot;name&quot;: &quot;Patricia Lebsack&quot;,
          &quot;username&quot;: &quot;Karianne&quot;,
          &quot;email&quot;: &quot;Julianne.OConner@kory.org&quot;,
          &quot;website&quot;: &quot;kale.biz&quot;,
        },
        {
          &quot;id&quot;: 5,
          &quot;name&quot;: &quot;Chelsey Dietrich&quot;,
          &quot;username&quot;: &quot;Kamren&quot;,
          &quot;email&quot;: &quot;Lucio_Hettinger@annie.ca&quot;,
          &quot;website&quot;: &quot;demarco.info&quot;,
        },
        {
          &quot;id&quot;: 6,
          &quot;name&quot;: &quot;Mrs. Dennis Schulist&quot;,
          &quot;username&quot;: &quot;Leopoldo_Corkery&quot;,
          &quot;email&quot;: &quot;Karley_Dach@jasper.info&quot;,
          &quot;website&quot;: &quot;ola.org&quot;,
        },
        {
          &quot;id&quot;: 7,
          &quot;name&quot;: &quot;Kurtis Weissnat&quot;,
          &quot;username&quot;: &quot;Elwyn.Skiles&quot;,
          &quot;email&quot;: &quot;Telly.Hoeger@billy.biz&quot;,
          &quot;website&quot;: &quot;elvis.io&quot;,
        },
        {
          &quot;id&quot;: 8,
          &quot;name&quot;: &quot;Nicholas Runolfsdottir V&quot;,
          &quot;username&quot;: &quot;Maxime_Nienow&quot;,
          &quot;email&quot;: &quot;Sherwood@rosamond.me&quot;,
          &quot;website&quot;: &quot;jacynthe.com&quot;,
        },
        {
          &quot;id&quot;: 9,
          &quot;name&quot;: &quot;Glenna Reichert&quot;,
          &quot;username&quot;: &quot;Delphine&quot;,
          &quot;email&quot;: &quot;Chaim_McDermott@dana.io&quot;,
          &quot;website&quot;: &quot;conrad.com&quot;,
        },
        {
          &quot;id&quot;: 10,
          &quot;name&quot;: &quot;Clementina DuBuque&quot;,
          &quot;username&quot;: &quot;Moriah.Stanton&quot;,
          &quot;email&quot;: &quot;Rey.Padberg@karina.biz&quot;,
          &quot;website&quot;: &quot;ambrose.net&quot;,
        },
      ]
    }
  },
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  data () {
    return {
      'selected': [],
      'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      'users': [
        {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'website': 'hildegard.org'
        },
        {
          'id': 2,
          'name': 'Ervin Howell',
          'username': 'Antonette',
          'email': 'Shanna@melissa.tv',
          'website': 'anastasia.net'
        },
        {
          'id': 3,
          'name': 'Clementine Bauch',
          'username': 'Samantha',
          'email': 'Nathan@yesenia.net',
          'website': 'ramiro.info'
        },
        {
          'id': 4,
          'name': 'Patricia Lebsack',
          'username': 'Karianne',
          'email': 'Julianne.OConner@kory.org',
          'website': 'kale.biz'
        },
        {
          'id': 5,
          'name': 'Chelsey Dietrich',
          'username': 'Kamren',
          'email': 'Lucio_Hettinger@annie.ca',
          'website': 'demarco.info'
        },
        {
          'id': 6,
          'name': 'Mrs. Dennis Schulist',
          'username': 'Leopoldo_Corkery',
          'email': 'Karley_Dach@jasper.info',
          'website': 'ola.org'
        },
        {
          'id': 7,
          'name': 'Kurtis Weissnat',
          'username': 'Elwyn.Skiles',
          'email': 'Telly.Hoeger@billy.biz',
          'website': 'elvis.io'
        },
        {
          'id': 8,
          'name': 'Nicholas Runolfsdottir V',
          'username': 'Maxime_Nienow',
          'email': 'Sherwood@rosamond.me',
          'website': 'jacynthe.com'
        },
        {
          'id': 9,
          'name': 'Glenna Reichert',
          'username': 'Delphine',
          'email': 'Chaim_McDermott@dana.io',
          'website': 'conrad.com'
        },
        {
          'id': 10,
          'name': 'Clementina DuBuque',
          'username': 'Moriah.Stanton',
          'email': 'Rey.Padberg@karina.biz',
          'website': 'ambrose.net'
        }
      ]
    }
  },
  components: {
    Prism
  }
}
</script>
