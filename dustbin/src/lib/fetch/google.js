import { math } from "../";

const ssfetch = async loc => await fetch( `https://api.nukes.in/data/gt?${ loc }` ).then( res => res.json() );

export const google = {
    news: async ( end ) => {
        const raw = await ssfetch( end );
        const fetched = raw.map( e => {
            const dat = e.articles[ 0 ];
            return {
                key: Math.round( Math.random() * 1e6 ),
                source: {
                    general: "google",
                    special: dat.source || "Trends API"
                },
                date: new Date( e.pubDate ),
                type: 'article',
                href: dat.url,
                main: dat.snippet,
                image: dat?.image || e.image.imgUrl
            };
        } );

        return fetched.filter( e => e.main.length > 100 && math.fuzzy( 25 ) );
    }
}