
import React from "react";
import './App.css'
import Mydata from "./data";
import { useState } from "react";

export default function Portfolio(){
   
let Card = Mydata.map((item)=>{
   return <div>
   <Main fname={item.fname}
   education={item.education.degree}
   summary={item.summary}
   />
   <Career title={item.title2}
   para={item.career.toUpperCase()}/>
   <Skillset />
   <Education college={item.education.college}
       passout3={item.education.passout3}
       degree={item.education.degree}
        school={item.education.school}
        hse={item.education.hse}
        sslc={item.education.sslc}/>
        <Experience
        course={item.course.toUpperCase()}
        project={item.project.toUpperCase()}
        tools={item.tools}
        reactproject={item.portfoliopro.toUpperCase()}/>
        <Contact/>
        <Aboutus service1={item.service1.toUpperCase()}
        service2={item.service2.toUpperCase()}
        service3={item.service3.toUpperCase()}
        service4={item.service4.toUpperCase()}
        />
        <Saythanks/>
        </div>
})
return ( <div>
    {Card}
    </div>
)}

let time= new Date().getHours()
// let AM=new Date().toLocaleString().includes("A")

// let PM=new Date().toLocaleString().includes("P")

// console.log(time)

   function Nav(props){
       
     return(
       <header style={{backgroundColor:props.style2}}>
        <nav id="head">
        <img src="./logo2.png" width={"6%"} height={"6%"} alt="logo"></img>
        <ul>
        <li><i class="fa-solid fa-house"><a href="">HOME</a></i></li>
        <li><i class="fa-solid fa-address-card"><a href="#profile">ABOUT M E</a></i></li>
        <li><i class="fa-solid fa-computer"><a href="#skill">SKILLS</a></i></li>
        <li>
        <i class="fa-solid fa-phone"><a href="#hire me2" id="contact">CONTACT</a></i>
        </li>
        </ul>
        <i class="fa-solid fa-bars"></i>
        </nav>
        </header>
        )
}   

function Main(props){
   const [fax,faxclr] = useState("teal")
   const [color2,altclr2] = useState("cornsilk")
   const[black,blackclr]=useState("black")
   const[cornsilk,cornsilkclr]=useState("cornsilk")

   function valid(x){
      if(x>=5 && x<12){
        return `"RISH AND SHINE"`
      }
      else if( x>=12 && x<18){
         return `"GREETINGS OF GOOD AFTERNOON"`
      }
      else if(x>=17 && x<20){
        return `"GREETINGS OF GOOD EVENING"`
      }
      else{
         return `"GREETINGS OF GOOD NIGHT"`
      }
      }


    return(
       <div>
       <Nav style2={fax} />
       <div id="darkmode" style={{backgroundColor:black,color:cornsilk}}>
       <p>{valid(time)}</p>
       <i class="fa-solid fa-circle-half-stroke" onClick={
         ()=>{
          faxclr(fax==="teal"?"black":"teal")
          altclr2(color2=="cornsilk"?"aqua":"cornsilk")
          blackclr(black=="black"?"cornsilk":"black")
          cornsilkclr(cornsilk=="cornsilk"?"black":"cornsilk")
         } 
      
      }></i></div>
       <div id="profile" style={{backgroundColor:fax}}>
       <div id="myname" style={{color:"cornsilk"}}>
        <h3 style={{backgroundColor:color2}}>ABOUT ME</h3>
       <h2>I'm</h2>
       <h1 style={{color:color2}}>{props.fname}</h1>
       <label>{props.education}</label>
       <br></br>
       <p>{props.summary}</p>
       </div>
       <img src="./mypic3.png" alt="mypictue"></img>
       <div id="arrow">
       <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
       </div>
       </div>
       </div> 
     )
 }

 function Career(props){
      return(
       <div id="career">
       <h3 >{props.title}</h3>
       <p>{props.para}</p>
      </div>
     )
 }

 function Skillset(){
       return(
       <section>
       <div id="skill">
       <h3>SOFTWARE SKILLS</h3>
       <div className="skill-title">
       <label className="software">FRONTEND DEVELOPMENT</label>
       <br></br>
       <div className="images">
       <img src="./html.png" width={"85"} height={"85"} alt="htmlskill"></img>
       <label className="skill-name">HTML 5</label>
       <br></br>
       <img src="./css.png" width={"85"} height={"85"} alt="cssSkill"></img>
       <label className="skill-name">CSS 5</label>
       <br></br>
       <img src="./java script.png" width={"85"} height={"85"} alt="cssSkill"></img>
       <label className="skill-name">ECMA SCRIPT</label>
       <br></br>
       <img src="react.png" width={"85"} height={"85"} alt="reactskill"></img>
       <label className="skill-name">REACT JS</label>
       <br></br>
       </div>
       </div>   

      <div className="skill-title">
       <label className="software">BACKEND DEVELOPMENT</label>

       <div className="images">
       <img src="./oracle.png" width={"90"} height={"85"} alt="oracleskill"></img>
       <label className="skill-name">ORACLE SQL</label>
       <br></br>
       <img src="./java.png" width={"90"} height={"85"} alt="oracleskill"></img>
       <label className="skill-name">JAVA</label>
       <br></br>
       </div>     
       </div>
       <div className="skill-title">
       <label className="software">TOOLS & TECHNOLOGIES</label>
       <div className="images" >
       <img src="./git-hub.png" width={"85"}  height={"85"} alt="githubskill"></img>
       <label className="skill-name">GIT-HUB</label>

       <br></br>
       <img src="./vs code.png" width={"85"} height={"85"} alt="vscodeskill"></img>
       <label className="skill-name">VS CODE</label>
       </div>
       </div>
      </div>

      </section>
    )
 }

 function Education(props){
  return(
       <section>
       <div id="education">
       <h3>QUALIFICATION</h3>
       <div className="details">
       <details>
       <label>{props.college}</label>
       <br></br>
       <label>2019-2023</label>
       <summary>
       {props.degree}
       </summary>
       </details>
       </div>
       <div className="details">
       <details>
       <label>{props.school}</label>
       <br></br>
       <label>2017 - 2018</label>
       <summary>
       {props.hse}
       </summary>
       </details>
       </div>
       <div className="details">
       <details>
       <label>{props.school}</label>
       <br></br>
       <label>2016</label>
       <summary>
       {props.sslc}
       </summary>
       </details>
       </div>
       </div>
       </section>

  )
 }

 function Experience(props){
   return(
       <div id="knowledge">
       <h3>EXPERIENCE</h3>
       <div className="experience">
        <ul>
        <li>BESANT TECHNOLOGIES (IT - HUB)
        <p>{props.course}</p>
        </li>
        <li>TIME TO READ WEBSITE
        <p>{props.project}
        <br></br>
         {props.tools}</p>
        </li>
        <li>{props.reactproject}</li>
        <li><a href="https://github.com/aravinth-webdev">GIT-HUB</a></li>
        </ul>
       </div>
       </div>
       )
 }

function Contact(){
     const[phone,setphone]=useState(false)
     const[appnum,setphone2]=useState(false)
       return(
       <div className="contact" id="hire me2">
       <h3>CONTACT</h3>
       <div id="hireme">
       <div className="source">
       <i class="fa-regular fa-envelope"></i>
       <a href="mailto:arvinthweb63@gmail.com">EMAIL</a>
       </div>
       <div className="source" >
       <i class="fa-solid fa-phone-volume"></i>
       <a onClick={()=>{
         setphone(phone===false?true:false)
       }}>PHONE</a>
       {phone && <p> Call me - 6382039155</p>}
       </div>
       <div className="source">
       <i id="clike" class="fa-brands fa-whatsapp"></i>
       <a onClick={
         ()=>{
            setphone2(appnum===false?true:false)
         }
       }>WHATS APP</a>
       {appnum && <p> Message me -6382039155</p>}
       </div>
       </div>
       </div>
      )
   }

function Aboutus(props){
   return(
       <div id="footer">
       <div className="address">

       <label>ADDRESS</label>
       <p>KONGANAPURAM,
       <br></br>
       SALEM(DT) 637502.
       <br></br>
       TAMILNADU STATE.
       </p>
       </div>
       <div className="address">
       <label>SERVICES</label>
       <ul>
       <li>{props.service1}</li>
       <li>{props.service2}</li>
       <li>{props.service3}</li>
       <li>{props.service4}</li>
       </ul>
       </div>
       <div className="address">
       <label>MY RESUME</label><div id="resume">
       <a href="./resumefile.pdf">
       <img src="./resume.png" width={"150px"} height={"200px"}>     
       </img>
       </a>
       </div>
      </div>
      </div>
      )
}

function Saythanks(){
   return(
      <div id="thanksmsg">
      <div className="letters">
      <h2>THANK YOU! FOR VIEW MY PORTFOLIO<i class="fa-regular fa-handshake"></i></h2>
      <label className="letters">Have a good day.......</label>
      </div>
      </div>

   )
}
