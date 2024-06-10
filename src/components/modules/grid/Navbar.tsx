import React from 'react'

interface NavbarProps{
    navbar: string;
    setNavbar: (navbar: string) => void;
}

const Navbar = ({ navbar, setNavbar }: NavbarProps) => {
  return (
    <div className='flex gap-6 text-zinc-600 text-sm mb-6'>
        <div onClick={() => setNavbar("")} className={`${navbar == "" ? "text-zinc-200" : "cursor-pointer"}`}>All</div>
        <div onClick={() => setNavbar("projetos")} className={`${navbar == "projetos" ? "text-zinc-200" : "cursor-pointer"}`}>Projetos</div>
        <div onClick={() => setNavbar("experiencias")} className={`${navbar == "experiencias" ? "text-zinc-200" : "cursor-pointer"}`}>Experiências</div>
        <div onClick={() => setNavbar("certificados")} className={`${navbar == "certificados" ? "text-zinc-200" : "cursor-pointer"}`}>Certificados</div>
    </div>
  )
}

export default Navbar