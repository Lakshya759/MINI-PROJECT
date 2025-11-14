import "./Navbar.css"
const navbar = () => {

  return (
    <>
     <div className="w-full h-20 bg-transparent  flex justify-between items-center fixed border">
      <div className=" bg-transparent text-2xl pl-7">CampusQuery</div>
      <div className="bg-transparent flex gap-15 items-center p-3 pr-7 text-l">
        <a href="">SignUp</a>
        <a href="">Login</a>
      </div>
     </div>

    </>
   
  )
}

export default navbar