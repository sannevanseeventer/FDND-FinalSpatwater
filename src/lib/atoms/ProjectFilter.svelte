<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
        // Get reference to the filter list and project list
        const filterList = document.querySelector('.filter-list');
        const projectList = document.querySelector('#project-list');

        // Attach click event to the filter list
        filterList.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                // Get the selected category from the clicked element
                const selectedCategory = event.target.getAttribute('data-category');

                // Get all projects
                const projects = projectList.querySelectorAll('li');

                // Loop through each project
                projects.forEach((project) => {
                    const projectCategory = project.classList[0]; // Assumes category is the first class

                    // Show/hide projects based on the selected category
                    if (selectedCategory === 'all' || projectCategory === selectedCategory) {
                        project.style.display = 'block'; // Show project
                    } else {
                        project.style.display = 'none'; // Hide project
                    }
                });

                // Update active class for visual indication of the selected category
                const activeFilter = filterList.querySelector('.active');
                activeFilter.classList.remove('active');
                event.target.classList.add('active');
            }
        });
    });
</script>

<ul class="filter-list">
    <li class="active" data-category="all">Alles</li>
    <li data-category="Klimaatadaptatie">Klimaatadaptatie</li>
    <li data-category="Waterkwaliteit">Waterkwaliteit</li>
    <li data-category="bRAIN">bRAIN</li>
</ul>

<style>
    .filter-list {
        display: flex;
        margin-bottom: .5rem;
    }

    .filter-list li {
        font-size: .8rem;
        margin-right: 1rem;
        background-color: #ebebeb;
        padding: .2rem .4rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: .2s;
        user-select: none;
    }

    .filter-list li:hover {
        background-color: #4ecd5d89;
    }

    .active {
        background-color: #4ECD5D !important;
        color: #fff;
    }

    @media only screen and (max-width: 1100px) {
        .filter-list li {
            font-size: .7rem;
            margin-right: .5rem;
        }
    }
</style>