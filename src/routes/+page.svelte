<script>
    export let data;
    import { onMount } from "svelte";

    import Header from "../lib/organisms/Header.svelte";
    import Over from "../lib/organisms/Over.svelte";
    import Expertise from "../lib/organisms/Expertise.svelte";
    import Team from "../lib/organisms/Team.svelte";
    import Contact from "../lib/organisms/Contact.svelte";
    import Partners from "../lib/organisms/Partners.svelte";
    import PartnersLarge from "../lib/organisms/PartnersLarge.svelte";
    import Footer from "$lib/organisms/Footer.svelte";
    

    onMount(() => {});
</script>

<Header />
<Over {data} />
<Expertise {data}/>
<Team {data} />
<Contact {data} />
<!-- <Partners {data} /> -->
<PartnersLarge {data} />
<Footer />