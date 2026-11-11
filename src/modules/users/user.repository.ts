import { db } from "../../config/database.js";

const UserRepository = {
  getUsers: async () => {
    const result = await db.query(/* sql */ `
      SELECT
        *
      FROM
        users
    `);

    return result.rows;
  }
};
export default UserRepository;
