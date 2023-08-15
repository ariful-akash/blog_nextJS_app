"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  let path = usePathname();
  return (
    <nav>
        <ul>
            <li><Link href={'/'} className={path=='/'?'active-link':'pending-link'}>Home</Link></li>
            <li><Link href={'/blog'} className={path=='/blog'?'active-link':'pending-link'}>Blog</Link></li>
        </ul>
    </nav>
  )
}
