<template>
  <v-flex xs6>
    <v-card height='500px' style='overflow: scroll;'>
      <v-list>
        <template v-for='item, index in places'>
          <v-list-tile
            avatar
            ripple
            @click='selectWindow(item.id)'
            :key='item.id'>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                This place is rated as {{ item.rating }} out of 5 stars.
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action @click='toggle(item.id)'>
              <v-icon
                v-if='selected.indexOf(item.id) < 0'
                color='grey lighten-1'>
                star_border
              </v-icon>
              <v-icon v-else color='yellow darken-2'>
                star
              </v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if='index + 1 < places.length'></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      places: {
        type: Array
      }
    },
    computed: {
      selected() {
        return this.$store.state.selected;
      }
    },
    methods: {
      toggle(id) {
        const i = this.selected.indexOf(id);

        if (i > -1) {
          this.$emit('remove', id);
        } else {
          this.$emit('add', id);
        }
      },
      selectWindow(id) {
        this.$emit('selectWindow', id);
      }
    }
  }
</script>