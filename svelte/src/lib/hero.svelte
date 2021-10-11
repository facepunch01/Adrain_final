<script>
    export let text;
</script>
<div>
    <h1 class="text">{text}</h1>
    <slot class="Content"></slot>
</div>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    .text {
        font-size: 15em;
        font-family: "Montserrat";
    }
</style>