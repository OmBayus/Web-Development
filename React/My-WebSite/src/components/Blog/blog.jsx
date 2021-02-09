import React from "react"
import {Jumbotron,Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdDateRange} from "react-icons/md"
import CardBlog from "../Card/Card"
import Bounce from "react-reveal/Bounce"

const posts = [
      {
            id:1,
            title: "TopicDeneme",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:2,
            title: "lalala",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:3,
            title: "TopicDeneme",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      },
      {
            id:4,
            title: "How to Install Python (How to Install Hyper + Git)",
            content: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
            date: new Date(),
            important: true
      }
]
const Blog = ()=>{

      var a = 0

      function Tarih(date){



            const aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
            return (date.getDay() + " " + aylar[date.getMonth()] + " " + date.getFullYear())
      }


      return <div className="blog">
            {
                  
                  posts.reverse().map((post,index)=>{
                  return index ===0 ? <Jumbotron fluid className="last-post">
                        <Container>
                              <p className="text-center text-info pt-5"> - Project - </p>
                              <h1 className="text-center pb-5">{post.title}</h1>
                              <p className="mb-5"><span className="ml-5 text-muted border p-2"><MdDateRange className="mr-1 mb-1"/>{Tarih(post.date)}</span><span className="float-right mr-5"><CgProfile className="mr-1 mb-1"/> Yazar <a href="/" as={Link} to="/">OmBayus</a></span></p>
                              <iframe title="youtube" className="youtube-link" src="https://www.youtube.com/embed/I8E1rK6F-N8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <p className="mb-5 post-content">
                              {post.content}
                              </p>
                              <p className="text-center mb-0 pb-5">
                              <Button variant="outline-primary" size="lg">Learn more</Button>
                              </p>
                        </Container>
                  </Jumbotron> : <Bounce left><CardBlog /></Bounce>
                  
            })}
            <div style={{paddingBottom:100}}></div>
      </div>

}


export default Blog