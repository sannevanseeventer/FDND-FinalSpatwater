<script>
    export let data;

    import { onMount } from 'svelte';
    import ProjectenMenu from '../molecules/ProjectenMenu.svelte';
    import ProjectenAside from '../molecules/ProjectenAside.svelte';
  
    onMount(() => {

        // Setting up map
        var map = L.map('map', {
        center: [52.360956, 4.8964073],
        zoom: 10,
        minZoom: 10,
        scrollWheelZoom: false
        });

        // Define a custom icon
        var waterIcon = L.icon({
            iconUrl: '/assets/water-svgrepo-com.png', // Path to your custom PNG marker image
            iconSize: [32, 32], // Size of the icon
            iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });

        // Define a custom icon
        var climateIcon = L.icon({
            iconUrl: '/assets/cloud-svgrepo-com.png', // Path to your custom PNG marker image
            iconSize: [32, 32], // Size of the icon
            iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });

        // Define a custom icon
        var brainIcon = L.icon({
            iconUrl: '/assets/bolt-svgrepo-com.png', // Path to your custom PNG marker image
            iconSize: [32, 32], // Size of the icon
            iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });

        // Leaflet map theme
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',).addTo(map);

        // Loop through projecten
        data.projectens.forEach((project, index) => {

            if(project.categorie == "Klimaatadaptatie") {
                // Create a marker with the custom icon
                var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
                icon: climateIcon // Assign the custom icon to the marker
                }).addTo(map);
            }

            if(project.categorie == "Waterkwaliteit") {
                // Create a marker with the custom icon
                var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
                icon: waterIcon // Assign the custom icon to the marker
                }).addTo(map);
            }

            if(project.categorie == "B-rain") {
                // Create a marker with the custom icon
                var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
                icon: brainIcon // Assign the custom icon to the marker
                }).addTo(map);
            }

            // Add a hover event
            document.getElementById(project.slug).addEventListener('mouseover', function () {
                map.setView([project.plaats.latitude, project.plaats.longitude], 12);
            });
        });

        // Get all list items
        const menuItems = document.querySelectorAll('#menu-list li');
        
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuItems.forEach(item => {
                    item.classList.remove('active');
                });

                this.classList.add('active');

                const location = this.getAttribute('data-location');
                
                if (location === 'amsterdam') {
                    // Change the map view for Utrecht
                    map.setView([52.3547418, 4.8215606], 12);
                }

                if (location === 'den-haag') {
                    // Change the map view for Utrecht
                    map.setView([52.071731, 4.2274685], 12);
                }

                if (location === 'rotterdam') {
                    // Change the map view for Utrecht
                    map.setView([51.9280632, 4.4084283], 12);
                }

                if (location === 'utrecht') {
                    // Change the map view for Utrecht
                    map.setView([52.0784901, 5.1140772], 12);
                }
                
            });
        });

    });
</script>

<main>
    <section id="map">
        <ProjectenMenu />
        <ProjectenAside {data} />
    </section>
</main>
  
<style>
    main {
        height: 100vh;
    }

    section {
        height: 100vh;
        width: 100vw;
        position: absolute;
    }
</style>