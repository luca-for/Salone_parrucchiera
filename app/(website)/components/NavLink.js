"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavLink({ href, isActive = false, children, ...props }) {
    const router = useRouter();
    return (
        <Link
            href={href}
            prefetch={false}
            onMouseEnter={() => router.prefetch(href)}
            aria-current={isActive ? "page" : undefined}
            {...props}
        >
            {children}
        </Link>
    );
}