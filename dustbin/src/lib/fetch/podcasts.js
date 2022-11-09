import keys from '../../../../AutoMetaOS/config/keys/client_keys';
const key = keys.RSS2JSON;

const ssfetch = async url => await fetch( `https://api.rss2json.com/v1/api.json?api_key=${ key }&rss_url=${ url }` )
    .then( res => res.json() );