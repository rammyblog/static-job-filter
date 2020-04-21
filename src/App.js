// App.js
import React from "react"
import InputBox from "./components/filter/InputBox"
import { JobProvider } from "./context/JobContext"
import CardList from "./components/card/CardList"
import Header from "./components/header/Header"

function App() {
  return (
    <JobProvider>
      <div className="bg-cyan-grayBg ">
        <Header />
        <div className="container mx-auto bg-cyan-grayBg px-4 pb-8 sm:px-4 lg:px-0 md:px-0">
          <InputBox />
          <CardList />
        </div>
      </div>
    </JobProvider>
  )
}
export default App
