<script>
  import Feedback from './lib/feedback.svelte';
  import Podcast from './lib/podcast.svelte';
  import Blogs from './lib/blog.svelte'
  import Resume from './lib/resume.svelte';
</script>

<main>
  <h1>DafatarKhana</h1>
<section>
  <div class="card">
    <Blogs />
  </div>
  <div class="card">
    <Podcast />
  </div>
  <div class="card">
    <Resume/>
    <Feedback/>
  </div>

</section>
</main>

<style>
  section{
    display: flex;
  }
</style>