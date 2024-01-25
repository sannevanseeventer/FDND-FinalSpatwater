<script>
    export let data;
</script>
  
<ul class="project-list" id="project-list">
{#each data.kennisbanks as item}
    <li class="post {item.categorie}">
        <a href="/kennisbank/{item.slug}">
            <div class="horizontal-flex-row">
                <img src={item.image.url} alt="boom illustratie" loading="lazy"/>
                <div class="post-text">
                    <div class="post-info">
                        <span class="categorie-label {item.categorie} category-label">{item.categorie}</span>
                        <span class="author">Door {item.author} op {item.date}</span>
                    </div>
                    <h3 id="over">{item.title}</h3>
                </div>
            </div>
        </a>
    </li>
{/each}
</ul>
  
<style>
    .post {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        background-color: var(--lg-bg);
        border-radius: 1rem;
        transition: .2s;
        cursor: pointer;
        margin-bottom: 1rem;
        border: none;
    }

    a {
        color: var(--darkblue);
        text-decoration: none;
    }

    .horizontal-flex-row {
        display: flex;
        width: 100%;
    }

    .post img {
        margin: 0;
        width: 30%;
        height: 8rem;
        object-fit: cover;
        border-radius: 1rem 0rem 0rem 1rem;
    }

    .post:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    }

    .post-text {
        margin: .5rem;
    }

    .post-info {
        display: flex;
        justify-content: space-between;
    }

    .post-info * {
        font-size: .6rem !important;
    }

    h3 {
        margin: .5rem 0rem 1rem 0rem;
        color: var(--spat);
        font-size: 1rem;
    }

    .category-label {
        padding: .2rem .4rem;
        border-radius: .5rem;
    }

	@media only screen and (max-width: 1100px) {
		.post-info * {
            font-size: .8rem !important;
        }

        .post-info {
            flex-direction: column;
        }

        .categorie-label {
            width: fit-content;
        }
	}
</style>
  