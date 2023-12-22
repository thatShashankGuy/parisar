<script >
    // @ts-nocheck
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { goto } from '$app/navigation';
    import { fetchEpList } from "$lib/index.js";
    import { onMount } from "svelte";
    let arr = []
    let isLoading = true
    onMount(async () => {
    arr = await fetchEpList()
    if(arr.length > 0){
      isLoading = false
    }
  });
  function goHome(){
    goto('/')
  }
  function goTo(logId){
        goto(`/vartalaap/${logId}`)
    }
  </script>
  
  <main>
    <div class="card">
      {#if isLoading}
      <i class="fa-solid fa-circle-notch fa-spin"></i>
      {:else} 
      <ul>
        {#each arr as item,index (item.logId)}
          <ul key={index}>
            <button on:click={goTo(item.logId)}>
              <strong>
                <i class="fa-regular fa-lightbulb"> &nbsp;
                  {item.EpisodeId} &dash; {item.Name} &nbsp;
                  <i class="fa-solid fa-play"></i>
                </strong>
              </button>
          </ul>
        {/each}
        <br>
      
      </ul>
      {/if}
    </div>
    <div class="homebtn">
      <button on:click={goHome}><i class="fa-solid fa-house-flag">&nbsp; Back to Home </i></button>
    </div>
  </main>

  <style>
    ul {
      padding-top: 0.6em;
    }
  
    .homebtn {
      position: fixed;
      top: 1rem; 
      right: 1rem;
       
    }
    .homebtn button{
      background: none;
      border: none;
    }
  </style>
  
  