import Feedback from "./Feedback/Feedback"
import BlogIndex from "./BlogIndex/BlogIndex"
import Landing from "./Landing/Landing"

const Index = () => {
    const items = ["BLOG1", "BLOG2", "BLOG3", "BLOG4"]
    return(<>
           <section>
      <Landing></Landing>
      </section> 
        <section>
          <BlogIndex items={items} />
        </section>
        <section>
          <Feedback  />
        </section>
    
    </>)
} 

export default Index