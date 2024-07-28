import Image from "next/image";
import Link from "next/link";
import Book from "./components/book";
import Header from "./components/Header";

export default function Home() {
  return (
      <div className="home flex-col">
    <Header/>
    <Book/>
      </div>

  );
}
