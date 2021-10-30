<script context="module">
    import GhostContentAPI from '@tryghost/content-api'
    export async function load(ctx) {
        const api = new GhostContentAPI({
            url: 'https://the-bugle.ghost.io',
            key: '8e13db450fb943017492844c64',
            version: "v3"
        });
        let slug = ctx.page.params.slug
        try {
            const post = await api.posts.read({slug}, {formats: ['html']})
            return {props: { "post": post}}
        } catch(err) {
            console.log(err);
        }
    }
</script>
<script>
    export let post;
</script>

<h1 class="text-center text-5xl bg-[#FFD8A7] text-[#0563C1] mb-8 py-20 font-bold">{post.title}</h1>
<div class="mx-7 max-w-[905] sm:text-md md:text-lg sm:mx-10 text-justify w-100%">
    {@html post.html}
</div>
<style>
    div :global(img) { width: max-content; }
</style>