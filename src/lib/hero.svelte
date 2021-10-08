<script>
export let text;
</script>
<div>
    <h1 class="text">{text}</h1>
    <slot class="Content"></slot>
</div>
<style lang="scss">
    .text {
        font-size: 15em;
    }
</style>