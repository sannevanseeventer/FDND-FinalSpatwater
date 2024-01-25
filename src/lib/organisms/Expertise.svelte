<script>
  export let data;

  import Waterkwaliteit from "../molecules/Waterkwaliteit.svelte";
  import Klimaatadaptatie from "../molecules/Klimaatadaptatie.svelte";
  import Brain from "../molecules/Brain.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    const block1 = document.querySelector(".block1");
    const block2 = document.querySelector(".block2");
    const block3 = document.querySelector(".block3");

    // Function to hide all blocks
    function hideAllBlocks() {
      block1.style.display = "none";
      block2.style.display = "none";
      block3.style.display = "none";
    }

    // Default value
    hideAllBlocks();
    block1.style.display = "block";
    block1.style.display = "block";
    card1.classList.add("active");
    card2.classList.remove("active");
    card3.classList.remove("active");

    // Click event for card 1
    card1.addEventListener("click", function () {
      hideAllBlocks();
      block1.style.display = "block";
      card1.classList.add("active");
      card2.classList.remove("active");
      card3.classList.remove("active");
    });

    // Click event for card 2
    card2.addEventListener("click", function () {
      hideAllBlocks();
      block2.style.display = "block";
      card2.classList.add("active");
      card1.classList.remove("active");
      card3.classList.remove("active");
    });

    // Click event for card 3
    card3.addEventListener("click", function () {
      hideAllBlocks();
      block3.style.display = "block";
      card3.classList.add("active");
      card2.classList.remove("active");
      card1.classList.remove("active");
    });
  });
</script>

<!--==================== EXPERTISE ====================-->
<section>
  <h2 id="expertise">Expertise</h2>
  <div class="inner-section">
    {#each data.expertiseCards as item}
      <div id="card{item.cardNumber}" class="card-item active" tabindex="0">
        <img
          src={item.image.url}
          alt="Illustratie waterkwaliteit en milieubehoud"
          class="card-img"
        />
        <div class="card-text">
          <h3>{item.title}</h3>
          <p>{item.intro}</p>
          <a href="#{item.slug}" class="green-link full">Meer informatie</a>
        </div>
      </div>
    {/each}
  </div>
</section>

<div class="block1 expertise-content climate">
  <Klimaatadaptatie {data} />
</div>

<div class="block2 expertise-content">
  <Waterkwaliteit {data} />
</div>

<div class="block3 expertise-content">
  <Brain {data} />
</div>

<style>
  section {
    width: 70%;
    margin-left: 15%;
  }

  .block1,
  .block2,
  .block3 {
    color: var(--darkblue);
  }

  .inner-section {
    display: flex;
    justify-content: space-between;
    gap: 10vw;
    margin: 2rem 0rem 6rem 0rem;
  }

  .card-item {
    background-color: #fafafa;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 18px 30px -10px;
    width: 100%;
    padding: 1rem 0rem 0rem 0rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.2s;
    user-select: none;
  }

  .card-item:hover {
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 18px 30px -10px;
  }

  .card-item:hover a {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 110px 0px;
  }

  /* Card hover */
  .card-item:hover img {
    transform: rotate(2deg);
  }

  img {
    width: 90%;
    height: 12rem;
    object-fit: contain;
    margin-left: 5%;
    transition: 0.2s;
  }

  .card-text {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--darkblue);
  }

  p {
    font-size: 0.8rem;
    height: 6rem;
  }

  .full {
    width: 100%;
    text-align: center;
  }

  .active {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 30px -10px;
  }

  a {
    min-width: 100%;
  }
  .card-item:focus {
    outline: 1.5px solid rgb(206, 206, 206);
    outline-offset: 4px;
  }
  .card-item .green-link:focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  /* Alternatively, if you want to style all focusable elements within a card-item */
  .card-item :focus {
    outline: 2px solid var(--darkblue);
    outline-offset: 4px;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .inner-section {
      flex-direction: column;
      gap: 2rem;
    }

    img {
      display: none;
    }

    .full {
      width: 40%;
    }

    p {
      font-size: 0.9rem;
      height: 4.5rem;
    }
  }
</style>
