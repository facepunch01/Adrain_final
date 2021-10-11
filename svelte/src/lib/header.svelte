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
                <a class="websitename" href="#Bugle"><span class="logo-text">The <span class="highlighted">bugle</span></span></a>
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
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    .websitename:hover {
        text-decoration: none;
    }
    .topbar {
        font-family: "Montserrat";
        display: flex;
        flex-direction: row;
        align-items: baseline;
        font-size: 1.5em;
        height: 2.2em;
        color: #333;
        padding-left: 1em;
        padding-right: 1em;
        background-color: #05B1C1;
        line-height: 0;
        margin-bottom: 0em;
        a {
            color: #333;
            .highlighted {
                font-weight: bold;
                color: rgb(255, 58, 58, 0.82);
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
        border-radius: 500rem;
        background-color:rgb(255, 58, 58);
        border: solid rgba(255, 58, 58, 0.82) 0.5em;
        padding-bottom: 0.3em;
        margin-top: -0.57em;
        a {
            color: #121212;
        }
        a:hover {
            text-decoration: none;
        }
    }
</style>