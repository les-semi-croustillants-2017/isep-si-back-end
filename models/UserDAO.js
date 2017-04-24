const DB = require('../models/Database')

module.exports = {
  getById (id) {
    return DB.accessor.query(
      `SELECT * FROM users WHERE id = ${id}`
    )
      .then((result) => {
        if (result.length === 0) {
          throw new Error('USER NOT_FOUND')
        }
        return result[ 0 ]
      })
      .catch((error) => {
        throw error
      })
  },

  getAll () {
    return DB.accessor.query('SELECT * FROM users')
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
  },

  create (username, email) {
    return DB.accessor.query(
      `INSERT INTO users(name, email) VALUES(${username}, ${email}) RETURNING *`)
      .then((result) => {
        if (result.length === 0) {
          throw new Error('USER NOT CREATED')
        }
        return result[ 0 ]
      })
      .catch((error) => {
        throw error
      })
  },

  delete (id) {
    return DB.accessor.query(`DELETE FROM users WHERE id = ${id}`)
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
  },
  update (id, name, email, allianceId) {
    return DB.accessor.query(`UPDATE users SET name = ${name}, email = ${email}, alliance_id = ${allianceId} WHERE id = ${id} RETURNING *`,
      {
        userID: id,
        name: name,
        email: email
      })
      .then((result) => {
        if (result.length === 0) {
          throw new Error('USER NOT_FOUND')
        }
        return result[ 0 ]
      })
      .catch((error) => {
        throw error
      })
  },

  getCharacters (id) {
    return DB.accessor.query(
      `SELECT * from characters WHERE user_id = ${id}`)
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
  }
}
