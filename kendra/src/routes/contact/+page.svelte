<script>
  import { submitFeedBack } from "$lib/index.js";
  let email = "";
  let feedback = "";
  let errorMessage = "";

  async function handleSubmit() {
    if (!email || !feedback) {
      errorMessage = "Name and feedback are required fields.";
    } else {
      const res = await submitFeedBack(email, feedback);
      console.log(res);
      if (res) {
        errorMessage = "Thank you for your feedback!";
      } else {
        errorMessage = "Oops something went wrong!";
      }
      email = "";
      feedback = "";
    }
  }
</script>

<section>
  <h2>Get in touch via following socials</h2>
  <h2>
    <div class="social-links">
      <a href="https://github.com/thatShashankGuy" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/thatshashanguy/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        &nbsp;
        <a href="mailto:shashankforworkshekhar@gmail.com" target="_blank">
          <i class="fa-regular fa-envelope"></i>
        </a>
  </div>
</h2>
 <!-- <i class="fa-solid fa-paper-plane"></i>&nbsp; Reach out via message board or
    <a href="mailto:shashankforworkshekhar@gmail.com">email directly!</a>
  </h3> -->
  <!-- <p>{errorMessage ? errorMessage : ""}</p> -->
  <!-- <form>
    <label for="email"
      ><i class="fa-regular fa-lightbulb"></i>&nbsp; Email:</label
    >
    <input type="email" id="email" bind:value={email} required />

    <label for="feedback"
      ><i class="fa-regular fa-lightbulb"></i>&nbsp; Message:</label
    >
    <textarea id="feedback" bind:value={feedback} required></textarea>

    <button
      type="submit"
      style="border: 1px solid black; padding : 5% "
      on:click={handleSubmit}
    >
   <i class="fa-solid fa-paper-plane"></i>
      &nbsp; submit
    </button>
  </form> -->
</section>



<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 12% 12% 12% 12%; 
  }

  @media (max-width: 768px) {
    section {
      padding: 30% 12% 12% 12%; 
      font-size: medium;
      height: 100%;
    }
  }


    .social-links a:hover {
        color: #333;  
    }

  @media (min-width: 769px) {
    /* form {
      padding: 2rem; 
      font-size: large; 
    } */
  }

  /* label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    width: 100%;
    background-color: antiquewhite;
    border: 1px solid #ccc;
    border-radius: 5px;
  } */

  a {
    color: #333;
    text-decoration: underline;
  }

  /* button {
    background-color: inherit;
    padding: 0.1rem 0.1rem; 
    font-size: 1em; 
    font-weight: 500; 
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    border: 1px solid black;
    border-radius: 5px;
    color: #0a0a0a;
    border-color: black;
  }

  button:hover {
    border-color: #9ea1d2;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  } */
</style>
