<script>
  import B001 from '$lib/blogs/B001.md'
  import B002 from '$lib/blogs/B002.md'
  export let data;

const blogName = data.slug
</script>

<body>
    {#if blogName === 'B001'}
        <B001/>
    {:else if blogName === 'B002'}
        <B002/>
  {:else}
    <!-- Default case -->
    <p>No such Article Found</p>
  {/if}
</body>

<style>
 body {
    background-color: rgba(255, 255, 255, 0.8);
    color: rgb(0, 4, 8);
    margin: 0;
    padding: 2rem;
    font-family: Arial, sans-serif !important;
    font-size: 24px !important;
    overflow-x: hidden !important;
    min-height: 100vh;

  }

@media screen and (max-width: 768px) {

    body {
    background-color: rgba(255, 255, 255, 0.8);
    color: rgb(0, 4, 8) !important;
    margin: 0;
    padding: 2em;
    font-family: Arial, sans-serif !important;
    font-size: medium !important;
    overflow-x: hidden !important;
    min-height: 100vh;
    }
  } 
</style>
