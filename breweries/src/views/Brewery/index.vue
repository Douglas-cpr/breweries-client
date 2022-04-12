<script lang="ts" setup>
import { useBreweryStore } from '@/store';
import { Brewery } from '@/types';
import { onMounted, onUnmounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const store = useBreweryStore()

function getCurrentBrewery() {

  if (localStorage.getItem('brewery')) {
    const brewery = getBreweryToLocalStorage();
    return brewery;
  }

  const id = route.params.id
  const breweries = store.breweries
  const currentBrewery = breweries.find(brewery => brewery.id === id)

  if (currentBrewery) {
    setBreweryToLocalStorage(currentBrewery);
  }

  return currentBrewery ?? null
}

function setBreweryToLocalStorage(brewery: Brewery) {
  localStorage.setItem('brewery', JSON.stringify(brewery))
}

function getBreweryToLocalStorage(): Brewery {
  const brewery = JSON.parse(localStorage.brewery) as Brewery
  return brewery;
}

function openGoogleMaps() {
  const url = `https://www.google.com/maps/search/?api=1&query=${state.brewery?.latitude},${state.brewery?.longitude}`
  window.open(url, '_blank')
}

type StateProps = {
  brewery: Brewery | null
}

const state: StateProps = reactive({
  brewery: null
})

onMounted(() => {
  state.brewery = getCurrentBrewery()
})

onUnmounted(() => {
  localStorage.removeItem('brewery')
})

</script>

<template>
  <div class="brewery__wrapper">
    <a
  class="brewery__link"
  @click="(e: MouseEvent) => router.push({ name: 'Home' })"
  >
    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
  </a>

  <div class="brewery" v-if="state.brewery">
    <h1 class="brewery__name">{{ state.brewery.name }}</h1>
    <p>type: {{ state.brewery.brewery_type }}</p>
    <div class="brewery__address">
      <div>Street: {{ state.brewery.street }}</div>
      <div>City: {{ state.brewery.city }}</div>
      <div>State: {{ state.brewery.state }}</div>
      <div>Country: {{ state.brewery.country }}</div>
      <div>Website: {{ state.brewery.website_url }}</div>
      <div>Phone: {{ state.brewery.phone }}</div>
      <div 
        @click="openGoogleMaps"
      >
        Open in maps: <span class="brewery__coordinates">{{ state.brewery.longitude }}, {{ state.brewery.longitude }}</span>
      </div>
    </div>
  </div>
  </div>


</template>

<style scoped>
.brewery__wrapper {
  padding: 20px var(--default-width-padding);
  display: flex;
  flex-direction: column;
  height: auto;
}

.brewery__link {
  padding-bottom: 1.5rem;
  cursor: pointer;
  transition: all ease-out 0.2s;
}

.brewery__link:hover {
  color: #a1a1aa;
}

.brewery {
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
}

.brewery__name {
  padding-bottom: 10px;
}

.brewery div {
  padding: 3px 0;
}

.brewery__coordinates {
  cursor: pointer;
  color: var(--link-color);
  text-decoration: underline;
}
</style>