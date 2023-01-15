/* eslint-disable no-use-before-define */
import { AurDatabaseProtocol } from "./AurDatabaseProtocol"

let connection: AurDatabaseProtocol['connection']

export abstract class AurDatabaseClient {
  public static set connection (newConnection: AurDatabaseProtocol['connection']) {
    connection = newConnection
  }

  public static get connection (): AurDatabaseProtocol['connection'] {
    return connection
  }
}

export default AurDatabaseClient
