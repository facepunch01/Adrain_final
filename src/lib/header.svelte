<script>
    let open = false;
    function openClose () {
        if (open === false) {
            open = true;
        } else if(open) {
            open = false;
        }
    }
</script>

<main>
    <nav class="relative">
        <div class="flex flex-row bg-[#05B1C1] text-[#333] fill-[#0BEAFF] font-main-font px-3 py-2">
            <h1 class="mr-auto self-center -ml-0.5 text-2xl">The <span class="text-[#0BEAFF] font-bold">Bugle</span></h1>
            <svg class="self-center" on:click={() => openClose()} viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="20" rx="8"></rect>
                <rect y="30" width="100" height="20" rx="8"></rect>
                <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
        </div>
        <div class:drop-down-closed="{open === false}" class="float-right text-center drop-down opacity-100 h-full visible absolute z-[100] right-0">
            <ul class="transform duration-500 mr-1 mt-1 bg-[#FF6E6E] text-[#F2F2F2] border-8 rounded-md border-[#FF6E6E] text-4xl font-main-font font-bold">
                <li class="mb-5 mt-0.5">Contact</li>
                <li class="mb-5">Blog</li>
                <li class="mb-0.5"><a href="#Map">Go</a></li>
            </ul>
        </div>
    </nav>
</main>