const options = { weekday: 'short', year: '2-digit', month: 'short', day: 'numeric' };

export const time = {
    now: () => +new Date(),
    format: ( dt ) => ( new Date( dt ) || new Date() ).toLocaleDateString( 'en-GB', options ),
    since: () => ( val ) => {
        val = 0 | ( ( Date.now() - new Date( val ) ) / 1000 );
        let unit,
            length = {
                second: 60,
                minute: 60,
                hour: 24,
                day: 7,
                week: 4.35,
                month: 12,
                year: 10000,
            },
            result;

        for ( unit in length ) {
            result = val % length[ unit ];
            if ( !( val = 0 | ( val / length[ unit ] ) ) )
                return result + " " + ( result - 1 ? unit + "s" : unit );
        }
    }
}

export const fuzzy = ( ratio = 50 ) => Math.random() < ratio / 100;