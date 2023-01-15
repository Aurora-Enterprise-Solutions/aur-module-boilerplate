import { MyModuleProps } from '../types'
import AurDatabaseClient from './AurDatabaseClient'
import { ServicesProtocol } from './ServicesProtocol'
import ServicesRepository from './ServicesRepository'

export class MyModule {
  constructor ({ database }: MyModuleProps) {
    // setup database client
    AurDatabaseClient.connection = database.connection

    this.services = new ServicesRepository()
  }

  public services: ServicesProtocol
}

export default MyModule
