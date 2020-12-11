<template>
  <button
    :type="type"
    class="btn"
    :class="cssClass"
    v-bind="$attrs"
    :disabled="disabled"
    @click="onClick($event)"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
      validator: value => ["button", "submit", "reset"].includes(value)
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: value =>
        ["small", "", "large", "full", "block"].includes(value)
    },
    theme: {
      type: String,
      required: false,
      default: "",
      validator: value => ["primary", "secondary", ""].includes(value)
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    cssClass() {
      return {
        [`btn--${this.theme}`]: this.theme,
        [`btn--${this.size}`]: this.size,
        "btn--disabled": this.disabled
      };
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" style="scoped">
@import './../../assets/scss/variables.scss'; 

.btn {
  border-radius: 25px;
  letter-spacing: 1px;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 100%;
  cursor: pointer;
  font-weight: bold;
  background-color: $color-cta;
  border: 2px solid $color-cta--light;
  color: white;
  padding: 0.25em 1.5em;
  line-height: 1.5em;

  &:hover {
    background-color: lighten($color-cta, 10);
    border-color: lighten($color-cta--light, 5);
    transition: all ease-in-out 0.5s;
  }

  &--small {
    padding: 0.15em 0.75em;
    font-size: 75%;
  }

  &--large {
    padding: 0.5em 3em;
    font-size: 125%;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>