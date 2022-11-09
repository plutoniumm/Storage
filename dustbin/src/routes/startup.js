import Work from '$lib/worker.js?worker';
import { main_stack, updater } from "$lib/store";

const cfg = [
    {
        enabled: true,
        name: "youtube",
    },
    {
        enabled: true,
        name: "reddit",
    },
    {
        enabled: true,
        name: "wikipedia",
    },
    {
        enabled: true,
        name: "google",
    }
];

const startup = async () => {
    const II = new Work();
    main_stack.set( [] );

    cfg.forEach( e => e.enabled && II.postMessage( e.name ) );

    II.onmessage = ( e ) => updater( e.data.data )

    return 0;
};

export default startup;