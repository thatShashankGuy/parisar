<script>
    import {URLS} from '../service/config'
    // @ts-ignore
    let metadata = ''
    /**
   * @type {string | Blob}
   */
    // @ts-ignore
    let markdown 

    async function sumbitMetadata(){
        try {
            const response = await fetch(URLS.blogMetadata,{
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

    async function submitMarkdown(){
        try {
            const response = await fetch(URLS.uploadblogMarkdown,{
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
        Blogs
    </h2>
        <section>
            <label for="metadata">
               add metadata
            </label>
          <br>
            <textarea id="metadata" name="metadata" bind:value={metadata}></textarea> <br><br>
            <button type="button" id="submitButton" on:click={sumbitMetadata}>
                submit 
            </button>

            <br><br><br>
            <label for="markdown">
               upload markdown file
            </label>
            &nbsp;
            <input type="file" id="markdown" name="markdown" bind:value={markdown}/><br><br>
            
            <button type="button" id="submitButton" on:click={submitMarkdown}>
                upload 
            </button>
            <br> <br> <br>
            <div>
                <label for="code">METADATA FORMAT : </label> <br>
                <code>
                    {`{
                        "title": "Title of the blog ",
                        "author": "Shashank Shekhar",
                        "date": "December 28, 2023",
                        "link" : "blog28Dec23"
                    }`}

                </code>
            </div>
        </section>
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