<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
</script>
<head>
  kendra
</head>
    <main>
        <header>
          <div class="navb">
            <a class="profile-link" href="/home">Home</a>
            &nbsp;
            <a class="profile-link" href="/about">About </a>
            &nbsp;
            <a class="profile-link" href="/blogs">Blogs </a>
            &nbsp;
            <a class="profile-link" href="/projects">Projects</a>
            &nbsp;
            <a class="profile-link" href="/contact">Contact </a>
          </div>
        </header>
        <section>
          <slot />
        </section>
      </main>
<style>

  main {
    background-color: #a9c9ff;
    background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
    color: rgb(49, 56, 63);
    font-family: monospace;
    margin: 0;
    padding: 0;
    overflow-x: hidden !important;
    min-height: 100vh;
  }

  .navb {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1;
  }

  .navb a {
    margin: 10px 15px;
    text-decoration: none;
    color: #333;
    font-size: medium;
    transition: color 0.3s ease;
  }

  .navb a:hover {
    color: inherit;
  }



  /* MOBILE */
  @media (max-width: 768px) {
    .navb {
      padding: 0.5rem;
      padding-left: 0;
    }

    .navb a {
      margin: 6px 6px;
      padding: 0.2rem;
    }

    a {
      color: #0a0a0a;
      font-size: smaller;
    }
  }
</style>
