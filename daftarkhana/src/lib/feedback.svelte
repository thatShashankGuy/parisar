<script>
    import {URLS} from '../service/config'
    let jsonData = []
    async function requestFeedBack(){
        try {
            const response = await fetch(URLS.feedback,{
            method:"GET"
        })

        if(!response.ok){
            //@ts-ignore
            throw new Error(response)
        }

         let data_from_response = await response.json()
         jsonData = data_from_response
        } catch (error) {
            alert(error.message);
            throw new Error(error.message)
        }
    }
</script>


<main>

<div>
    <h2>
        Read feedback
    </h2>
    <form id="myForm">
        <section>
              <button type="button" on:click={requestFeedBack}> Request Feedback</button>
              <code id="feedback" >
                <table border="2" style="width: 100%; background-color:blanchedalmond">
                    <thead>
                      <tr>
                        <th>Comment</th>
                        <th>Email</th>
                        <th>Source</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each jsonData as item}
                        <tr>
                          <td>{item.comment}</td>
                          <td>{item.email}</td>
                          <td>{item.source}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.updatedAt}</td>
                        </tr>
                      {/each}
                    </tbody>
              </code>
        </section>
    </form>
</div>
</main>

<style>
    
</style>