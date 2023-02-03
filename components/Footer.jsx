import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TextField } from "@/components/Fields";
import { Logomark } from "@/components/Logo";
import { NavLinkExtra } from "@/components/NavLinks";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold text-gray-600">
                  Marathon Ranking
                </p>
                <p className="mt-1 text-sm">
                  Run a marathon and change your life!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <div className="flex w-full justify-center md:w-auto">
            <nav className="flex gap-8">
              <NavLinkExtra />
            </nav>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
