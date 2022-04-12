<script setup lang="ts">
import type { Brewery } from '@/types'
import { PropType } from 'vue'

const TYPE_COLORS = {
  micro: {
    color: '#10b981',
    text: '#fff',
  },
  planning: {
    color: '#f9a826',
    text: '#fff',
  },
  brewpub: {
    color: '#4338ca',
    text: '#fff',
  },
  others: {
    color: '#FFF',
    text: '#000',
  },
}

function getTypeColors(type: string): any {
  type ObjectKey = keyof typeof TYPE_COLORS
  return TYPE_COLORS[type as ObjectKey] || TYPE_COLORS['others']
}

defineProps({
  brewery: {
    type: Object as PropType<Brewery>,
    default: {},
  },
})
</script>

<template>
  <div class="brewery">
    <h1 class="brewery__title">{{ brewery.name }}</h1>
    <div class="brewery__address">
      <div>{{ brewery.street }}</div>
      <div>{{ brewery.city }} - {{ brewery.postal_code }}</div>
      <div>{{ brewery.country }}</div>
    </div>

    <div class="divider"></div>
    <div class="brewery__type-container">
      <div
        :style="{
          backgroundColor: getTypeColors(brewery.brewery_type).color,
          color: getTypeColors(brewery.brewery_type).text,
        }"
        class="brewery__type"
      >
        {{ brewery.brewery_type }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.brewery {
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 15px;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  color: var(--brewery-font-color);
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 10px;
  transition: all ease-out 0.2s;
  justify-content: space-between;
}

.brewery:hover {
  transform: scale(1.02);
}

.brewery__type-container {
  display: flex;
  gap: 5px;
  align-items: center;
}

.brewery__type {
  background-color: yellow;
  width: auto;
  padding: 5px 10px;
  border-radius: 1rem;
}

.divider {
  border-top: 1px solid var(--divider-color);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
