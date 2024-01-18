<script>
  export let data;

  console.log(data)

  import Footer from "$lib/organisms/Footer.svelte";
</script>

<svelte:head>
  <title>SPATwater - {data.kennisbank.title}</title>
</svelte:head>

<main>
  {#if data.kennisbank}
    {#if data.kennisbank.image && data.kennisbank.image.url}
      <div class="content-container">
        <a href="/kennisbank"><p><i class="fa fa-arrow-left" aria-hidden="true"></i> Terug naar kennisbank</p></a>
        <div class="header-image" style="background-image: url({data.kennisbank.image.url});">
          <h1>{data.kennisbank.title}</h1>
        </div>
        <div class="horizontal-flex-row">
          <div class="post-text">
            {@html data.kennisbank.content.html}
          </div>
          <div class="post-info">
            <div class="info-row">
              <div class="author">Door {data.kennisbank.author} op {data.kennisbank.date}</div>
              <span class="{data.kennisbank.categorie}">{data.kennisbank.categorie}</span>
            </div>
            <!-- Display other posts -->
            {#if data.kennisbank.otherPosts && data.kennisbank.otherPosts.length > 0}
              <div class="other-posts">
                <h2>Other Posts</h2>
                <ul>
                  {#each data.kennisbank.otherPosts as post}
                    <li><a href={`/kennisbank/${post.slug}`}>{post.title}</a></li>
                  {/each}
                </ul>
              </div>
            {:else}
              <p>Geen gerelateerde artikelen gevonden.</p>
            {/if}
          </div>
        </div>
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

  span {
    padding: .2rem .4rem;
    border-radius: .5rem;
    font-size: .6rem !important;
  }

  .content-container {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 10rem;
  }

  .horizontal-flex-row {
    display: flex;
    gap: 1rem;
  }

  .post-text {
    width: 70%;
  }

  .post-info {
    width: 30%;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .header-image {
    height: 16rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 1rem;
    position: relative;
    margin-bottom: 3rem;
  }

  h1 {
    position: absolute;
    color: #fafafa;
    text-shadow: 0px 0px 10px #000;
    font-size: 2rem;
    width: 100%;
    bottom: 0;
    padding: .2rem .5rem;
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

  .author{
    font-size: .9rem;
    color: var(--darkblue)
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .content-container {
      width: 90%;
      margin-left: 5%;
    }

    .horizontal-flex-row {
      flex-direction: column;
    }

    .post-text {
      width: 100%;
    }

    .post-info {
      width: 100%;
    }
  }
</style>
