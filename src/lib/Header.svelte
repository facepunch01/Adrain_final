<script>
    let open = false;
    function openClose () {
        if (open === false) {
            open = true;
        } else {
            open = false;
        }
    }
</script>

<main>
    <nav class="relative font-main-font">
        <div class="flex flex-row bg-[#05B1C1] text-[#333] fill-[#0BEAFF] px-3 py-2">
            <h1 class="mr-auto self-center -ml-0.5 text-2xl md:text-xl">The <span class="text-[#0BEAFF] font-bold">Bugle</span></h1>
            <div class="self-center">
                <svg class="md:hidden" on:click={() => openClose()} viewBox="0 0 100 80" width="25" height="25">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                </svg>
            </div>
            <div class="<md:hidden flex flex-row items-center text-lg">
                <ul class="flex flex-row items-center text-[#333] gap-3">
                    <li class="">Contact</li>
                    <li class="">Blog</li>
                    <li class="bg-[#FF6E6E] border-l-10 border-[#FF6E6E] rounded-full border-r-10"><a href="#Map">Go</a></li>
                </ul>
            </div>
        </div>
        <div class:drop-down-closed="{open == false}" class:<md:drop-down-open="{open == true}" class="float-right drop-shadow-2xl text-center drop-down h-full absolute z-[100] right-0 opacity-100">
            <ul class="mr-1 mt-1 bg-[#FF6E6E] text-[#F2F2F2] border-8 rounded-md border-[#FF6E6E] text-4xl font-main-font font-bold">
                <li class="mb-5 mt-0.5">Contact</li>
                <li class="mb-5">Blog</li>
                <li class="mb-0.5"><a href="#Map">Go</a></li>
            </ul>
        </div>
    </nav>
</main>
