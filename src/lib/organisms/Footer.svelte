<script>
  import Grot from "../molecules/Grot.svelte";

  

</script>

<!--==================== FOOTER ====================-->
<Grot />

<section class="container">
<article>
  <img
    class="logo"
    src="/assets/logo_spatwater.png"
    alt="Logo van SPATwater"
  />
  <h3>Een nieuwe generatie hydrologen</h3>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    aria-label="Linked In"
  >
    <path
      d="M33.6163 33.6215H28.7296V25.964C28.7296 24.138 28.6926 21.7882 26.1831 21.7882C23.6353 21.7882 23.2461 23.7752 23.2461 25.8293V33.6215H18.3593V17.875H23.0536V20.0213H23.1168C23.7728 18.7838 25.3678 17.4776 27.7506 17.4776C32.7021 17.4776 33.6178 20.7365 33.6178 24.9783L33.6163 33.6215ZM12.8401 15.7204C11.2671 15.7204 10.0035 14.4471 10.0035 12.881C10.0035 11.3163 11.2685 10.0444 12.8401 10.0444C14.4076 10.0444 15.6781 11.3163 15.6781 12.881C15.6781 14.4471 14.4063 15.7204 12.8401 15.7204ZM15.2904 33.6215H10.3899V17.875H15.2904V33.6215ZM36.0611 5.5H7.93689C6.59077 5.5 5.50177 6.56425 5.50177 7.87738V36.1227C5.50177 37.437 6.59077 38.5 7.93689 38.5H36.0571C37.4018 38.5 38.5018 37.437 38.5018 36.1227V7.87738C38.5018 6.56425 37.4018 5.5 36.0571 5.5H36.0611Z"
      fill="white"
      alt="Linked In logo"
    />
  </svg>
</article>

<article>
  <h2>Over</h2>
  <ul>
    <li><a href="#over" aria-label="Over ons">Over ons</a></li>
    <li><a href="#expertise" aria-label="Expertise">Expertise</a></li>
    <li><a href="/kennisbank" aria-label="Kennisbank">Kennisbank</a></li>
    <li><a href="/projecten" aria-label="Projecten">Projecten</a></li>
    <li><a href="/kansenkaart" aria-label="Kansenkaart">Kansenkaart</a></li>
  </ul>
</article>

<article>
  <h2>Bedrijf</h2>
  <ul>
    <li><a href="#team">Team</a></li>
  </ul>
</article>

<article>
  <h2>Contact</h2>
  <ul>
    <li><a href="#contact">Neem contact op</a></li>
  </ul>
</article>

<div class="line"></div>

<article class="address">
  <p>Meteorenweg 280, 1035 RN Amsterdam</p>
</article>

<article class="copyright">
  <p>© 2023 SPATwater. All rights reserved.</p>
</article>
</section>

<style>
.logo {
  width: 10rem;
  height: auto;
  margin: 0.5rem -0.1rem;
}

h2 {
  color: var(--spat);
  font-size: 1.3rem;
}

h3,
p {
  color: white;
  font-size: 1rem;
}

svg {
  width: 1.7rem;
  margin-top: 0.5rem;
  margin-left: -0.3em;
}

ul {
  list-style-type: none;
  text-decoration: none;
  cursor: pointer;
}

li,
a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

li:focus,
a:focus {
  outline: 2px solid var(--spat);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.2em;
}

.container {
  height: 70vh;
  background-color: #30343a;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}


.line {
  height: 2px;
  background-color: white;
  width: 80%;
  margin-bottom: 3rem;
  align-self: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.address,
.copyright {
  position: absolute;
  bottom: 0.5rem;
  font-size: 1rem;
  color: white;
  z-index: 2;
}

.address {
  left: 10%;
}

.copyright {
  right: 10%;
}

@media screen and (min-width: 750px) {


.container {
  height: 45vh;
  flex-direction: row;
  /* align-items: baseline; Center items horizontally */
}

.line {
  width: 80%; /* Adjusted width for larger screens */
  margin-bottom:3rem ; /* No margin at the bottom for larger screens */
}

.address,
.copyright {
  margin-bottom: 0; /* No margin at the bottom for larger screens */
}

.address {
  left: auto;
  right: 10%; /* Adjusted right position for larger screens */
}

.copyright {
  right: auto;
  left: 10%; /* Adjusted left position for larger screens */
}
}
</style>