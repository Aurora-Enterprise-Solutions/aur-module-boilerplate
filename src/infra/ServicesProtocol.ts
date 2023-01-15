import { BazService } from '../services/test'

export interface ServicesProtocol {
  get baz(): BazService
}
