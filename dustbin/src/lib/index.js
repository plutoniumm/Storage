import { time, fuzzy } from "./generic";

import { yt } from "./fetch/youtube";
import { google } from "./fetch/google";
import { news } from "./fetch/news";

export const math = {
    time,
    fuzzy
};

export const fetcher = {
    yt,
    news,
    google
}