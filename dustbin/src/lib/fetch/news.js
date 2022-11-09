import { math } from "../";

const ssfetch = async url => await fetch( url ).then( r => r.json() );

const text_cleaner = ( tx ) => tx
    .replace( "TIL that", "" )
    .replace( "TIL about", "" )
    .replace( "TIL :", "" )
    .replace( "TIL:", "" )
    .replace( "TIL", "" )
    .replace( "Today I Learned", "" )
    .trim();

const image_cleaner = ( array ) => {
    const set = array?.images[ 0 ].resolutions.map( e => e.url );

    const url = set?.length ? set[ 2 ] || set[ 1 ] || set[ 0 ] : undefined;
    return url?.replaceAll( '&amp;', '&' )
};

export const news = {
    reddit: async ( sub ) => {
        const raw = await ssfetch( `https://www.reddit.com/r/${ sub }/new/.json?limit=5` );

        const fetched = raw.data.children.map( e => {
            const dat = e.data;
            return {
                key: Math.round( Math.random() * 1e6 ),
                source: {
                    general: "reddit",
                    special: dat.subreddit
                },
                date: dat.created_utc * 1000 + 198e5,
                type: 'article',
                href: dat.url,
                main: text_cleaner( dat.title ),
                image: image_cleaner( dat.preview )
            };
        } );

        return fetched.filter( e => math.fuzzy( 75 ) );
    },
    wikipedia: async () => {
        const r = await ssfetch( "https://en.wikipedia.org/api/rest_v1/page/random/summary" );

        return {
            key: Math.round( Math.random() * 1e6 ),
            source: {
                general: "wikipedia",
                special: r.titles.display
            },
            date: new Date(),
            type: 'page',
            support: r.titles.display,
            main: r.extract_html.length > 280 ? r.extract_html.slice( 0, 280 ) + "...&rarr;" : r.extract_html,
            image: r.thumbnail.source,
            href: r.content_urls.desktop.page
        };
    }
}