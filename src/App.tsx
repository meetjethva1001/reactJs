// import Hero from "./components/Hero"
// import Parent from "./components/Parent"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  interface User {
    name: string | null,
    email: string | null,
    age: number | null
  }
  let userObj: User[] = [
    {
      name: 'Alice',
      email: 'alice@company.com',
      age: 44
    },
    {
      name: 'korel',
      email: 'korel@company.com',
      age: 33
    },
    {
      name: 'john',
      email: 'john@company.com',
      age: 78
    },
    {
      name: 'dolor',
      email: 'dolor@company.com',
      age: 22
    },
     {
      name: 'virol',
      email: 'virol@company.com',
      age: 72
    }
  ]
  return (
    <>
      <Navbar />
      <div className="flex justify-around mt-3 flex-wrap gap-6">
        {userObj?.map((users, index) => <Cards
          key={index}
          name={users.name}
          email={users.email}
          age={users.age} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
