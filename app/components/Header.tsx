import Link from "next/link";

export default function Header(){
    return(
        <div className="header-wrapper">
            <h2 className="z-10 items-center justify-between font-sans text-lg">You talk a lot for a Washing Machine...</h2>
        <nav className="flex justify-between bg-gray-400 items-baseline">
          <div className="ml-4">Logo</div>
          <div className="flex justify-between font-medium p-4">
  <div className="mr-4 cursor-pointer hover:text-gray-600">
    <Link href="/Login">Sign in</Link>
  </div>
  <div className="cursor-pointer hover:text-gray-600">
    <Link href="/Signup">Sign Up</Link>
  </div>
</div>
</nav>
</div>
    );
}