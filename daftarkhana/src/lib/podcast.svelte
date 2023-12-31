<script>
        import {URLS} from '../service/config'
        import {sumbitMetadata,genPresignedUrlAndUpload} from '../service/api'
    // @ts-ignore
    let metadata = ''
    let fileData = null
    
</script>

<main>

<div>
    <h2>
        Audio
    </h2>
    <form id="myForm">
        <section>
            <label for="metadata">
                metadata
            </label>
          <br>
            <textarea id="metadata" name="metadata" bind:value={metadata}></textarea> <br><br>
            <button type="button" id="submitButton" on:click={() => sumbitMetadata(metadata,URLS.audioMetadata)}>
                submit
            </button>

            <label for="markdown">
                Audio file
            </label>
            <br>
            <label for="markdown">
                upload Audio file
             </label>
             &nbsp;
             <input type="file" id="audio" name="audio" bind:this={fileData}/><br><br>
             
             <button type="button" id="submitButton" on:click={()=> genPresignedUrlAndUpload(fileData,URLS.uploadAudioFile)}>
                 upload 
             </button>
            <br> <br> <br>
            <div>
                <label for="code">METADATA FORMAT : </label> <br>
                <code>
                    {`{
                        "logId": "vartalaap01", 
                        "episodeId": "#1 ", 
                        "name" : "title of the episode" 
                    }`}

                </code>
        </section>
    </form>
</div>
</main>

<style>
     main{
        padding: 2rem;
    }
    textarea{
        height: 200px;
        width: 100%;
    }
    label{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: larger;
        color:darkblue
    }
</style>