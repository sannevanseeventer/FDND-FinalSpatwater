<script>
    export let data;

    import ProjectFilter from "../atoms/ProjectFilter.svelte";
    import ProjectItem from "./ProjectItem.svelte"; 
</script>
<aside id="infoPanel">
    <div id="infoContent">
        <div class="inner-content">
            <ProjectFilter />
            <ProjectItem {data} />
        </div>
    </div>
</aside>

<style>
    aside {
        background-color: #fdfdfdb3;
        height: 70vh;
        max-width: 28rem;
        padding: 1rem;
        margin-left: 5%;
        margin-top: 1.5rem;
        border-radius: 1rem;
        position: relative;
        z-index: 9999;
        display: flex;
        box-shadow: 0px 0px 10px 5px #9d9d9d4b;
    }

    .inner-content {
        position: relative;
        width: 100%;
        height: 70vh;
    }

      /* Mobiele weergaven */
    @media only screen and (max-width: 1100px) {
        aside {
            width: 90%;
        }
    }
</style>