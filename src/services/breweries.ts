import { Brewery } from '@/types/brewery'
import { RequestError } from '@/types/error'
import { AxiosInstance } from 'axios'

type GetAll = {
  data: Brewery[]
  errors: RequestError | null
}

interface BreweryService {
  getAll: () => Promise<GetAll>
}

export function breweryService(httpClient: AxiosInstance): BreweryService {
  return {
    getAll: async (): Promise<GetAll> => {
      const response = await httpClient.get('breweries')

      let errors: RequestError | null = null

      if (!response.data) {
        errors = {
          status: response.request,
          statusText: response.request.statusText,
        }
      }

      return {
        data: response.data,
        errors,
      }
    },
  }
}
