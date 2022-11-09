import fetch from "node-fetch";
import be_process from "./api/behance.js";
import in_process from "./api/insta.js";

export const sources = {
    behance: {
        id: ( id ) => `https://www.behance.net/${ id }`,
        preprocess: ( text ) => JSON.parse( text.split( `beconfig-store_state">` )[ 1 ].split( `</script>` )[ 0 ] ),
        process: be_process
    },
    instagram: {
        alt: ( id ) => `https://www.instagram.com/${ id }/channel/?__a=1`,
        id: ( id ) => `https://www.instagram.com/${ id }/?__a=1`,
        preprocess: JSON.parse,
        process: in_process
    }
}

export const split = ( endpoint ) => {
    let context = endpoint.split( "/" );
    context.shift();

    const [ source, id ] = context;
    return { source, id };
};

export const get = async ( url ) => {
    const res = await fetch( url );
    return await res.text();
};