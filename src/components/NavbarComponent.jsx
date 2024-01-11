import { Navbar,NavbarBrand } from "reactstrap"
export const NavbarComponent=()=>{
    return (
        <>
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        style={{
          height: 40,
          width: 40
        }}
      />
       Your favorite actors here!
    </NavbarBrand>
  </Navbar>
</>
    )

}