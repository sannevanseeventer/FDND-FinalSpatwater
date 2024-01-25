<script>
  export let data;
</script>

<!--==================== KLIMAATADAPTATIE ====================-->
{#each data.klimaatadaptaties as item}
  <section class="climate-container">
    <img class="wave" src="/assets/gray-wave.svg" alt="" loading="lazy">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container arrow-list">
          <h2 id="klimaatadaptatie">{item.title}</h2>
          <p>{@html item.content.html}</p>
          <a class="green-link" href="/projecten">Bekijk onze projecten</a>
        </div>
        <div class="image-container">
          <img src={item.image.url} alt="" loading="lazy"/>
        </div>
      </div>
    </div>
    <img class="wave-bottom" src="/assets/gray-wave-bottom.svg" alt="" loading="lazy">
  </section>
{/each}

<style>
  .green-link:focus {
      outline: 2px solid var(--darkblue);
      outline-offset: 4px;
  }
</style>
