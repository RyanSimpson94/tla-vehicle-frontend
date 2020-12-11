<template>
  <main>
    <div class="display--flex flex-direction--column align-items--center">
      <template v-if="vehicles && !selectedVehicle">
        <vehicle-group
          :title="group.title"
          :vehicle-group="group"
          v-for="group in vehicles"
          :key="group.id"
        />
      </template>

      <vehicle-card v-if="selectedVehicle" :vehicle="selectedVehicle" />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "VehicleSelect",
  components: {
    "vehicle-group": () => import("./../components/VehicleGroup"),
    "vehicle-card": () => import('./../components/VehicleCard')
  },
  computed: {
    ...mapGetters(['vehicles', 'selectedVehicle'])
  },
  methods: {
    ...mapActions(['getVehicles'])
  },
  mounted() {
    this.getVehicles();
  }
};
</script>