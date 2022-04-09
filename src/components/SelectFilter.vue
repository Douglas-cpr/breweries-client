<script lang="ts" setup>
import { PropType, reactive } from 'vue'

const selectedOption = reactive({
  value: '',
})

defineProps({
  options: {
    type: Array as PropType<string[]>,
    default: null,
  },
  filterDescription: {
    type: String as PropType<string>,
    default: 'Select an option',
  },
  onChange: {
    type: Function as PropType<Function>,
    default: () => {},
  },
})

</script>

<template>
  <span class="filter__label">Filter:</span>
  <select
    @change="onChange(selectedOption.value)"
    v-model="selectedOption.value"
  >
    <option id="filter__description" selected value="">{{ filterDescription }}</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
.filter__label {
  font-size: 0.9rem;
  padding: 0 5px;
}

select {
  appearance: none;
  outline: 0;
  box-shadow: none;
  flex: 1;
  border-radius: 0.25rem;
  padding: 0 1em;
  height: 30px;
  color: var(--brewery-font-color);
  background-color: white;
  background-image: none;
  border: 1px solid var(--select-border-color);
  cursor: pointer;
}
</style>
