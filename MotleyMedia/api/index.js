import fetch from "node-fetch";
import fs from "fs";

import instaProcess from "./insta.js";

const write = ( data, file = "./data.json" ) =>
    fs.writeFileSync( file,
        typeof data === "string" ? data : JSON.stringify( data, null, 2 )
    );

const insta = {
    id: ( id ) => `https://www.instagram.com/${ id }/?__a=1`,
    preprocess: JSON.parse,
    process: instaProcess
};

fetch( insta.id( "art_saransh" ) )
    .then( res => res.text() )
    .then( r => {
        const raw = JSON.parse( r );
        const data = insta.process( raw );
        // console.log( data );
        write( data );
    } );