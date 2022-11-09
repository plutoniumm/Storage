const getImage = ( images ) => {
    const key = Object.keys( images ).reverse()[ 0 ];
    return images[ key ];
};

const process = json => {
    const raw_user = json.subscription.entityOwners[ 0 ];

    const user = {
        name: raw_user.display_name,
        username: raw_user.username,
        url: raw_user.url,
        image: getImage( raw_user.images ),
        fields: raw_user.fields.map( e => e.name ).join( ', ' )
    };

    const raw_data = json.profile.activeSection.work.projects
        .sort( ( a, b ) => ( a.published_on - b.published_on ) );

    const works = raw_data.map( e => {
        const { name, share_url, published_on, covers } = e;
        return {
            source: "behance",
            user,
            name: name.replaceAll( '- ', '-' ).replaceAll( ' -', '-' ),
            url: share_url,
            time: published_on * 1000,
            image: getImage( covers )
        };
    } );

    return works;
};

export default process;