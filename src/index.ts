import { createConnection } from 'typeorm'
import { User, UserBlock, UserFriend } from 'database'
import { db } from './config/config'

start()

async function start () {
  const connection = await createConnection({
    type: 'postgres',
    host: db.host,
    port: db.port,
    username: db.user,
    password: db.password,
    database: db.database,
    entities: [ User, UserBlock, UserFriend ]
  })

  await connection.synchronize()
}
