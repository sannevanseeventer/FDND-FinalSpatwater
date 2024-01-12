<!--==================== NAVIGATION ====================-->
<script>
  export let data;

  import { onMount } from "svelte";
  onMount(() => {
    const button = document.querySelector(".contrast-toggle");

    button.addEventListener("click", (e) => {
      button.classList.toggle("is-toggled");
      document.body.classList.toggle("is-high-contrast");
    });
  });
</script>

<nav>
  <div class="navbar-container">
    <a href="/">
      <img class="logo" src="/assets/logotest2.png" alt="logo spatwater" />
    </a>

    <input class="menu-button" type="checkbox" id="menu-button" />
    <label class="menu-icon" for="menu-button"><span class="bars"></span></label
    >

    <ul class="menu">
      <li><a href="/#over">Over</a></li>
      <li><a href="/#expertise">Expertise</a></li>
      <li><a href="/#team">Team</a></li>
      <li><a href="/kennisbank">Kennisbank</a></li>
      <li><a href="/projecten">Projecten</a></li>
      <li><a href="/kaart">Kansenkaart</a></li>
      <li><a href="/#contact"><span>Contact</span></a></li>
      <li>
        <button class="contrast-toggle">
          <span>Toggle contrast</span>
        </button>
      </li>
    </ul>
  </div>
</nav>

<style>
  :global(:has(.navbar-container)) {
    container-type: inline-size;
    background-color: var(--lg-bg);
  }

  /* Navigation */
  nav {
    width: 100vw;
    height: auto;
    background-color: var(--lg-bg);
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100vw;
    z-index: 99999;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: var(--lg-bg);
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
    color: var(--lg-bg);
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
    background: var(--darkblue);
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  nav .menu-icon .bars:before,
  .menu-icon .bars:after {
    background: var(--darkblue);
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

  .contrast-toggle {
    overflow: hidden;
    position: relative;
    display: block;
    width: 2em;
    height: 2em;
    margin: 2em auto;
    background: var(--white);
    border: 0.1em solid var(--lg-bg);
    border-radius: 50%;
    box-shadow: 0 0 1.5em 0.5em var(--darkgrey);
    cursor: pointer;
    transform: translateZ(0);
  }
  .contrast-toggle > span {
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }

  .contrast-toggle::before {
    content: "";
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--darkblue);
    transform: translateX(-50%);
    transition: transform 0.2s cubic-bezier(1, 1, 0, 1.3);
  }

  .contrast-toggle.is-toggled::before {
    transform: translateX(50%);
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

    .contrast-toggle {
      margin-right: 2em;
    }
  }
</style>
