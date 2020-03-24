import database from '@database';

/* --- Specific Database Connection --- */
const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;

export const initSequalize = () => {
  /**
   * @function Sequalize.sync
   * @description Initialize the connection to the Postgres Database
   */
  database.sync({ force: !isTest || isProduction }).then(async () => {
    /* --- Seed Users --- */
    if (Number(process.env.APP_SEED_USERS)) {
      switch (process.env.APP_SEED_USER_TYPE) {
        case 'single':
          console.log('Seeding Single User');
          seedUsers(userSingle);
          break;
        case 'small':
          console.log('Seeding Multiple User');
          seedUsers(userMultiple);
          break;
        case 'large':
          console.log('Seeding All User');
          seedUsers(users);
          break;
        default:
          console.log('Seeding User Default Select');
          seedUsers(userSingle);
          break;
      }
    }
  });
};
