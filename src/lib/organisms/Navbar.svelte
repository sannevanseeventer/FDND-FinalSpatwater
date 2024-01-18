<!--==================== NAVIGATION ====================-->
<nav aria-label="Site Navigation">
    <div class="navbar-container">
        <a href="/">
            <img class="logo" src="/assets/logotest2.png" alt="logo spatwater" loading="lazy" width="100px" height="100px"/>
        </a>

        <input class="menu-button" type="checkbox" id="menu-button" />
        <label class="menu-icon" for="menu-button"
            ><span class="bars"></span></label
        >

        <ul class="menu">
            <li><a href="/#over" aria-label="Over">Over</a></li>
            <li><a href="/#expertise" aria-label="Expertise">Expertise</a></li>
            <li><a href="/#team" aria-label="Team">Team</a></li>
            <li><a href="/kennisbank" aria-label="Kennisbank">Kennisbank</a></li>
            <li><a href="/projecten" aria-label="Projecten">Projecten</a></li>
            <li><a href="/kaart" aria-label="Kansenkaart">Kansenkaart</a></li>
            <li><a href="/#contact" aria-label="Contact"><span>Contact</span></a></li>
        </ul>
    </div>
</nav>


<style>
    :global(:has(.navbar-container)) {
        container-type: inline-size;
    }

    /* Navigation */
    nav {
        width: 100vw;
        height: auto;
        background-color: #fff;
        box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
        position: fixed;
        width: 100vw;
        z-index: 999;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        background-color: #fff;
    }

    nav li a {
        display: block;
        text-align: center;
        padding: 1.25em 1.25em;
        text-decoration: none;
        color: var(--darkblue);
        font-size: 1.3rem;
    }

    nav li a span {
        color: white;
        background-color: var(--green);
        padding: 0.5em 1em;
        border-radius: 5px;
        margin-right: 1rem;
    }

    nav .logo {
        width: 6rem;
        height: auto;
        margin: 0.5rem 1rem;
    }

    nav .menu {
        clear: both;
        height: 0;
        transition: height 0.2s ease-out;
    }

    /* Icon */
    nav .menu-icon {
        cursor: pointer;
        float: right;
        padding: 2rem 2rem;
        position: relative;
        user-select: none;
    }

    nav .menu-icon .bars {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 18px;
    }

    nav .menu-icon .bars:before,
    .menu-icon .bars:after {
        background: #333;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
    }

    nav .menu-icon .bars:before {
        top: 5px;
    }

    nav .menu-icon .bars:after {
        top: -5px;
    }

    /* Checkbox */
    nav .menu-button {
        display: none;
    }
    nav .menu-button:checked ~ .menu {
        height: 100vh;
    }

    nav .menu-button:checked ~ .menu-icon .bars {
        background: transparent;
    }

    nav .menu-button:checked ~ .menu-icon .bars:before {
        transform: rotate(-45deg);
    }

    nav .menu-button:checked ~ .menu-icon .bars:after {
        transform: rotate(45deg);
    }

    nav .menu-button:checked ~ .menu-icon:not(.steps) .bars:before,
    .menu-button:checked ~ .menu-icon:not(.steps) .bars:after {
        top: 0;
    }

    /* 48em = 768px */
    @container (min-width: 900px) {
        nav li {
            float: left;
        }

        nav li a {
            padding: 30px 20px;
            font-size: 1.1rem;
        }

        nav .menu {
            clear: none;
            float: right;
            height: auto; /* Adjusted to display the menu on desktop */
        }

        nav .menu-icon {
            display: none;
        }

        nav .logo {
            width: 8rem;
            margin-top: 0.7rem;
        }
    }
</style>
