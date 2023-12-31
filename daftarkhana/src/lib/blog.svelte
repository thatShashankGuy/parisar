<script>
    import {URLS} from '../service/config'
    import {sumbitMetadata} from '../service/api'
    import  {genPresignedUrlAndUpload} from '../service/api'
    // @ts-ignore
    let metadata = ''
    let fileData = null
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
            <button type="button" id="submitButton" on:click={()=> sumbitMetadata(metadata,URLS.blogMetadata)}>
                submit 
            </button>

            <br><br><br>
            <label for="markdown">
               upload markdown file
            </label>
            &nbsp;
            <input type="file" id="markdown" name="markdown" bind:this={fileData}/><br><br>
            
            <button type="button" id="submitButton" on:click={()=> genPresignedUrlAndUpload(fileData,URLS.uploadblogMarkdown)}>
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