const { Game, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolver = {
    Query: {
        users: async () => {
            return User.find().populate('games');
        },
        user: async (parent, { username }) => {
            return User.findone({ username }).populate('games')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return user.findone({ _id: context.user._id}).populate('games');
            }
            throw AuthenticationError;
        }
    },



    Mutation: {
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return {token, user };
        },
        login: async (parent, {username, password }) => {
            const user = await User.findOne({ username })

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            
            return { token, user };
        },
        saveGame: async (parent, { newGame }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { savedGames: newGame }},
                    { new: true, runValidators: true}
                );
                return updatedUser;
            }
            throw AuthenticationError
        },
        removeGame: async (parent, { gameId }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { savedGames: { gameId } }},
                    { new: true, runValidators: true}
                );
                return updatedUser;
        }
        throw AuthenticationError
    }
}}

module.exports = resolver