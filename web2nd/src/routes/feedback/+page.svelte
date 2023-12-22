<script>
    import { submitFeedBack } from "$lib/index.js";
    import { goto } from '$app/navigation';

    let email = '';
    let feedback = '';
    let errorMessage = '';
  
    async function handleSubmit() {
      if (!email || !feedback) {
        errorMessage = 'Name and feedback are required fields.';
      } else {
        const res = await submitFeedBack(email,feedback)
        console.log(res)
        if(res){
        errorMessage = 'Thank you for your feedback!';
        }else{
        errorMessage = 'Oops something went wrong!';   
        }
        email = '';
        feedback = '';
      }
    }

    function goHome(){
    goto('/')
  }
  function goTOEp(){
    goto(`/vartalaap`)
  }

  </script>

  
  <main>

    <div class="feedback">
    <h2><i class="fa-solid fa-pen-nib">&nbsp; Your feedback is important!</i></h2>
    <p>{errorMessage ? errorMessage :'' }</p>
    <form>

    <label for="email"><i class="fa-regular fa-lightbulb">&nbsp; Email:</i></label>
      <input type="email" id="email" bind:value={email} required/>
  
      <label for="feedback"><i class="fa-regular fa-lightbulb">&nbsp; Feedback:</i></label>
      <textarea id="feedback" bind:value={feedback} required></textarea>
  
      <button type="submit" on:click={handleSubmit}><i class="fa-solid fa-pen-nib">&nbsp; submit</i></button>
    </form>

</div>
    <div class="navbtn">
        <button  on:click={goTOEp}><i class="fa-solid fa-headphones">&nbsp; Ep</i> </button>
        <button  on:click={goHome}><i class="fa-solid fa-house-flag">&nbsp; Home </i></button>
    </div>
  </main>
    
  <style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 300px;
    margin: 0 auto;
  }

  label {
    margin-bottom: 8px;
  }

  input{
    background-color: antiquewhite;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    width: 100%;
    background-color: antiquewhite;
  }
  .navbtn{
    padding: 2rem;
    display: inline;
    justify-content:space-between ;
    align-items: center; 
  }
  .navbtn button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline;
    align-items: center;
  }
  </style>