"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Logo } from "@/components/icons/icons";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { user_login } from "./api/soteria/user/user_api";
import { LandingNavbar } from "@/components/navbar/landingnavbar";
//import helloworld from "./api/mongo/helloworld";

export default function Home() {
 
  return (
    <div>
      <LandingNavbar />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Welcome To&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>ZoltoMoney&nbsp;</h1>
          <br />
          <h1 className={title()}>Hub and Analytics.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            //isExternal
            href={"/login"}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow"
            })}
          >
            <Logo size={36} />
            Login
          </Link>
          <Link
            isExternal="false"
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={"/login"}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
        <div />
      </section>
    </div>
  );
}
