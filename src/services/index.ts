import axios from 'axios'
import { breweryService } from '@/services/breweries'

const API_ENVS = {
  development: 'https://api.openbrewerydb.org/',
}

const httpClient = axios.create({
  baseURL: API_ENVS.development,
})

export default {
  breweries: breweryService(httpClient),
}
