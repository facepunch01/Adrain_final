<script>
    import Header from "$lib/Header.svelte";
    import Hero from "$lib/mainpage/Hero.svelte";
</script>
<div class="sticky top-0 z-50"><Header></Header></div>
<Hero></Hero>
<section class="-mt-16">
    <div class="font-main-font bg-[#0563C1] text-[#fff0dd] py-14 -ml-1 sm:py-32 <sm:flex <sm:flex-col <sm:justify-center <sm:items-center sm:px-16 font-main-font text-[1.3rem]">
        <ul class="sm:list-disc  sm:mt-5">
            <li class="">Fact 1</li>
            <li class="">Fact 2</li>
            <li class="">Fact 3</li>
        </ul>
    </div>
</section>

<style global windi:global>
    @layer utilities {
        .drop-down-closed {
            @apply opacity-0 invisible;
        },
        .drop-down-open {
            @apply opacity-100 visible;
           },
        .font-main-font {
            font-family: 'Montserrat';
        },
        .center-grid {
            @apply flex items-center justify-center;
        },
        .drop-down {
            @apply transition-all;
        }
    }
</style>