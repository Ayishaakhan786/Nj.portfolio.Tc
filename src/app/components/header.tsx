import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-pink-100">
      <ul className="flex flex-col sm:flex-row place-content-center sm:space-x-6 space-y-4 sm:space-y-0">
        <li className="text-black text-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="text-black text-lg">
          <Link href="../portfolio">Portfolio</Link>
        </li>
        <li className="text-black text-lg">
          <Link href="../about">About</Link>
        </li>
        <li className="text-black text-lg">
          <Link href="../contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
