<script>
    import {ImpRef} from '$lib/config.js'
</script>

<section class="project">
    <h1> <i class="fa-solid fa-lightbulb"></i>&nbsp; What I am working on currently </h1>
    <ul>
        <li><a  href={ImpRef.nibandh_pages}>Nibandh  </a>&mdash; 
            a comprehensive and evolving repository where we document concise, practical reference materials encountered during our tech learning and usage journey. 
            This project is more than just a collection of notes; 
            it's a growing guidebook, shaped by experiences and insights, 
            tailored to assist both beginners and experienced tech enthusiasts alike
        </li>
        &nbsp;
        <li> <a  href={ImpRef.vartalaap_site}>Vartalaap </a> &mdash;
        A semi-techincal podcast hosted independently on its own site I build, talking about software engineering, worklife balance 
        and navigating careers among other things.
        </li>

        &nbsp;
    </ul>
    <h1 style="text-align: left;"><i class="fa-solid fa-lightbulb"></i>  &nbsp; Announcements</h1>
    <ul>

        <li>
            Nibandh is looking for more contributors.If you like techincal writing and will like to contribute , please get it touch 
            by <a href="mailto:shashankforworkshekhar@gmail.com">email</a> or go to <a href={ImpRef.nibandh_repo}>Nibandh's git repo</a>
        </li>
    </ul>
</section>
<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding: 15%; 
    }
    h1{
        font-size: xx-large;
        text-align: left;
    }

    ul {
        list-style-type: disc; /* Use disc bullets for list items */
        font-size: xx-large; /* Adjust font size for desktop screens */
        margin: 0 auto; /* Center-align the content */
    }

    li {
        margin-bottom: 20px; /* Add spacing between list items */
    }

    @media (max-width: 768px) {
        ul {
            font-size: small; /* Adjust font size for smaller screens */
            padding-left: 10px; /* Reduce left padding on smaller screens */
        }
        section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding: 30% 12% 12% 12%;
        font-size: medium;
        height: 100%;
        }
        h1{
        font-size: medium;
    }

    }

 a {
        text-decoration:underline;
        color: #333;
        transition: color 0.3s ease;
        
    }

    a:hover {
        color: #333 
    }
</style>
