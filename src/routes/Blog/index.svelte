<script context="module">
    import Post from '$lib/blog/post.svelte';
    import GhostContentAPI from '@tryghost/content-api'
    export async function load() {
        const api = new GhostContentAPI({
            url: 'https://the-bugle.ghost.io',
            key: '8e13db450fb943017492844c64',
            version: "v3"
        });
        try {
            const jsonPosts = await api.posts
                .browse({
                    limit: 100, 
                    include: 'tags, authors',
                })
            return {props: { "posts": jsonPosts}}
        } catch(err) {
            console.log(err);
        }
    }
</script>
<script>
    export let posts;
    console.log(posts);
</script>
<div class="grid grid-flow-col bg-gray-900">
    <h1 class="flex justify-center col-start-1 col-end-3 text-6xl text-[#f2f2f2] py-16 font-bold">POSTS</h1>
</div>
<div class="mt-3">
    <ul class="grid grid-cols-2 gap-4 mx-4 drop-shadow-md">
    {#each posts as post}
        <div class="shadow-lg">
            <Post post={post}></Post>
        </div>  
    {/each}
    </ul>
</div>