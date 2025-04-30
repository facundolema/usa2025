<script lang="ts">
    import Modal from "$lib/components/modal.svelte";
    import { onMount } from "svelte";

    export let proposal: string;
    export let stop: string;

    let files: string[] = [];
    let selectedIndex: number | null = null;

    onMount(async () => {
        const response = await fetch(`/api/files/${proposal}/${stop}`);
        files = await response.json();
    });

    const openModal = (index: number): void => {
        selectedIndex = index;
    };

    const closeModal = (): void => {
        selectedIndex = null;
    };

    const nextImage = (): void => {
        if (selectedIndex !== null && selectedIndex < files.length - 1) {
            selectedIndex += 1;
        }
    };

    const prevImage = (): void => {
        if (selectedIndex !== null && selectedIndex > 0) {
            selectedIndex -= 1;
        }
    };
</script>

<div>
    {#each files as file, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
            src={`/Selected/${proposal}/${stop}/${file}`}
            alt="California"
            on:click={() => openModal(index)}
            loading="lazy"
        />
    {/each}
</div>

{#if selectedIndex !== null}
    <Modal 
        src={`/Selected/${proposal}/${stop}/${files[selectedIndex]}`} 
        alt="California" 
        onClose={closeModal} 
        onNext={nextImage} 
        onPrev={prevImage} 
    />
{/if}

<style>
    div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: .5rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>