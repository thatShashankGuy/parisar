<script>
  import {blogs} from '$lib/constants/index.js'
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  /* Blog post card */
  .blog-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  /* Blog post title */
  .blog-title {
    font-size: 24px;
    margin: 0;
    color: #333;
  }

  .blog-description {
    font-size: 14px;
    color: #888;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #555;
  }


  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }

    .blog-card {
      padding: 10px;
    }

    .blog-title {
      font-size: 20px;
    }

    .blog-description {
      font-size: 12px;
    }
  }
</style>

<section>
  <div class="container" >
    <h1> <i class="fa-solid fa-lightbulb"></i>&nbsp; Read my blogs</h1>
  </div>
  <div class="container">
    {#each blogs as post (post.link)}
    <div class="blog-card">
      <i class="fa-solid fa-blog"></i> <a href={`blog/${post.link}`} class="blog-title">{post.title}</a>
      <p class="blog-description">{post.date}</p>
    </div>
    {/each}
  </div>
</section>
