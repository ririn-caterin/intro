"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link
        href="/form/controlled"
        className="text-blue-700 hover:text-blue-800"
      >
        To Controlled Form
      </Link>
      <Link
        href="/form/uncontrolled"
        className="text-blue-700 hover:text-blue-800"
      >
        To Uncontrolled Form
      </Link>
    </div>
  );
}
