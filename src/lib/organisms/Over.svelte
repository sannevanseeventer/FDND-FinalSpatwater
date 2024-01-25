<script>
  export let data;
</script>

<!--==================== ABOUT ====================-->
{#each data.overs as item}
  <section class="climate-container">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container">
          <h2 id="over">{item.title}</h2>
          <p>{@html item.content.html}</p>
          <a class="green-link" href="/kennisbank">Bekijk onze blog pagina</a>
        </div>
        <div class="image-container">
          <img src={item.image.url} alt="boom illustratie" loading="lazy" />
        </div>
      </div>
    </div>
    <img
      class="wave-bottom"
      src="/assets/gray-wave-bottom.svg"
      alt=""
      loading="lazy"
    />
  </section>
{/each}

<style>
  section {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
    background: var(--lg-bg);
    position: relative;
  }

  .wave-bottom {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    margin-top: 2rem;
  }

  .inner-section {
    width: 70%;
    margin-left: 15%;
    margin-bottom: 6rem;
  }

  .horizontal-flex-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10%;
  }

  .text-container {
    width: 100%;
  }

  p {
    margin-bottom: 1rem !important;
    color: var(--darkblue);
  }

  .image-container {
    width: 40%;
  }

  img {
    object-fit: contain;
    height: 20rem;
    margin: 0;
    width: 100%;
  }
  /* Focus-styling */
  .climate-container:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  .climate-container:focus {
    background-color: var(--darkblue);
    color: white;
  }

  /* Voeg focus-styling toe aan de link binnen de sectie */
  .climate-container a.green-link:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }

    .text-container {
      width: 100%;
    }

    .image-container {
      width: 100%;
      margin-top: 4rem;
    }

    img {
      width: 100%;
      object-fit: contain;
      margin: 2rem 0rem;
    }

    .inner-section {
      /* padding: 0rem 2.5rem; */
      width: 70%;
      margin-bottom: 2rem;
    }

    .wave-bottom {
      display: none;
    }
  }
</style>
