<script>
    export let data;

    import { onMount } from 'svelte';

    onMount(() => {

    });
</script>

<div class="project-list-container">
    <ul class="project-list" id="project-list">
        <!-- Loop voor de desktop versie -->
        {#each data.projectens as project}
            <a href="/projecten/{project.slug}">
                <li id={project.slug} class="{project.categorie}">
                    <div class="horizontal-flex">
                        <div class="project-text">
                            <span class="{project.categorie}">{project.categorie}</span>
                            <h3>{project.title}</h3>
                            <p>{project.intro}</p>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </li>
            </a>
        {/each}
    </ul>
    <p id="noResultsMessage" style="display: none;">
        Geen resultaten gevonden.
    </p>
</div>

<style>
    /* Styling of project list */
    .project-list-container {
        height: calc(65vh - 1rem);
        overflow-y: scroll;
        overflow-x: hidden;
        /* padding-right: .5rem; */
    }

    /* .project-list-container::-webkit-scrollbar {
        display: none;
    } */

    .project-list {
        list-style: none;
        padding: 0;
        width: 100%;
    }

    .project-list li {
        background-color: #ffffff;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    .project-list .horizontal-flex {
        display: flex;
    }

    .project-list .project-text {
        padding: 0.5rem 1rem;
        position: relative;
        padding-bottom: 2rem;
    }

    .project-list span {
        color: var(--darkblue);
        font-weight: 600;
        font-size: 0.9rem;
    }

    .project-list h3 {
        color: var(--spat);
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        margin-top: .2rem;
    }

    .project-list p {
        color: var(--darkblue);
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        line-height: 1.2rem;
    }

    .project-list i {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0.6rem 1.2rem;
        color: var(--green);
        transition: 0.2s;
    }

    .project-list li:hover i {
        transform: translateX(0.5rem);
    }

    span {
        padding: .2rem .4rem;
        border-radius: .5rem;
        font-size: .6rem !important;
    }

    a {
        text-decoration: none;
    }
</style>
