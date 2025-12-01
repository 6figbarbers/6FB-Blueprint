"use client";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-transparent pt-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/6FB by Matty Cutz.png"
              alt="6FB by Matty Cutz Logo"
              width={300}
              height={120}
              className="h-20 sm:h-24 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};