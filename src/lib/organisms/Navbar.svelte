<script>
import { onMount } from "svelte";

    onMount(() => {
        const menuButton = document.querySelector('.menu-button');
        const menu = document.querySelector('.menu');

        document.querySelectorAll('.menu li a').forEach(link => {
            link.addEventListener('click', (event) => {
                if (menuButton.checked) {
                menuButton.checked = false;
                menu.classList.add('hidden');
                }
            });
        });

        const toggleMenu = () => {
            console.log("toggleMenu called");
            const menuButton = document.getElementById('menu-button');
            menuButton.checked = !menuButton.checked;
        };
    });
</script>
  <!--==================== NAVIGATION ====================-->
  <nav aria-label="Site Navigation">
    <div class="navbar-container">
      <a href="/">
        <img class="logo" src="/assets/logotest2.png" alt="logo spatwater" tabindex="0" loading="lazy" width="100px" height="100px"/>
      </a>
  
      <input class="menu-button" type="checkbox" id="menu-button" tabindex="0" />
      <label class="menu-icon" for="menu-button" tabindex="0" role="button" aria-label="Toggle Menu" on:keydown={e => e.key === 'Enter' && toggleMenu()}>
        <span class="bars"></span>
      </label>
  
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
        box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
        position: fixed;
        z-index: 99999;
        font-weight: 500;
        background-color: #fff;
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
        text-align: right;
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
        height: fit-content;
        padding-bottom: 1rem;
        width: 40%;
        margin-left: 60%;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.423);
        border-radius: 0rem 0rem 0rem 1rem;
        position: absolute;
    }

    nav .menu-button:checked ~ ul li a {
        font-size: 1rem;
        padding: .8rem 1rem;
        font-weight: 600;
    }

    nav .menu-button:checked ~ ul li:last-child {
        margin-top: 3rem;
    }

    nav .menu-button:checked ~ ul li a span {
        margin: 0;
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
   /* Focus styling */
   nav .logo:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  nav li a:focus {
    background-color: var(--darkblue);
    color: white;
  }

  nav .menu-button:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  nav .menu li a:focus {
    background-color: var(--darkblue);
    color: white;
  }

  nav .menu-icon:focus {
    background-color: var(--darkblue);
  }

  nav .menu-button,
  nav .menu-icon {
    cursor: pointer;
  }

  /* Focus styling for the logo */
  nav .logo:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px; 

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
