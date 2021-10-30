<script global windi:global>
    import 'virtual:windi-base.css';
    import 'virtual:windi-components.css';
    import 'virtual:windi-utilities.css';
    import './main.css';
    let dark = false;
    import Header from "$lib/Header.svelte";
</script>
<div class="sticky top-0 z-50"><Header></Header></div>
<style global>
</style>
<slot></slot>
