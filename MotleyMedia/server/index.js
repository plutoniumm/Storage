import express from "express";
import cors from "cors";
import { get, split, sources } from "./generic.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use( cors() )
app.get( '/*', ( req, res ) => {
    const { source, id } = split( req.url );
    const src = sources[ source ];

    try {
        const data = get( src, id );
        res.send( data );
        get( src.id( id ) ).then( r => {
            const raw = src.preprocess( r );
            const data = src.process( raw );
            res.send( data );
        } );
    } catch {
        const data = get( src, id );
        res.send( data );
        get( src.alt( id ) ).then( r => {
            const raw = src.preprocess( r );
            const data = src.process( raw );
            res.send( data );
        } );
    }
} );


app.listen( PORT, () => console.log( "Running at " + PORT ) );