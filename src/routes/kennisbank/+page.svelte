<script>
    export let data
    import Kennisbank from "$lib/organisms/Kennisbank.svelte"
    import Footer from "$lib/organisms/Footer.svelte"
</script>

<svelte:head>
  <title>SPATwater - Kennisbank</title>
</svelte:head>

<main>
    <Kennisbank {data} />
    <Footer />
</main>