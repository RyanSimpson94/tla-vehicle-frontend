<template>
  <section class="vehicle-group">
      <h2 v-if="title">{{ title }}</h2>

      <div class="display--flex flex-direction--row align-items--center flex--wrap">
        <vehicle-card :vehicle="vehicle" v-for="vehicle in vehicleGroup.vehicles" :key="vehicle.id">
          <template v-slot:cta>
            <app-button type="button" size="large" theme="primary" @click="selectVehicle(vehicle)">Select</app-button>
          </template>
        </vehicle-card>
      </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'VehicleGroup',
  components: {
    'vehicle-card': () => import('./VehicleCard')
  },
  props: {
    title: {
      type: String,
      required: false
    },
    vehicleGroup: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['selectVehicle'])
  }
}
</script>

<style lang="scss" scoped>
  .vehicle-group {
    margin: 1.5em 3em;
    padding: 1em;
  }
</style>