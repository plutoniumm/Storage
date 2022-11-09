import { math } from "../";
import keys from '../../../../AutoMetaOS/config/keys/client_keys';
const YT_KEY = keys.YT_KEY;

const ssfetch = ( endpoint ) => fetch( 'https://youtube.googleapis.com/youtube/v3' + endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
} ).then( b => b.json() );


const snippet_cleaner = vid => {
    return {
        key: Math.round( Math.random() * 1e6 ),
        source: {
            general: "youtube",
            special: vid.snippet.channelTitle
        },
        date: +new Date( vid.contentDetails.videoPublishedAt ),
        type: 'video',
        href: `https://www.youtube-nocookie.com/embed/${ vid.snippet.resourceId.videoId }`,
        support: vid.snippet.channelTitle,
        main: vid.snippet.title,
        image: vid.snippet.thumbnails.medium.url
    };
}


export const yt = {
    playlist: ( q, num = 3 ) => ssfetch( `/playlistItems?part=snippet%2CcontentDetails&playlistId=${ q }&key=${ YT_KEY }&maxResults=${ num }` ),
    search: ( q ) => ssfetch( `/search?part=snippet&key=${ YT_KEY }&q=${ q }&type=video&maxResults=10` ),
    channel: id => ssfetch( `/search?channelId=${ id }&part=snippet&order=date&maxResults=5&key=${ YT_KEY }` ),
    recents: async ( ids ) => {
        const raw_set_json = await ssfetch( `/channels?part=snippet%2CcontentDetails&id=${ ids.map( ( el ) => el.id ).join( "%2C" ) }&key=${ YT_KEY }` );

        if ( raw_set_json.error ) alert( "QUOTA EXCEEDED" );
        let raw_video_list = await Promise.all(
            raw_set_json.items.map( ( el ) => el.contentDetails.relatedPlaylists.uploads )
                .map( async plId => {
                    let plist = await yt.playlist( plId + "&order=date", 25 )
                    return plist.items
                } )
        );

        const filtered = raw_video_list.flat().filter( ( el ) => {
            const ago = ( new Date() - new Date( el.contentDetails.videoPublishedAt ) ) / 864e5;

            if ( ago < 1 ) return true;
            else {
                const fuzz = raw_video_list.length ** 0.125;
                return math.fuzzy( fuzz );
            }
        } );

        return filtered.map( snippet_cleaner );
    }
};