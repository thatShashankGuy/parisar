<script>
        import {URLS} from '../service/config'
    // @ts-ignore
    let metadata = ''
    /**
   * @type {string | Blob}
   */
    // @ts-ignore
    let audio 

    async function sumbitMetadata(){
        try {
            const response = await fetch(URLS.audioMetadata,{
                method:"POST",
                headers :{
                    "Content-Type" : "application/json",
                },

                body: metadata
            })

            if(!response.ok){
                 alert(response.status)
                 throw new Error(JSON.stringify(response))
            }
            alert("DONE")
            return response

        } catch (error) {
            // @ts-ignore
            alert(error.message)
            throw new Error(error.message)
        }
    }
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
            
            <label for="markdown">
                Audio file
            </label>
            <br>
            <input type="file" id="markdown" name="markdown" bind:value={audio}/><br><br>
            
            <button type="button" id="submitButton" on:click={sumbitMetadata}>
                submit
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