<script>
  // You can add any script logic here if needed
</script>

<section>
  <!-- Cave Ground Image -->
  <img
    class="cave-ground"
    src="/assets/footergrot1.png"
    alt="Grot Illustratie"
    loading="lazy"
    height="500px"
    width="100%"
    aria-label="Cave Ground Illustration"
  />

  <!-- Water Droplet Image -->
  <img
    class="water-drup"
    src="/assets/drup.png"
    alt="Grot Illustratie"
    loading="lazy"
    aria-label="Water Droplet Illustration"
  />

  <!-- Cave Water Image -->
  <img
    class="cave-water"
    src="/assets/footergrot2.png"
    alt="Grot Illustratie"
    loading="lazy"
    height="500px"
    width="100%"
    aria-label="Cave Water Illustration"
  />
</section>

<style>
  /* Styling for the section */
  section {
    margin-top: 10rem;
    margin-bottom: -4rem;
    position: relative;
  }

  /* Styling for images */
  img {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  /* Styling for the cave ground */
  .cave-ground {
    position: relative;
    z-index: 10;
    display: block;
  }

  /* Styling for the cave water */
  .cave-water {
    position: relative;
    z-index: -1;
    margin-top: -200%;
    width: 100%;
  }

  /* Styling for the water droplet */
  .water-drup {
    width: 1rem;
    z-index: 100;
    transform: translateY(-50vw);
    margin-left: 30%;
    animation: fall 2s ease-in infinite;
  }

  /* Water droplet animation keyframes */
  @keyframes fall {
    0% {
      transform: translateY(-30vw);
    }
    100% {
      transform: translateY(0vw);
    }
  }

  /* Media query for smaller screens (e.g., mobile) */
  @media (max-width: 768px) {
    .water-drup {
      margin-left: 30%;
      animation: fall-small 2s ease-in infinite;
    }
  }

  /* Water droplet animation keyframes for smaller screens */
  @keyframes fall-small {
    0% {
      transform: translateY(-70vw);
    }
    100% {
      transform: translateY(0vw);
    }
  }

  /* Media query for tablet devices */
  @media (min-width: 769px) and (max-width: 1024px) {
    .water-drup {
      margin-left: 30%;
      animation: fall-tablet 2s ease-in infinite;
    }
  }

  /* Water droplet animation keyframes for tablet devices */
  @keyframes fall-tablet {
    0% {
      transform: translateY(-50vw);
    }
    100% {
      transform: translateY(0vw);
    }
  }
</style>

