<script context="module">
    import People from "$lib/people.svelte";
    import Header from "$lib/header.svelte";
    import Hero from "$lib/hero.svelte";
    import "./../styles/global.css"
</script>
<main>
    <Header></Header>
    <section>
        <div class="section1">
            <div class="section1-hero">
                <Hero text="Your friendly neighboorhood bugle"></Hero>
            </div>
            <p class="hero-bottom-left">Tis is test</p>
            <p class="hero-bottom-right">tis is test 2</p>
            <img class="hero-img" src="hero-img.jpg" alt="">
        </div>
    </section>
    <section>
        <div class="section2">
            <h1 class="section2-header">Meet the team</h1>
            <div class="team">
                <div class="first-person"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>
                <div class="second-person"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>
                <div class="third-person"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>            
            </div>
        </div>
    </section>
</main>
<style lang="scss">
    $accsent-color: #5482FF;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    .section1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
        "hero hero img"
        "hero hero img"
        "cta blog img"
        ;
        .hero-img {
            width: 40rem;
            grid-area: img;
        }
        .section1-hero {
            color: #5482FF;
            font-size: 0.3rem;
            grid-area: hero;
            text-align: center;
            background: #FFD8A7;
            place-items: center;
        }
        .hero-bottom-left {
            background: #333;
            text-align: center;
            color: #05B1C1;
            grid-area: cta;
            margin-top: -0.1rem;
            max-height: 14.7rem;
            place-self: center;
        }
        .hero-bottom-right {
            margin-top: -0.1rem;
            text-align: center;
            background: #05B1C1;
            color: #333;
            grid-area: blog;
            max-height: 14.7rem;
            place-self: center;
        }
    }
    .section2 {
        font-family: "Montserrat";
        color: white;
        .section2-header {
            color: #333;
            display: flex;
            font-size: 6.5rem;
            justify-content: center;
        }
        .team {
            display: grid;
            grid-template-areas: 'left center right';
            grid-template-columns: 1fr 1fr 1fr;
            margin-left: 8rem;
            margin-right: 8rem;
            column-gap: 10rem;
            height: 25rem;
            justify-content: center;
            .first-person {
                grid-area: left;
            }
            .second-person {
                grid-area: center;
            }
            .third-person {
                grid-area: right ;
            }
        }
    }
</style>