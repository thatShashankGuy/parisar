<script>
import Blog28Dec23 from '$lib/constants/blogs/blog28Dec23.md'
import Blog25Dec23 from '$lib/constants/blogs/blog25Dec23.md'
import Blog15Dec23 from '$lib/constants/blogs/blog15Dec23.md'
import Blog26Nov23 from '$lib/constants/blogs/blog26Nov23.md'
import Blog10Nov23 from '$lib/constants/blogs/blog10Nov23.md'


export let data;
let blogName = data.slug
</script>

<body>
  {#if blogName == "blog25Dec23"}
  <Blog25Dec23/>
  {:else if blogName == "blog28Dec23"}
  <Blog28Dec23/>
  {:else if blogName == "blog15Dec23"}
  <Blog15Dec23/>
  {:else if blogName == "blog26Nov23"}
  <Blog26Nov23/>
  {:else if blogName == "blog10Nov23"}
  <Blog10Nov23/>
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
