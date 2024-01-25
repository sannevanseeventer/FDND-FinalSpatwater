<script>
  export let data;
  let hoveredItem = null; // Track the currently hovered item

  function handleMouseEnter(item) {
    hoveredItem = item; // Set the hovered item
  }

  function handleMouseLeave() {
    hoveredItem = null; // Reset the hovered item
  }
</script>

<!--==================== TEAM ====================-->
<section>
  <h2 id="team">Team</h2>
  <div class="inner-section">
    {#each data.teams as item}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        id="{item.name}"
        class="card-item"
        style="background-image: url('{hoveredItem === item ? item.imageHover.url : item.image.url}');"
        on:mouseenter={() => handleMouseEnter(item)}
        on:mouseleave={handleMouseLeave} tabindex="0">
        <div class="card-text">
          <h3>{item.name}</h3>
          <span>{item.email}</span>
        </div>
      </div>
    {/each}
  </div>
</section>


<style>
  section {
      width: 70%;
      margin-left: 15%;
      margin-top: 4rem;
  }

  .inner-section {
      display: flex;
      justify-content: space-between;
      gap: 8vw;
      margin: 2rem 0rem 6rem 0rem;
  }

  .card-item {
      background-color: #fafafa;
      width: 100%;
      border-radius: 1rem;
      cursor: pointer;
      transition: 0.2s;
      position: relative;
      height: 25rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }

  .card-item:hover {
      transform: translateY(-0.5rem);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  }

  .card-text {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      color: #fafafa;
      text-shadow: 0px 0px 5px #333;
  }

  h3 {
    font-size: 1.5rem;
  }
  .card-item:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
      .inner-section {
          flex-direction: column;
      }
      .card-item{
        height: 22rem;
      }
  }
</style>
