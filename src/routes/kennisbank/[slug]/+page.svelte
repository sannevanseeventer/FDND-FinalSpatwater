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
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Terug naar kennisbank
          </p></a
        >

        <div class="container">
          <div class="Image">
            <img
            class="project-banner-img"
            src={data.kennisbank.image.url}
            alt={data.kennisbank.title} loading="lazy"/>

            <div class="Labels">
              <span>{data.kennisbank.categorie}</span>
              <div class="author">Door {data.kennisbank.author} op {data.kennisbank.date}</div>
            </div>
          </div>

   
        <div class="Text">
          <h1>{data.kennisbank.title}</h1>
        <div class="project-html">
          {@html data.kennisbank.content.html}
        </div>

        <a href="/kennisbank"
          ><p>
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Terug
          </p></a
        >
      </div>

        
        </div>

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
    width: 70%;
    margin-left: 15%;
    margin-bottom: 10rem;
  }

  .project-banner-img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 0.5rem;
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
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: #4ecd5d;
    padding: .2rem .5rem;
    border-radius: 20px;
  }

  .author{
    font-size: .9rem;
    color: var(--darkblue)
  }

  h1 {
    color: #7faec5;
    padding: 2rem;
    font-size: 2rem;
    width: 100%;
    margin: 4rem auto;
  }

  /* h2 {
      color: #7FAEC5;
      margin-bottom: .5rem;
    } */

  .project-html {
    color: #2b3f5a;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
    margin-bottom: 2rem;
  }

  .container {  
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
  grid-auto-flow: row;
  grid-template-areas:
    "Text Image"
    "Text Image"
    "Text Labels";
}

.Image { grid-area: Image; }

.Text { grid-area: Text; }

.Labels { 
  grid-area: Labels; 
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
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
