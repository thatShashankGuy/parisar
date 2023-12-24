<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import './styles.css'
  const img = 'images/listening.png'
</script>

<main>
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

  <div class="card">

     
      <ul>
        <img class="profile-image" src={img} alt="">
       <h3> <i class="fa-regular fa-lightbulb"></i>WELCOME TO VARTALAAP! </h3>
        <ul>
          <a href="/vartalaap">
            <i class="fa-regular fa-lightbulb">
            </i> &nbsp; Click here for All Episode
          </a>
        </ul>
   <ul>   <a href="/feedback">
          <i class="fa-regular fa-lightbulb"></i>
         &nbsp; Click here to submit feedback </a>
        </ul>
          <ul>
          <a href="https://shashankshekhar.pages.dev/">
          <i class="fa-regular fa-lightbulb"></i> 
            &nbsp; About me on 
            <strong>"kendra"</strong></a>
        </ul> 
      </ul>

  </div>
</main>

<style>
  
  img{
    width: 80%;
    height: auto;
    max-width: 100px;
    object-fit: cover;
    padding-left: 25%;
}
  
  .social-links {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

  .social-links a {
    margin: 10px 0;
    text-decoration: none;
    color: #333; /* Color for the icons */
    font-size: 24px;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: inherit
  }

  @media (max-width: 768px) {
    .social-links {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }

  .social-links a {
    margin: 10px 0;
    text-decoration: none;
    color: #333; /* Color for the icons */
    font-size: 24px;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: inherit
  }
  }

</style>
