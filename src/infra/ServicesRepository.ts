import bazService, { BazService } from '../services/test'
import { ServicesProtocol } from './ServicesProtocol'

export class ServicesRepository implements ServicesProtocol {
    get baz(): BazService {
        return bazService
    }
}

export default ServicesRepository
