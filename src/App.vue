<template>
  <main>
    <router-view :key="$route.url" />
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;1,600&display=swap");

main {
  font-family: "Nunito Sans", sans-serif;
}

.display {
  &--flex {
    display: flex;
  }
}

.flex-direction {
  &--row {
    flex-direction: row;
  }
  &--column {
    flex-direction: column;
  }
}

.align-items {
  &--center {
    align-items: center;
  }
}

.flex--wrap {
  flex-wrap: wrap;
}

.text {
  &--center {
    text-align: center;
  }

  &--left {
    text-align: left;
  }

  &--right {
    text-align: right;
  }
}
</style>

