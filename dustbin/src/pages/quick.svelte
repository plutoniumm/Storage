<script>
    import Struct from "$components/stalincard.svelte";
    import { onMount } from "svelte";

    $: weather = {};
    onMount(() => {
        fetch(
            "https://openweathermap.org/data/2.5/onecall?lat=15.3333&lon=74.0833&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02"
        )
            .then((d) => d.json())
            .then((r) => (weather = r.current));
    });
</script>

<section class="ƒ ƒ∑">
    <h2 class="w-100">Digestor</h2>
    <Struct href="https://www.morningbrew.com/daily/issues/latest">
        <div slot="body">
            <h3 class="m0 p0">Finance Impacting News</h3>
            <p style="margin-bottom:0;">
                Click to go to Morning Brew ☕️ &rarr;
            </p>
        </div>
    </Struct>
    <Struct
        href="https://classic.nullschool.net/#current/wind/surface/level/overlay=temp/grid=on/orthographic=-286.56,15.48,20196/loc=73.755,15.462"
    >
        <div class="" style="margin-bottom:0;" slot="body">
            <div class="progress rx10 m0 p0 p-rel" style="height:10px;">
                <div
                    class="dot h-100 p-abs"
                    style="left:{weather.temp / 0.5}%"
                />
                &nbsp;
            </div>
            <div class="†c">
                <div style="font-size:2rem;">
                    {Math.round(+weather.temp * 10) / 10}&deg;C
                </div>
                <div style="font-size:0.8rem;">
                    Feels {Math.round(+weather.feels_like * 10) / 10}&deg;C
                </div>
                <!-- Wind Speed: {weather.wind_speed} <br /> -->
                <!-- Pressure: {weather.pressure} <br /> -->
                <!-- Visibility: {weather.visibility} <br /> -->
            </div>
        </div>
    </Struct>
</section>

<style>
    .dot {
        width: 2px;
        background: #000;
    }
    .progress {
        background: linear-gradient(to right, #00f, #f80);
    }
</style>
