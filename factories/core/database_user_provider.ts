/*
 * @adonisjs/auth
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Hash } from '@adonisjs/core/hash'
import type { Database } from '@adonisjs/lucid/database'
import { Scrypt } from '@adonisjs/core/hash/drivers/scrypt'
import { BaseDatabaseUserProvider } from '../../src/core/user_providers/database.js'

/**
 * Representation of a test database user provider extending
 * the base abstract provider.
 */
export class TestDatabaseUserProvider<
  RealUser extends Record<string, any>,
> extends BaseDatabaseUserProvider<RealUser> {}

/**
 * Creates an instance of the DatabaseUserProvider with sane
 * defaults for testing
 */
export class DatabaseUserProviderFactory {
  create(db: Database) {
    return new TestDatabaseUserProvider(db, new Hash(new Scrypt({})), {
      id: 'id',
      table: 'users',
      passwordColumnName: 'password',
      uids: ['email', 'username'],
    })
  }
}
