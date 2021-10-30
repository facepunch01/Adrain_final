<script>
    let img = 'hero-img.jpg';
</script>

<section class="font-main-font text-center">
    <div class="grid grid-cols-2 md:h-2xl sm:grid-cols-3 grid-rows-2 font-bold h-[30rem]">
        <h1 class="center-grid col-start-1 text-5xl px-14 bg-black md:text-6xl lg:text-7xl text-white col-end-3 grid-item">Your Friendly neighborhood Bugle</h1>
        <p class="center-grid btn btn-outline pl-0 pr-0 ml-0 mr-0 rounded-none border-none text-[#f2f2f2] text-5xl bg-[#333] md:h-[81%] lg:text-7xl col-start-1 h-44 col-end-2 row-start-2 row-end-3 w-[100%] uppercase"><a href="/Blog">blog</a></p>
        <p class="center-grid btn btn-outline pl-0 pr-0 ml-0 mr-0 rounded-none border-none text-[#333] text-5xl bg-[#f1f1f1] md:h-[81%] lg:text-7xl col-start-2 h-44 col-end-3 row-start-2 row-end-3 w-[100%] uppercase"><a href="#Go" class="">go</a></p>
        <img src="{img}" class="hidden sm:block h-[86.7%] md:h-[90.5%] w-[100%] object-cover col-start-3 col-end-4 row-start-1 row-end-3" alt="">
    </div>
</section>
<style>
    div :global(img) { filter: grayscale(1); }
</style>