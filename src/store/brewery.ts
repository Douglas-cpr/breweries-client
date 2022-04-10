import { Brewery } from '@/types'
import { defineStore } from 'pinia'

type UseBreweryStore = {
  breweries: Brewery[]
  selectedType: string
}

export const useBreweryStore = defineStore('BreweryStore', {
  state: (): UseBreweryStore => ({
    breweries: [],
    selectedType: '',
  }),
  getters: {
    breweriesTypes: (state: UseBreweryStore): string[] => {
      return state.breweries
        .map(brewery => brewery.brewery_type)
        .filter((value, index, self) => self.indexOf(value) === index)
    },
    filteredBreweries: (state: UseBreweryStore): Brewery[] => {
      const { breweries, selectedType } = state

      if (selectedType) {
        return breweries.filter(
          brewery => brewery.brewery_type === selectedType,
        )
      }

      return breweries
    },
  },
  actions: {
    setBreweries(breweries: Brewery[]) {
      this.breweries = breweries
    },
    setSelectedType(selectedType: string) {
      this.selectedType = selectedType
    },
  },
})
