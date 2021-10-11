<script>
    export let name;
    export let text;
</script>
<div class="main-container">
    <h3>{name}</h3>
    <p>{text}</p>
    <img class="icon" src="player.svg" alt="">
</div>
<style lang="scss">
    .main-container {
        $accsent-color: #5482FF;
        display: grid;
        grid-auto-columns: 1fr;
        margin: 12rem;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 6rem;
        padding: 2rem;
        border-radius: 0.7rem;
        background-color: $accsent-color;
        font-size: 1.5rem;
        justify-content: center;
        text-align: center;
        p {
            max-width: 30rem;
            margin-bottom: 3rem;
        }
        h3 {
            margin-top: 0.5rem;
            margin-bottom: 0.8rem;
            place-self: center;
            font-size: 3rem;
        }
    }
    .icon {
        place-self: center;
        border-radius: 40rem;
        width: 4rem;
        border: solid #95bbdf 0.5rem;
        margin-bottom: 1rem;
    }
</style>