import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { useBreweryStore } from '@/store/brewery'
import { mockBreweries, mockBrewery } from '@/tests/unit/mocks'


describe('Brewery Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('actions', () => {
    it('set breweries when pass breweries', () => {
      const store = useBreweryStore()
      const mockedBreweries = mockBreweries()

      store.setBreweries(mockedBreweries)

      expect(store.breweries).toStrictEqual(mockedBreweries)
    })

    it('set selected type when pass', () => {
      const store = useBreweryStore()

      store.setSelectedType('test')

      expect(store.selectedType).toBe('test')
    })
  })

  describe('getters', () => {
    it('return breweries types', () => {
      const store = useBreweryStore()
      const mockedBrewery = mockBrewery()

      store.setBreweries([mockedBrewery])

      expect(store.breweriesTypes).toStrictEqual([mockedBrewery.brewery_type])
    })

    it('return filtered breweries', () => {
      const store = useBreweryStore()
      const mockedBrewery = mockBrewery()

      store.setBreweries([mockedBrewery])
      store.setSelectedType('any__type')

      expect(store.filteredBreweries).toStrictEqual([])
    })
  })
})