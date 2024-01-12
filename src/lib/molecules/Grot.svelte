<script>
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<!--==================== FOOTER ILLUSTRATIONS ====================-->
<section>
  <img
    class="cave-ground"
    src="/assets/footergrot1.png"
    alt="Grot Illustratie"
    loading="lazy"
    height="350px"
    width="100%"
    aria-label="Cave Ground Illustration"
  />
  <img
    class="water-drup"
    src="/assets/drup.png"
    alt="Grot Illustratie"
    loading="lazy"
    aria-label="Water Droplet Illustration"
  />
  <img
    class="cave-water"
    src="/assets/footergrot2.png"
    alt="Grot Illustratie"
    loading="lazy"
    height="350px"
    width="100%"
    aria-label="Cave Water Illustration"
  />
</section>

<style>
  section {
    margin-top: 10rem;
    margin-bottom: -4rem;
    position: relative;
  }

  img {
    margin: 0;
    padding: 0;
    width: 100%;

  }

  .cave-ground {
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
  }

  .cave-water {
    position: relative;
    z-index: -1;
    margin-top: -200%;
    width: 100%; 
  }

  .water-drup {
    width: 1rem;
    z-index: 100;
    transform: translateY(-50vw);
    margin-left: 30%;
    animation: fall 2s ease-in infinite;
  }

  @keyframes fall {
    0% {
      transform: translateY(-30vw);
    }
    100% {
      transform: translateY(0vw);
    }
  }
</style>
