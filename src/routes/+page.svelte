<script>
    import proposalData from '$lib/data.json';
    const proposals = Object.keys(proposalData);
    import Table from '$lib/components/table.svelte';
    import Gallery from '$lib/components/gallery.svelte';
</script>

<div>
    <h1>Propuesta | Estados Unidos 2025</h1>
    
    <img src="/header.jpg" alt="Map of the USA"/>
    
    <h2>Propuestas: California vs. BosWash (Costa Este)</h2>
    <img src="/usa.png" alt="Map of the USA"/>
    {#each proposals as proposal, i}
        <h2>Propuesta #{i+1}: {proposal}</h2>
        <img src="/{proposal}.png" alt="Map of the USA"/>
        <Table data={proposalData[proposal]} />
        {#each Object.keys(proposalData[proposal]["stops"]) as stop, j}
            <h3>Parada {j+1}: {stop} ({proposalData[proposal]["stops"][stop]} días)</h3>
            <Gallery proposal={proposal} stop={stop} />
            {#if stop === "Los Angeles"}
                <iframe
                    src="https://www.youtube.com/embed/2Cb7s2U93pg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            {/if}
        {/each}
    {/each}

</div>

<style>
    div {
        max-width: 800px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        font-family: 'Quicksand';
        margin-bottom: 10rem;
        margin-top: 5rem;
    }
    img {
        width: 100%;
        margin: auto;
        border: 1px solid black;
    }
    h1, h2, h3 {
        font-family: 'Bebas Neue';
        letter-spacing: .2em;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
        letter-spacing: .1rem;
    }
    h2, h3 {
        align-self: flex-start;
    }
    iframe {
        width: 100%;
        aspect-ratio: 16/9;
    }
</style>