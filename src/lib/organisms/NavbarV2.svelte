<script>
  import { onMount } from "svelte";

  onMount(() => {
    const desktopNav = document.getElementById("desktop-nav");
    const menuIcon = document.getElementById("menu-icon");
    const menuIconX = document.getElementById("menu-icon-x");
    const menuItems = desktopNav.querySelectorAll("li");

    // Toggle the menu when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
      desktopNav.style.transform = "translateX(0vw)";
      desktopNav.style.display = "block";
      menuIcon.style.display = "none";
      menuIconX.style.display = "block";
    });

    menuIconX.addEventListener("click", function () {
      desktopNav.style.transform = "translateX(100vw)";
      desktopNav.style.display = "none";
      menuIcon.style.display = "block";
      menuIconX.style.display = "none";
    });

    // Close the menu when a list item is clicked
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        desktopNav.style.transform = "translateX(100vw)";
        desktopNav.style.display = "none";
        menuIcon.style.display = "block";
        menuIconX.style.display = "none";
      });
    });

    const button = document.querySelector(".contrast-toggle");

    button.addEventListener("click", (e) => {
      button.classList.toggle("is-toggled");
      document.body.classList.toggle("is-high-contrast");
    });
  });
</script>

<nav>
  <a href="/">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <img
      class="logo"
      src="/assets/logotest2.png"
      alt="logo spatwater"
      tabindex="0"
      loading="lazy"
      width="100px"
      height="100px"
    />
  </a>
  <ul class="desktop-ul">
    <li><a href="/#over" aria-label="Over">Over</a></li>
    <li><a href="/#expertise" aria-label="Expertise">Expertise</a></li>
    <li><a href="/#team" aria-label="Team">Team</a></li>
    <li><a href="/kennisbank" aria-label="Kennisbank">Kennisbank</a></li>
    <li><a href="/projecten" aria-label="Projecten">Projecten</a></li>
    <li><a href="/kaart" aria-label="Kansenkaart">Kansenkaart</a></li>
    <li>
      <a class="green-link no-margin" href="/#contact" aria-label="Contact"
        ><span>Contact</span></a
      >
    </li>
    <span id="menu-icon" class="menu-icon"
      ><img src="/assets/menu-svgrepo-com.svg" alt="" /></span
    >
    <span id="menu-icon-x" class="menu-icon" style="display: none;"
      ><img src="/assets/xmark-large-svgrepo-com.svg" alt="" /></span
    >
    <!-- <li>
      <button class="contrast-toggle"><span>Toggle contrast</span></button>
    </li> -->
  </ul>
</nav>

<div id="desktop-nav" class="mobile-nav" style="display: none;">
  <ul class="mobile-ul">
    <li><a href="/#over" aria-label="Over">Over</a></li>
    <li><a href="/#expertise" aria-label="Expertise">Expertise</a></li>
    <li><a href="/#team" aria-label="Team">Team</a></li>
    <li><a href="/kennisbank" aria-label="Kennisbank">Kennisbank</a></li>
    <li><a href="/projecten" aria-label="Projecten">Projecten</a></li>
    <li><a href="/kaart" aria-label="Kansenkaart">Kansenkaart</a></li>
    <li>
      <a class="green-link white" href="/#contact" aria-label="Contact"
        ><span>Contact</span></a
      >
    </li>
    <li>
      <button class="contrast-toggle">
        <span>Toggle contrast</span>
      </button>
    </li>
  </ul>
</div>

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 99999;
    position: fixed;
  }

  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  li {
    margin-left: 1rem;
    font-weight: 500;
    transition: 0.2s;
  }

  li:hover {
    opacity: 0.8;
  }

  .no-margin {
    margin-right: 1rem;
    color: #fff;
  }

  a {
    /* display: block; */
    text-align: left;
    text-decoration: none;
    color: var(--darkblue);
  }

  .logo {
    width: 7rem;
    height: auto;
    margin: 0.5rem 1rem;
  }

  .menu-icon img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
    display: none;
  }

  /* Mobile nav styling */
  .mobile-nav {
    height: 100vh;
    width: 50%;
    margin-left: 50%;
    position: fixed;
    z-index: 99998;
    background-color: #fff;
    padding: 1rem;
    padding-top: 6rem;
    transform: translateX(100vw);
    transition: 0.2s;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.298);
  }

  .mobile-ul {
    display: block;
  }

  .mobile-ul li:last-child {
    margin-top: 3rem;
  }

  .white {
    color: #fff;
  }

  /* Contrastknop */

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
    margin-left: -2em;
    margin-right: 2em;
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

  @media only screen and (max-width: 1100px) {
    .desktop-ul li {
      display: none;
    }

    .menu-icon img {
      display: block;
    }

    li {
      margin-top: 1.2rem;
    }

    .contrast-toggle {
      margin-right: 2em;
    }
  }
</style>
