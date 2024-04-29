import { IResolvers } from '@graphql-tools/utils';
import { SpotifyAPI } from './Datasources/spotify-api';
export const resolvers: IResolvers = {
    Query: {
        featuredPlaylists: async (_parent, args, context, info) => {
            try {
                // Access your data source from the context
                const playlists = await context.dataSources.spotifyAPI.getFeaturedPlaylists();
                return playlists;
            } catch (error) {
                console.error('Error fetching featured playlists:', error);
                throw new Error('Error retrieving featured playlists');
            }
        }
    },
};
