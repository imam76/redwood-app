import Navbar from "src/components/Navbar/Navbar"

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default NavbarLayout
