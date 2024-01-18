<script>
  export let data;

</script>

<!--==================== BRAIN ====================-->
{#each data.brains as item}
  <section class="climate-container" aria-label="{item.title} sectie">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container arrow-list">
          <h2 id="brain">{item.title}</h2>
          <p>{@html item.content.html}</p>
          <a class="green-link" href="/projecten" aria-label="Bekijk projecten van {item.title}">Bekijk onze projecten</a>
        </div>
        <div class="image-container">
          <img class="border-radius-img" src={item.image.url} alt="Foto Illustratie" loading="lazy" width="100px" height="100px" aria-label="{item.title} afbeelding"/>
        </div>
      </div>
    </div>
  </section>
{/each}
