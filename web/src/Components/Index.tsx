import { useEffect, useRef } from "react"
import Feedback from "./Feedback/Feedback"
import BlogIndex from "./BlogIndex/BlogIndex"
import Landing from "./Landing/Landing"

const Index = () => {
  const items : any[]= [{
    key : 1,
    name : "The Typescript Guide", 
    address : "https://github.com/thatShashankGuy/Guides/wiki/The-TypeScript-Guide"
  },
  {
    key : 2,
    name :"Pointers in Go",
    address:"https://github.com/thatShashankGuy/Guides/wiki/Understanding-Pointers-In-Go"
  }

]
  const landingRef  = useRef<HTMLElement | null>(null)
  const blogIndexRef = useRef<HTMLElement | null>(null)
  const feedbackRef = useRef<HTMLElement | null>(null)

  function handleScroll(){
    if(blogIndexRef.current?.offsetTop !== undefined
      && feedbackRef.current?.offsetTop !== undefined
      && landingRef.current?.offsetTop !== undefined){
      if( window.scrollY < blogIndexRef.current?.offsetTop){
        window.scrollTo({
          top: blogIndexRef.current.offsetTop,
          behavior: 'smooth'
        });
      }else if (
        window.scrollY >= blogIndexRef.current?.offsetTop &&
        window.scrollY < feedbackRef.current?.offsetTop
      ){
        window.scrollTo({
          top: feedbackRef.current.offsetTop,
          behavior: 'smooth'
        });
      }else{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
   
  }

  useEffect(()=>{
    const onWheel = (e :any) => {
      if (e.deltaY > 0){ 
        handleScroll();
      }
    }
    const onKeyDown = (e :any) => {
      if (e.key === 'ArrowDown') {
        handleScroll();
      }
    };

    window.addEventListener('wheel', onWheel);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  },[])





  return (<>
    <section ref={landingRef}>
      <Landing />
    </section>
    <section ref={blogIndexRef}>
      <BlogIndex items={items} />
    </section>
    <section ref={feedbackRef}>
      <Feedback />
    </section>

  </>)
}

export default Index