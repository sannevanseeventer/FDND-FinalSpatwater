<script>
  export let data;
  import Kansenkaart from "$lib/organisms/Kansenkaart.svelte";
</script>

<svelte:head>
  <title>SPATwater - Kansenkaart</title>
</svelte:head>

<main>
  <Kansenkaart {data} />
</main>