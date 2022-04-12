import mockAxios from 'axios'

import { breweryService } from '@/services/brewery'
import { mockBreweries } from '@/tests/unit/mocks'

jest.mock('axios')

describe('BreweryService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return all of breweries', async () => {
    const mockedBreweries = mockBreweries()
    const getSpy = jest.spyOn(mockAxios, 'get')

    getSpy.mockReturnValueOnce(Promise.resolve({
      data: mockedBreweries,
    }));
  
    const result = await breweryService(mockAxios).getAll()
    const breweries = result.data

    expect(getSpy).toHaveBeenCalled()
    expect(breweries).toBe(mockedBreweries)
  })

  it('should throw error when getAll fails', async () => {

    const getSpy = jest.spyOn(mockAxios, 'get')
    
    getSpy.mockReturnValueOnce(Promise.reject({
      status: 500,
      statusText: 'Internal Server Error',
    }))

    try {
      await breweryService(mockAxios).getAll()
    } catch (e: any) {
      expect(e.status).toBe(500)
      expect(e.statusText).toBe('Internal Server Error')
    }

    expect(getSpy).toHaveBeenCalled()
  })
})