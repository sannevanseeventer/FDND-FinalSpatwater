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
          <img src={item.image.url} alt="boom illustratie" loading="lazy"/>
        </div>
      </div>
    </div>
  </section>
{/each}

<style>
  section {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
    background: var(--lg-bg);
  }

  .inner-section {
    width: 70%;
    margin-left: 15%;
    margin-bottom: 3rem;
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
  }
</style>
