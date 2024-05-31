const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('game', 'games');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < gameSeeds.length; i++) {
      const { _id, gameName } = await Game.create(gameSeeds[i]);
      const user = await User.findOneAndUpdate(
        { gamename: gameName },
        {
          $addToSet: {
            games: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
