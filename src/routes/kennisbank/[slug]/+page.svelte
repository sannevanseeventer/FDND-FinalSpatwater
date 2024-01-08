<script>
  export let data;

  import Footer from "$lib/organisms/Footer.svelte";
</script>

<svelte:head>
  <title>SPATwater - {data.kennisbank.title}</title>
</svelte:head>

<main>
  {#if data.kennisbank}
    {#if data.kennisbank.image && data.kennisbank.image.url}
      <div class="content-container">
        <a href="/kennisbank"
          ><p>
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Terug
          </p></a
        >
        <img
          class="project-banner-img"
          src={data.kennisbank.image.url}
          alt={data.kennisbank.title} loading="lazy"/>

        <span>{data.kennisbank.categorie}</span>
        <h1>{data.kennisbank.title}</h1>

        <div class="project-html">
          {@html data.kennisbank.content.html}
        </div>

        <a href="/kennisbank"
          ><p>
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Terug
          </p></a
        >

        <!-- <h2>Gerelateerde kennisbank</h2> -->
      </div>
    {/if}
  {:else}
    <p>kennisbank not found.</p>
  {/if}
  <Footer />
</main>

<style>
  main {
    padding-top: 7rem;
    width: 100%;
  }

  .content-container {
    width: 50%;
    margin-left: 25%;
    margin-bottom: 10rem;
  }

  .project-banner-img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 0.1rem;
  }

  :global(img) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  :global(video) {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  :global(blockquote) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 70%;
    margin-left: 15%;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
  }

  :global(a) {
    color: #7faec5;
    text-decoration: none;
  }

  :global(blockquote):before {
    content: '"';
    font-size: 5rem;
    position: absolute;
    color: #4ecd5d;
    margin-left: -2rem;
    margin-top: 1rem;
  }

  :global(blockquote):after {
    content: '"';
    font-size: 5rem;
    position: absolute;
    color: #4ecd5d;
    margin-left: 0.5rem;
    margin-top: 1rem;
  }

  span {
    color: #2b3f5a;
    font-weight: 600;
    font-size: 0.9rem;
  }

  h1 {
    color: #7faec5;
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
  }

  /* h2 {
      color: #7FAEC5;
      margin-bottom: .5rem;
    } */

  .project-html {
    color: #2b3f5a;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
    margin-bottom: 2rem;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .content-container {
      width: 90%;
      margin-left: 5%;
    }

    .project-banner-img {
      width: 100%;
      height: 20rem;
    }
  }
</style>
