<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { downloadResume } from '$lib/index.js'
    const img = 'images/chatting.png'
    const intro = 'Hi I am Shashank - a software engineer based in Bangalore, India'
</script>

<main  >
    <div class="profile-container">
        <img class="profile-image" src={img} alt="">
        <br>
        <!-- <div class="social-links">
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
        </div> -->
        <div class="profile-info">
                <h1>{intro}</h1>          
        </div>
        <div class="profile-info">
        <button
        type="submit"
        style="border: 1px solid black; padding : 3% "
        on:click={downloadResume}
      >
      <i class="fa-solid fa-paperclip"></i>
       <b style="display: inline;"> &nbsp; Download Resume</b>
      </button></div>   
    </div>
</main>

<style>
    .profile-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }

    .profile-image {
    width: 80%;
    height: auto;
    max-width: 150px;
    object-fit: cover;
}

    .profile-info {
        margin-top: 2rem; 
    }
    /* .social-links a{
        text-decoration: none;
        color: #333; 
        font-size: medium;
        transition: color 0.3s ease;
    }

    .social-links a:hover {
        color: #333;  
    } */

    button {
    background-color: inherit;
    padding: 0.1rem 0.1rem; 
    font-size: 0.8em; 
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
  }
</style>