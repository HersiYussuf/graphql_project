import { SpotifyAPI } from "./Datasources/spotify-api";

export type DataSourceContext = {
    dataSources: {
        spotifyAPi: SpotifyAPI,
    };
}