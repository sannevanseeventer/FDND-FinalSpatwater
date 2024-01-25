<script>
  export let data;
</script>

<!--==================== CONTACT INFO ====================-->
{#each data.contacts as item}
  <div class="contact-data arrow-list">
    {@html item.content.html}
  </div>
{/each}

<style>
  .contact-data {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
</style>
