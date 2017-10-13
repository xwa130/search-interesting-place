<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <google-map
          :markers='markers'
          :showWindow='showWindow'>
        </google-map>
        <place-list
          :places='places'
          @selectWindow='selectWindow'
          @add='add'
          @remove='remove'>
        </place-list>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import GoogleMap from '../components/GoogleMap';
  import PlaceList from '../components/PlaceList';

  export default {
    components: { GoogleMap, PlaceList },
    data() {
      return {
        showWindow: null,
      }
    },
    computed: {
      markers() {
        return this.$store.state.markers;
      },
      places() {
        return this.$store.state.places;
      }
    },
    methods: {
      ...mapActions([
        'addMarkerPlaceSelect',
        'removeMarkerPlaceSelect'
      ]),
      add(id) {
        const payload = {};
        for (let i = 0; i < this.markers.length; i++) {
          if (this.markers[i].id === id) {
            payload.marker = this.markers[i];
            break;
          }
        }
        for (let j = 0; j < this.places.length; j++) {
          if (this.places[j].id === id) {
            payload.place = this.places[j];
            break;
          }
        }
        this.addMarkerPlaceSelect(payload);
      },
      remove(id) {
        this.removeMarkerPlaceSelect(id);
      },
      selectWindow(id) {
        this.markers.forEach(ele => {
          if (ele.id === id)
            this.showWindow = ele;
        });
      }
    }
  };
</script>
