<script>
import Blog25Dec23 from '$lib/constants/blogs/blog25Dec23.md'
import Blog28Dec23 from '$lib/constants/blogs/blog28Dec23.md'

export let data;
let blogName = data.slug
</script>

<body>
  {#if blogName == "blog25Dec23"}
  <Blog25Dec23/>
  {:else if blogName ="blog28Dec23"}
  <Blog28Dec23/>
  {:else}
  <p>
    OOPS NO BLOG FOUND! 
  </p>
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
