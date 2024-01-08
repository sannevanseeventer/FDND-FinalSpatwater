<script>
  export let data;

  import AllPosts from "../molecules/AllPosts.svelte";
  import ProjectFilter from "../atoms/ProjectFilter.svelte";

  // Get the last post from the array
  let lastPost1 = data.kennisbanks[data.kennisbanks.length - 1];
  let lastPost2 = data.kennisbanks[data.kennisbanks.length - 2];
  let lastPost3 = data.kennisbanks[data.kennisbanks.length - 3];
</script>

<section>
  <h1>Kennisbank</h1>
  <div class="horizontal-flex-row">
    <div class="last-posts-container">
      <article class="highlighted-post-1 post">
        {#if data.kennisbanks.length > 0}
          <a href="/kennisbank/{lastPost1.slug}">
            <img src={lastPost1.image.url} alt="" />
            <div class="post-text">
              <div class="post-info">
                <span class="{lastPost3.categorie} category-label"
                  >{lastPost1.categorie}</span
                >
                <span class="author"
                  >Door {lastPost1.author} op {lastPost1.date}</span
                >
              </div>
              <h2>{lastPost1.title}</h2>
              <p>{lastPost1.intro}</p>
            </div>
          </a>
        {/if}
      </article>

      <div class="horizontal-flex-row gap">
        <article class="highlighted-posts-small post">
          {#if data.kennisbanks.length > 0}
            <a href="/kennisbank/{lastPost2.slug}">
              <img src={lastPost2.image.url} alt="" />
              <div class="post-text">
                <div class="post-info">
                  <span class="{lastPost2.categorie} category-label"
                    >{lastPost2.categorie}</span
                  >
                  <span class="author"
                    >Door {lastPost2.author} op {lastPost2.date}</span
                  >
                </div>
                <h2>{lastPost2.title}</h2>
                <p>{lastPost2.intro}</p>
              </div>
            </a>
          {/if}
        </article>
        <article class="highlighted-posts-small post">
          {#if data.kennisbanks.length > 0}
            <a href="/kennisbank/{lastPost3.slug}">
              <img src={lastPost3.image.url} alt="" />
              <div class="post-text">
                <div class="post-info">
                  <span class="{lastPost3.categorie} category-label"
                    >{lastPost3.categorie}</span
                  >
                  <span class="author"
                    >Door {lastPost3.author} op {lastPost3.date}</span
                  >
                </div>
                <h2>{lastPost3.title}</h2>
                <p>{lastPost3.intro}</p>
              </div>
            </a>
          {/if}
        </article>
      </div>
    </div>
    <div class="all-posts-container">
      <ProjectFilter {data} />
      <AllPosts {data} />
    </div>
  </div>
</section>

<style>
  section {
    width: 80%;
    margin-left: 10%;
    margin-top: 7rem;
  }

  .horizontal-flex-row {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  .gap {
    margin: 1rem 0rem;
  }

  a {
    color: var(--darkblue);
    text-decoration: none;
  }

  .last-posts-container {
    width: 70%;
  }

  .all-posts-container {
    width: 30%;
  }

  /* Styling highlighted posts */
  .post {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: var(--lg-bg);
    border-radius: 1rem;
    transition: 0.2s;
    cursor: pointer;
  }

  .post:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  }

  .highlighted-post-1 {
    width: 100%;
  }

  .highlighted-posts-small {
    width: 100%;
  }

  .highlighted-post-1 img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0rem 0rem;
    margin: 0;
  }

  .highlighted-posts-small img {
    height: 10rem;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0rem 0rem;
    margin: 0;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
  }

  .post-info * {
    font-size: 0.8rem !important;
  }

  .category-label {
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
  }

  h1 {
    color: var(--spat);
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin: 0.5rem 0rem 1rem 0rem;
    color: var(--spat);
    font-size: 1.2rem;
  }

  .post-text {
    padding: 1rem 1rem 0.5rem 1rem;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }

    .last-posts-container {
      width: 100%;
    }

    .all-posts-container {
      width: 100%;
    }
  }
</style>
