const process = json => {
    const raw_user = json.graphql.user;

    const user = {
        name: raw_user.full_name,
        username: raw_user.username,
        url: `https://www.instagram.com/${ raw_user.username }/`,
        image: raw_user.profile_pic_url_hd || raw_user.profile_pic_url,
        fields: json.seo_category_infos.map( info => info[ 0 ] ).join( ', ' )
    };

    const raw_data = raw_user.edge_owner_to_timeline_media.edges;

    const works = raw_data.map( e => {
        const { display_url, shortcode, edge_media_to_caption, taken_at_timestamp } = e.node;
        return {
            user,
            name: edge_media_to_caption.edges[ 0 ].node.text,
            url: `https://www.instagram.com/p/${ shortcode }/`,
            published_on: taken_at_timestamp * 1000,
            image: display_url,
        };
    } );

    return works;
};

export default process;