import Link from "next/link";

export default function Header() {
    return (
        <div className="header-wrapper  shadow-lg">
            <h2 className="text-center text-black text-2xl font-bold mb-4">
                You talk a lot for a Washing Machine...
            </h2>
            <nav className="flex justify-between items-center">
                <div className="text-black text-lg font-semibold ml-4">Logo</div>
                <div className="flex space-x-6 font-medium">
                    <div className="cursor-pointer text-black  transition duration-300">
                        <Link href="/Login">Sign in</Link>
                    </div>
                    <div className="cursor-pointer text-black  transition duration-300">
                        <Link href="/Signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
