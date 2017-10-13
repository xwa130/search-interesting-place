<template>
  <v-flex xs6>
    <v-card>
      <gmap-map
        ref='map'
        :center='center'
        :zoom='15'
      >
        <gmap-marker v-for='m in markers'
          :key='m.id'
          :position='m.position'
          :clickable='true'
          :draggable='true'
          @click='toggleInfoWindow(m)'
        ></gmap-marker>
        <gmap-info-window
          :options='infoOptions'
          :position='infoWindowPos'
          :opened='infoWinOpen'
          @closeclick='infoWinOpen=false'>
          {{ infoContent }}
        </gmap-info-window>
      </gmap-map>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      markers: {
        type: Array
      },
      showWindow: {
        type: Object
      }
    },
    data () {
      return {
        center: {lat: 49.2765926, lng: -123.12160260000002},
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    },
    watch: {
      markers(markers) {
        if (markers.length > 2) {
          const bounds = new google.maps.LatLngBounds();
          for (let m of markers) {
            bounds.extend(m.position)
          }
          this.$refs.map.$mapObject.fitBounds(bounds);
        }
      },
      showWindow(marker) {
        if(!marker) {
          this.infoWinOpen=false;
          return;
        }
        this.toggleInfoWindow(marker);
      }
    },
    methods: {
      toggleInfoWindow(marker) {
        this.center = marker.position;
        this.infoWindowPos = marker.position;
        this.infoContent = marker.infoText;
        if (this.currentMidx == marker.id) {
          //check if its the same marker that was selected if yes toggle
          this.infoWinOpen = !this.infoWinOpen;
        } else {
          //if different marker set infowindow to open and reset current marker index
          this.infoWinOpen = true;
          this.currentMidx = marker.id;
        }
      }
    }
  };
</script>

<style scoped>
  div {
    height: 500px;
  }
</style>