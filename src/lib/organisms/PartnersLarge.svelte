<script>
  export let data;
</script>

<!--==================== PARTNERS ====================-->
<section>
  <h2>Partners</h2>
  <p>
    Partners vormen de kern van onze aanpak. Door nauwe samenwerking met
    overheidsinstanties, bedrijven en onderzoeksinstituten ontwikkelen we
    innovatieve oplossingen voor waterkwaliteit en klimaatadaptatie.
  </p>
  <p>
    Ontdek hoe een partnerschap met SPATwater bijdraagt aan veerkrachtige en
    duurzame omgevingen.
  </p>
  <div class="inner-section">
    {#each data.partner as partner}
      <div class="card-item">
        <a href={partner.link}>
          <div
            class="partner-image"
            style="background-image: url('{partner.image.url}')"
          ></div>
        </a>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    width: 70%;
    margin-left: 15%;
    margin-top: 4rem;
  }

  p {
    color: var(--darkblue);
  }

  .inner-section {
    display: flex;
    padding-top: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2rem 0rem 6rem 0rem;
    width: 100%;
    gap: 5vw;
  }

  .card-item {
    cursor: pointer;
    transition: 0.2s;
    width: 10%;
    height: 10rem;
    margin-bottom: -5rem;
    opacity: 0.5;
  }

  .partner-image {
    height: 6rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .card-item:hover {
    transform: translateY(-0.5rem);
    opacity: 1;
  }
  .card-item:focus-within .partner-image {
    outline: 4px solid var(--darkblue);
    /* opacity: -1; */
    /* outline-offset: 4px red; */
  }
  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    section {
      margin-bottom: -6rem;
    }

    .card-item {
      cursor: pointer;
      transition: 0.2s;
      width: 20%;
      height: 10rem;
      margin-bottom: -5rem;
    }
  }
</style>
