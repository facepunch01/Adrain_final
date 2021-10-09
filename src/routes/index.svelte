<script context="module">
    import People from "$lib/people.svelte";
    import Header from "$lib/header.svelte";
    import Hero from "$lib/hero.svelte";
</script>
<main>
    <Header></Header>
    <section class="section1">
        <div class="hero">
            <div><Hero text={'Local comic\'s'}>
                <div class="hero-content">
                    <button onclick="#Go">Go</button>
                </div>
            </Hero>
            </div>
            <img class="hero-image" src="hero-image.jpg" alt="">
        </div>
    </section>
    <section>
        <div class="section2">
            <h1 class="section2-header">Meet the team</h1>
            <div class="team">
                <div class="first-person"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>
                <div class="second-person"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>
                <div class="third-peron"><People name="Jake Hackl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum integer enim."></People></div>            
            </div>
        </div>
    </section>
</main>
<style lang="scss">
    $accsent-color: rgb(255, 243, 137);
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    .hero {
        background-color: black;
        margin-top: 1.54rem;
        place-self: center;
        padding: 3rem;
        padding-bottom: 2.9em;
        display: grid;
        font-size: 9px;
        grid-template-columns: repeat(1, 2fr);
        grid-template-rows: repeat(1, 4fr);
        color: black;
        height: 50rem;
        column-gap: 3rem;
        text-transform: uppercase;
        div {
            margin-top: 1rem;
        }
        .hero-content {
            display: grid;
            grid-template-columns: 1fr;
            margin-top: -4rem;
            font-size: 6rem;
            color: rgb(22, 22, 22);
            button {
                justify-self: start;
                align-self: center;
                font-family: "Montserrat";
                color: rgb(19, 19, 19);
                font-size: 0.8em;
                font-weight: 600;
                border: none;
                border-radius: 20px;
                background-color: $accsent-color;
                box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.125);
                padding: 0.2rem;
                padding-left: 2.5rem;
                padding-right: 2.5rem;
            }
        }
        img {
            margin-top: -2rem;
            width: 60rem;
            justify-self: center;
            align-self: center;
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            border-radius: 35px;
            height: 40rem;
        }
    }
    .section2 {
        font-family: "Montserrat";
        .section2-header {
            color: rgba(0, 0, 0, 0.750);
            display: flex;
            font-size: 6.5rem;
            justify-content: center;
            margin-bottom: -5rem;
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