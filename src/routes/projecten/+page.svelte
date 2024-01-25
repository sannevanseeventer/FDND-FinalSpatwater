<script>
    export let data
    import ProjectenV2 from "$lib/organisms/ProjectenV2.svelte"
</script>

<svelte:head>
  <title>SPATwater - Projecten</title>
</svelte:head>

<main>
    <ProjectenV2 {data} />
</main>

<style>
    main {
        margin-top: 2rem;
    }
</style>