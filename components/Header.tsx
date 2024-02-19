import Link from "next/link"
import Image from "next/image"
import "./Header.css"
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header className="header">
        <Link href="/" className="flex items-center gap-3">
            <div className="header_logo_img">
                <Image 
                    src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                    alt="logo"
                    className="header_logo_img_Image"
                    height={50}
                    width={50}
                />
            </div>
            <h1 className="font-bold text-2xl">Dropbox</h1>
        </Link>


        <div className="header_right">
          <ThemeToggler />

          <UserButton afterSignOutUrl="/"/>
          <SignedOut>
            {/* com o mode=modal aparece perfeitamente a caixa para fazer sign in após clicar neste botão */}
            <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
          </SignedOut>        
          
          </div>
    </header>
  )
}

export default Header