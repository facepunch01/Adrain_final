<script context="module">
    import Header from "$lib/header.svelte";
    import Hero from "$lib/hero.svelte";
</script>
<main>
    <Header></Header>
    <div class="hero">
        <Hero text={'Local comic\'s'}>
            <div class="hero-content">
                <button>test</button>
                cool
            </div>
        </Hero>
        <img src="background.jpg" alt="">
    </div>
</main>
<style lang="scss">
    $accsent-color: rgb(255, 243, 137);
    .hero {
        display: grid;
        grid-template-columns: 2fr [first] 2fr [second];
        font-size: 10.5px;
        color: black;
        img {
            width: 60em;
            grid-column-start: first;
            grid-column-end: second;
        }
        .hero-content {
            grid-column-start: first;
            grid-column-end: first;
            font-size: 9em;
            color: rgb(22, 22, 22);
            button {
                color: rgb(22, 22, 22);
                font-size: 0.8em;
                border: none;
                border-radius: 20px;
                background-color: $accsent-color;
                box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.125);
            }
        }
    }

</style>