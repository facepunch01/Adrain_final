<script>
    export let post;
</script>
<main class="card text-black border-1 border-black rounded-none h-[100%]">
    <a href="/Blog/{post.slug}">  
        <div class="my-2 mx-2">    
            <h1 class="font-bold">{post.title.substring(0, 15)}...</h1>
            <p class="text-sm mt-auto">{post.excerpt.substring(0, 50)}...</p>
        </div>
    </a>
</main>