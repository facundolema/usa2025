<script lang="ts">
    export let src;
    export let alt;
    export let onClose;
    export let onNext;
    export let onPrev;

    const handleClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('modal')) {
            onClose();
        }
    };

    const handleKeydown = (event: KeyboardEvent) => {
        console.log(event.key);
        if (event.key === 'Escape') {
            onClose();
        } else if (event.key === 'ArrowRight') {
            onNext();
        } else if (event.key === 'ArrowLeft') {
            onPrev();
        }
    };

    let modalDiv: HTMLDivElement;

    const setFocus = () => {
        modalDiv.focus();
    };
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
    class="modal"
    tabindex="0"
    on:click={handleClick}
    on:keydown={handleKeydown}
    bind:this={modalDiv}
    on:load={setFocus}
>
    <div class="modal-content">
        <button class="nav prev" on:click={onPrev}>
            <img src="/icons/previous.svg" alt="Previous" width="20"/>
        </button>
        <img src={src} alt={alt} />
        <button class="nav next" on:click={onNext}>
            <img src="/icons/next.svg" alt="Next" width="20"/>
        </button>
        <button class="close" on:click={onClose}>
            <img src="/icons/close.svg" alt="Close" width="20"/>
        </button>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        position: relative;
        display: flex;
        align-items: center;
    }
    img {
        max-width: 90vw;
        max-height: 90vh;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    button > img {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        padding: 2px;
    }
    .close, .nav {
        position: absolute;
        cursor: pointer;
    }
    .close {
        top: 10px;
        right: 10px;
    }
    .nav.prev {
        left: 10px;
    }
    .nav.next {
        right: 10px;
    }
</style>