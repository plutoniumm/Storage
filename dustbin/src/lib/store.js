import { writable, get } from "svelte/store";

export const main_stack = writable( [] );

export const updater = ( data ) => {
    main_stack.set( [
        ...get( main_stack ),
        ...data
    ] );
    return true;
}