<script>
import Typescript from '$lib/constants/blogs/typescript.md'
import AcidBaseCap from '$lib/constants/blogs/acidbasecap.md'
import Burnout from '$lib/constants/blogs/burnout.md'
import Gopointers from '$lib/constants/blogs/gopointers.md'
import IOnodejs from '$lib/constants/blogs/ionodejs.md'


export let data;
let blogName = data.slug
</script>

<body>
  {#if blogName == "typescript"}
  <Typescript/>
  {:else if blogName == "acidbasecap"}
  <AcidBaseCap/>
  {:else if blogName == "burnout"}
  <Burnout/>
  {:else if blogName == "gopointers"}
  <Gopointers/>
  {:else if blogName == "ionodejs"}
  <IOnodejs/>
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
