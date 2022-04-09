import axios from 'axios'
import { breweryService } from '@/services/brewery'

const API_ENVS = {
  development: 'https://api.openbrewerydb.org/',
}

const httpClient = axios.create({
  baseURL: API_ENVS.development,
})

export default {
  breweries: breweryService(httpClient),
}
