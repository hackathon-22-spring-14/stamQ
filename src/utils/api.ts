import { Apis, Configuration } from '../lib/apis/generated'

export const api = new Apis(
  new Configuration({
    basePath: 'http://localhost:3000/api',
  })
)
