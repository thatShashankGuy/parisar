<script>
    import {URLS} from '../service/config'
    import {genPresignedUrlAndUpload} from '../service/api'

    let fileData = null 
</script>

<main>

    <div>
        <h2>
            Resume
        </h2>
        <form id="myForm">
            <section>
                <label for="markdown">
                    upload Resume  ** <strong>Rename the file to "Resume" before uploading</strong> ** 
                 </label>
                 &nbsp;
                <input type="file" id="resume" name="resume" bind:this={fileData}/><br><br>
             
                <button type="button" id="submitButton" on:click={()=> genPresignedUrlAndUpload(fileData,URLS.uploadAudioFile)}>
                    upload 
                </button>
            </section>
        </form>
    </div>
    </main>
    
    <style>
        main{
            padding: 2rem;
        }
        label{
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: larger;
            color:darkblue
        }
    </style>