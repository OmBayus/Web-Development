import React from "react"
import Navbar from "./navbar"
import Hello from "./hello"
import Footer from "./Footer"
import Blog from "./Blog/blog"
import {Switch, Route} from "react-router-dom"
import Profile from "./profile"
import Deneme from "./navbars"



function App(){
      return (
            <Switch>
                  <Route path="/blog">
                        <Navbar background="bg-dark"/>
                        <Blog />
                        <Footer/>
                  </Route>
                  <Route path="/Hakkımda">
                        <Navbar background="bg-dark"/>
                        <div className="py-5">
                              <Profile/>
                        </div>

                        <Footer/>
                  </Route>

                  <Route path="/deneme">
                        <Deneme />
                  </Route>

                  <Route path="/">
                        <Hello name="Omer Bayramcavus" dis="Interactive resume"/>  
                        <Footer />

                  </Route>
            </Switch>
      )
}
export default App