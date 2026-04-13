// import Hero from "./components/Hero"
// import Parent from "./components/Parent"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import { useState } from "react"
import CleanUp from "./hooks/CleanUp"
import Forms from "./components/Forms"
import { Routes, Route } from 'react-router-dom'
import APIs from "./components/APIs"
import Loader from "./components/Loader"
import HookForm from "./hooks/HookForm"
import BlogInformation from "./components/BlogInformation"
import Blogs from "./components/Blogs"
import RefHook from "./hooks/RefHook"
import MemoHook from "./hooks/MemoHook"
import CallbackHook from "./hooks/CallbackHook"
import ShowApiResponse from "./components/ShowApiResponse"
import { context } from "./components/ContextData"
import UserDetailForm from "./components/UserDetailForm"
import { FormProvider } from "./components/FormContextData"
import UserLocationDetail from "./components/UserLocationDetail"


function App() { 

  interface User {
    id: number | null,
    name: string | null,
    email: string | null,
    age: number | null
  }

  interface formUser {
    name : string,
    email : string,
    password :string,
    county : string,
    state : string,
    city : string
  }


  let userObj: User[] = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@company.com',
      age: 44
    },
    {
      id: 2,
      name: 'korel',
      email: 'korel@company.com', 
      age: 33
    },
    {
      id: 3,
      name: 'john',
      email: 'john@company.com',
      age: 78
    },
    {
      id: 4,
      name: 'dolor',
      email: 'dolor@company.com',
      age: 22
    },
    {
      id: 5,
      name: 'virol',
      email: 'virol@company.com',
      age: 72
    }
  ]
  const [item, setItem] = useState(userObj)
  const [isTrue, setIsTrue] = useState(true)

  function deleteHandle(id: number | null): void {
    console.log("hit", id)
    let updatedUsers = item.filter(items => items.id !== id);
    setItem(updatedUsers);
  }
  function unMountingComponent() {
    setIsTrue(false);
  }

 
  return (
    <>
    <FormProvider>
      <Navbar onClickUnmount={unMountingComponent} />
      <Routes>
        <Route path="/" element={<div className="flex justify-around mt-3 flex-wrap gap-6">
          {isTrue && item?.map((users, index) => <Cards
            key={index}
            id={users.id}
            name={users.name}
            email={users.email}
            age={users.age}
            onDelete={deleteHandle}
          />
          )}
        </div>} />
        <Route path="/form" element={<Forms />} />
        <Route path="/apis" element={<APIs/>}/>
        <Route path="/loader" element={<Loader/>}/>
        <Route path="/form-hook" element={<HookForm/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/:bid" element={<BlogInformation/>}/>
        <Route path="/ref" element={<RefHook/>}/>
        <Route path="/memo" element={<MemoHook/>}/>
        <Route path="/call" element={<CallbackHook/>}/>
        <Route path="/show" element ={<ShowApiResponse/>}/>
        <Route path="/user-detail" element={<UserDetailForm/>}/>
        <Route path="/user-location" element={<UserLocationDetail/>}/>
      </Routes>


      {/* <CleanUp/> */}


      {/* <Footer /> */}
    </FormProvider>
    </>
  )
}

export default App
