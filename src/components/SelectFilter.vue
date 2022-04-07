<script lang="ts" setup>
import { reactive } from 'vue'

const selectedOption = reactive({
  value: '',
})

interface SelectFilterProps {
  options: string[]
  filterDescription: string
  onChange: (option: string) => void
}

const props = withDefaults(defineProps<SelectFilterProps>(), {
  options: Array,
  filterDescription: '',
  onChange: () => {},
})
</script>

<template>
  <span class="filter__description">Filter:</span>
  <select
    @change="props.onChange(selectedOption.value)"
    v-model="selectedOption.value"
  >
    <option selected value="">{{ filterDescription }}</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
.filter__description {
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
