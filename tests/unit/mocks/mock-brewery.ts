import type { Brewery } from '@/types'

import faker from 'faker'

export const mockBrewery = (): Brewery => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  street: faker.address.streetAddress(),
  brewery_type: faker.company.companyName(),
  postal_code: faker.address.zipCode(),
  website_url: faker.internet.url(),
  phone: faker.phone.phoneNumber(),
  state: faker.address.state(),
  city: faker.address.city(),
  country: faker.address.country(),
  longitude: faker.address.longitude(),
  latitude: faker.address.latitude()
})

export const mockBreweries = (): Brewery[] => ([
  mockBrewery(),
  mockBrewery()
])