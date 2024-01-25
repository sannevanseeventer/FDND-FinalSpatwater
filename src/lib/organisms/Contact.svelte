<script>
  export let data;
  import ContactInfo from "../molecules/ContactInfo.svelte";
  import Formulier from "../molecules/Formulier.svelte";

</script>

<!--==================== CONTACT ====================-->
<section>
  <img class="wave" src="/assets/gray-wave.svg" alt="" loading="lazy">
  <div class="inner-section">
    <h2 id="contact">Contact</h2>
    <div class="horizontal-flex-row">
      <div class="form-container">
        <Formulier />
      </div>
      <div class="text-container">
        <ContactInfo {data} />
      </div>
    </div>
  </div>
  <img class="wave-bottom" src="/assets/gray-wave-bottom.svg" alt="" loading="lazy">
</section>

<style>
  section {
    width: 100%;
    padding: 4rem 0rem;
    background: var(--lg-bg);
    position: relative;
  }

  .wave {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		margin-top: -1rem;
	}

  .wave-bottom {
		width: 100%;
		height: auto;
		position: absolute;
		bottom: 0;
		margin-top: 2rem;
    margin-bottom: -2rem;
	}

  .inner-section {
    /* padding: 0rem 2.5rem; */
    width: 70%;
    margin-left: 15%;
    margin-bottom: 6rem;
    margin-top: 5rem;
  }

  h2 {
    padding: 0rem;
    color: var(--spat);
    margin-bottom: 1rem;
  }

  .form-container {
    width: 100%;
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
  
  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }

    .wave, .wave-bottom {
      display: none;
    }

  }
</style>
