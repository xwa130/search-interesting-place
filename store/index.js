import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
    places: [],
    selected: []
  },
  mutations: {
    ADD_MARKER_PLACE(state, payload) {
      this.replaceState(payload);
    },
    REMOVE_MARKER_PLACE(state, payload) {
      this.replaceState(payload);
    }
  },
  actions: {
    addMarkerPlaceSelect({ commit, state }, { marker, place }) {
      state.markers.push(marker);
      state.places.push(place);
      state.selected.push(marker.id);
      commit('ADD_MARKER_PLACE', state);
    },
    removeMarkerPlaceSelect({ commit, state }, id) {
      for (let i = 0; i < state.markers.length; i++) {
        if (state.markers[i].id === id) {
          state.markers.splice(i, 1);
          break;
        }
      }
      for (let j = 0; j < state.places.length; j++) {
        if (state.places[j].id === id) {
          state.places.splice(j, 1);
          break;
        }
      }
      for (let k = 0; k < state.selected.length; k++) {
        if (state.selected[k] === id) {
          state.selected.splice(k, 1);
          break;
        }
      }
      commit('REMOVE_MARKER_PLACE', state);
    }
  }
});