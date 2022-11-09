import { fetcher } from "$lib";
import vids_cnls from "../../../AutoMetaOS/config/sorted_channels.json";
import news_cnls from "$data/news.json";

const getData = async ( promises ) => ( await Promise.all( promises ) ).flat();

const config = {
    youtube: {
        from: vids_cnls.map( e => e.channels ),
        to: fetcher.yt.recents
    },
    reddit: {
        from: news_cnls.reddit.map( e => e.sub ),
        to: fetcher.news.reddit
    },
    wikipedia: {
        from: Array( 5 ).fill( 0 ),
        to: fetcher.news.wikipedia
    },
    google: {
        from: [ 'US', 'GB', 'IN' ],
        to: fetcher.google.news
    }
};

onmessage = function ( e ) {
    const name = e.data;
    const { from, to } = config[ name ];
    const promises = from.map( e => to( e ) );
    getData( promises ).then( e => postMessage( { name, data: e } ) );
}