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
        padding-left: 15rem;
        padding-right: 15rem;
        margin-top: 11.7rem;
        margin-bottom: 11.9rem;
    }
</style>