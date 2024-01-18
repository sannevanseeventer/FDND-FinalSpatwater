<script>
  export let data;
</script>

<!--==================== KLIMAATADAPTATIE ====================-->
{#each data.klimaatadaptaties as item}
  <section class="climate-container" aria-label="{item.title} sectie">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container arrow-list">
          <h2 id="klimaatadaptatie">{item.title}</h2>
          <p>{@html item.content.html}</p>
          <a class="green-link" href="/projecten">Bekijk onze projecten</a>
        </div>
        <div class="image-container">
          <img src={item.image.url} alt="Foto Illustratie" loading="lazy" width="100px" height="100px" aria-label="Afbeelding ter illustratie van klimaatadaptatie"/>
        </div>
      </div>
    </div>
  </section>
{/each}

