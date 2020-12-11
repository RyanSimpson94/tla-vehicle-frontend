<template>
  <section class="vehicle-card display--flex align-items--center flex-direction--column">
    <h3 class="vehicle-card__title">{{ vehicle.name }}</h3>
    
    <img class="vehicle-card__img" :alt="vehicle.name" :src="vehicle.imgUrl" v-if="vehicle.imgUrl" />
    <app-placeholder-img class="vehicle-card__img" :height="300" :width="450" v-else />
    
    <div class="vehicle-card__body">
      <p v-if="vehicle.description">{{ vehicle.description }}</p>

      <p class="vehicle-card__price text--center" v-if="vehicle.price">Recommended OTR price ranging from
        <span class="vehicle-card__price__text text--center">{{ vehicle.price }}</span>
      </p>
    </div>
    <slot name="cta"></slot>
  </section>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/variables.scss';

.vehicle-card {
  background: white;
  padding: 0.25em 0.5em 2em 0.5em;
  margin: 1em;
  box-shadow: 8px 8px 8px 2px $color-grey--light;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &__title {
    margin: 1rem 0;
    font-size: 200%;
    font-weight: bold;
    line-height: 2rem;
    width: 100%;
    text-align: center;

    &::after {
      content: '';
      display: block;
      padding-top: 0.5em;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  &__img {
    min-width: 100%;
    height: auto;
    max-width: 350px;
    vertical-align: middle;
    margin: 0.5em;
  }

  &__body {
    margin: 0.5em;
  }

  &__price {
    font-size: 80%;
    margin-bottom: 1.5em;

    &__text {
      display: block;
      font-size: 200%;
      margin: 0;
      color: $color-red;
      font-weight: bolder;
    }
  }
}

</style>