<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
  import { fetchAudio } from "$lib/index.js";
  import { onMount } from "svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { goto } from '$app/navigation';
  export let data;

  let wavesurfer;
  let isPlaying = false; 
  let isLoading = true
  let audioDuration = 0; 
  let currentTime = 0; 
  onMount(async () => {
    await loadAudio();
  });

  async function loadAudio() {
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
        isPlaying = false;
      } else {
        wavesurfer.play();
        isPlaying = true;
      }
    } else {
      const url = await fetchAudio(data.slug);
      wavesurfer = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#4F4A85",
        progressColor: "#383351",
        url: url,
      });

      wavesurfer.on("ready", () => {
        audioDuration = wavesurfer.getDuration();
        wavesurfer.play();
        isPlaying = true;
        isLoading = false;
        // Update the audio timer periodically
        setInterval(() => {
          currentTime = wavesurfer.getCurrentTime();
        }, 1000);
      });
    }
  }

  function goHome(){
    goto('/')
  }
  function goTOEp(){
    goto(`/vartalaap`)
  }

  function submitFeedback(){
    goto('/feedback')
  }

  function togglePlayPause() {
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
        isPlaying = false;
      } else {
        wavesurfer.play();
        isPlaying = true;
      }
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

</script>

<main>
    <button on:click={goTOEp}><i class="fa-solid fa-headphones">&nbsp; episodes</i> </button>
    <button on:click={goHome}><i class="fa-solid fa-house-flag">&nbsp; home </i></button>
    <button on:click={submitFeedback}><i class="fa-solid fa-pen-nib">&nbsp; feedback</i></button>
    <div class="card">
    <div id="waveform">
      {#if isLoading}
      <i class="fa-solid fa-circle-notch fa-spin"></i>loading ...
      {:else} 
        <span class="audio-timer">
            {`${formatTime(currentTime)} / ${formatTime(audioDuration)}` }
            <button style="padding: 1.8rem; align-items: right;" on:click={togglePlayPause}>
                {#if isPlaying}
                  <i class="fa-solid fa-pause fa-2xl"></i>
                {:else}
                  <i class="fa-solid fa-play fa-2xl"></i>
                {/if}
              </button>
        </span>
        {/if}  
    </div>  

  </div>


</main>

<style>

 button {
    height: 1.5rem;
    margin: 0.5rem 0; 
    font-size: 1rem; 
    border-radius: 2%;
    border-color: black;
    margin-left: 3rem; 
  }
  #waveform {
    width: 90%;
    height: 20rem;
    margin-bottom: 1rem; 
  }
  .audio-timer {
    padding-left: 2rem; 
    padding-right: 2rem;
    display: flex;
    font-size: 2rem;
    justify-content:space-between; 
    align-items: center; 
  }
  .audio-timer button {
    margin-right: 1rem; 
    background: none;
    border: none;
  }
  button{
    background: none;
    border: none;
  }
</style>
