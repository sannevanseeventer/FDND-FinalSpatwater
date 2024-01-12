<script>
  export let data;
  import ContactInfo from "../molecules/ContactInfo.svelte";
  import Formulier from "../molecules/Formulier.svelte";

  // import { Button, Hr, Html, Text } from "svelte-email";

  // export let name = "World";
</script>

<!--==================== CONTACT ====================-->
<!-- 
<Html lang="en">
  <Text>
    Hello, {name}!
  </Text>
  <Hr />
  <Button href="https://svelte.dev">Visit Svelte</Button>
</Html> -->

<section>
  <div class="inner-section">
    <h2 id="contact">Contact</h2>
    <div class="horizontal-flex-row">
      <div class="form-container">
        <Formulier />
      </div>
      <div class="text-container">
        <ContactInfo {data} />
      </div>
      <!-- <p class="success">{form?.success || ""}</p> -->
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;
    padding: 2rem 0rem;
    background: var(--lg-bg);
  }

  .inner-section {
    /* padding: 0rem 2.5rem; */
    width: 70%;
    margin-left: 15%;
    margin-bottom: 3rem;
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
    color: var(--darkblue);
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }
  }
</style>
