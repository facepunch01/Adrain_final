<script>
    import "./../styles/global.css"
    let test = false;
    $: fixed = test ? 'on' : 'off';
    function swap (node) {
        if (fixed === 'off') {
            test = true;
        }
        else if (fixed === 'on') {
            test = false;
        };
    };
</script>
    <div>
        <nav>
            <div class="topbar">
                <a class="websitename" href="#Bugle"><span class="logo-text">The <span class="highlighted">bugle</span><img class="logo" src="bugle.svg" alt=""></span></a>
                <ul>
                    <li><a href="#Contact">contact</a></li>
                    <li><a href="#Blog">blog</a></li>
                    <li class="cta"><a href="#go">go</a></li>    
                </ul>
            </div>
        </nav>
    </div>
<style lang="scss">
    $accsent-color: rgb(255, 243, 137);
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;700&display=swap');
    .websitename:hover {
        text-decoration: none;
    }
    .topbar {
        font-family: "Noto Sans Mono";
        display: flex;
        flex-direction: row;
        align-items: baseline;
        font-size: 1.5em;
        padding-bottom: -1.1em;
        height: 2.2em;
        color: white;
        padding-left: 1em;
        padding-right: 1em;
        background-color: rgb(34, 34, 34);
        line-height: 0;
        margin-bottom: -1em;
        a {
            color: rgb(255, 255, 255);
            .highlighted {
                font-weight: bold;
                margin-left: -0.2em;
                color: $accsent-color;
            }
        }
        ul {
            display: inline-flex;
            list-style: none;
            margin-left: auto;
            li {
                margin-left: 1em;
                a {
                    cursor: pointer;
                }
            }
        }
    }
    .cta {
        color: #121212;
        border-radius: 5px;
        background-color: rgb(255, 241, 110);
        border: solid rgb(255, 241, 110) 0.5em;
        padding-bottom: 0.3em;
        margin-top: -0.57em;
        a {
            color: #121212;
        }
        a:hover {
            text-decoration: none;
        }
    }
    .logo {
        width: 1.5em;
        margin-bottom: -0.45em;
        margin-left: 0.2em;
        transform: rotate(345deg);
        filter: invert(93%) sepia(94%) saturate(23%) hue-rotate(65deg) brightness(107%) contrast(106%);
    }
</style>