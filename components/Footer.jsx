import Link from "next/link";
import React from "react";
import Discord from "./icons/discord";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Linkedin from "./icons/linkedin";
import Medium from "./icons/medium";
import Telegram from "./icons/telegram";
import Twitter from "./icons/twitter";

export default function Footer() {
  return (
    <div className="max-w-4xl mx-auto py-10 lg:py-24 px-4">
      <div>
        <h6 className="text-center">
          Visit{" "}
          <span className="font-bold cursor-pointer">
            <Link href="https://nearbalkans.org/" target="__blank">
              nearbalkans.org
            </Link>
          </span>{" "}
          and make sure to follow us on our social and community channels!
        </h6>
        <div class="lg:flex pt-10 w-full lg:max-w-xl lg:mx-auto">
          <div>
            <span>
              <Link href="https://nearbalkans.org" target="__blank">
                <svg
                  width={120}
                  height={38}
                  fill="CurrentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="text-center mx-auto"
                >
                  <path fill="url(#nearLogo_svg__a)" d="M.727 0h119v38h-119z" />
                  <defs>
                    <pattern
                      id="nearLogo_svg__a"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#nearLogo_svg__b"
                        transform="matrix(.00061 0 0 .00192 -.162 -1.573)"
                      />
                    </pattern>
                    <image
                      id="nearLogo_svg__b"
                      width="{2160}"
                      height="{2160}"
                      xlinkhref="/images/logo.png"
                    />
                  </defs>
                </svg>
              </Link>
            </span>
          </div>
          <div class="border-gray-200 border-solid border-r-2 mx-16 hidden lg:block"></div>
          <div class="flex items-center lg:ml-auto justify-between">
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link href="https://twitter.com/NEARbalkan" target="__blank">
                <Twitter />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link
                href="https://discord.com/invite/NgSYSmJXg9"
                target="__blank"
              >
                <Discord />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link href="https://t.me/nearbalkanshub" target="__blank">
                <Telegram />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link
                href="https://www.facebook.com/nearbalkans"
                target="__blank"
              >
                <Facebook />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link
                href="https://www.linkedin.com/company/nearbalkans"
                target="__blank"
              >
                <Linkedin />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link
                href="https://www.instagram.com/nearbalkans/"
                target="__blank"
              >
                <Instagram />
              </Link>
            </div>
            <div class="lg:px-3 px-2 mt-10 lg:mt-0">
              <Link href="https://medium.com/@nearbalkans" target="__blank">
                <Medium />
              </Link>
            </div>
          </div>
        </div>
        <div class="lg:flex justify-center gap-10 pt-10">
          <div>
            <Link href="/" class="text-lg cursor-pointer text-center ">
              <p>NEAR Balkans 2022</p>
            </Link>
          </div>
          <div>
            <Link
              href="mailto: info@nearbalkans.org"
              class="text-lg cursor-pointer text-center "
            >
              <p>info@nearbalkans.org</p>
            </Link>
          </div>
          <div>
            <Link
              href="https://dacade.org/privacy-policy/"
              class="text-lg cursor-pointer text-center "
            >
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div>
            <Link
              href="https://dacade.org/privacy-policy/"
              class="text-lg cursor-pointer text-center "
            >
              <p>Cookie Policy</p>
            </Link>
          </div>
          <div>
            <Link href="/" class="text-lg cursor-pointer text-center ">
              <p>Terms & Conditions</p>
            </Link>
          </div>
        </div>
        <h6 class="pt-8 text-center">
          NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro,
          North
          <br /> Macedonia, Serbia, and Slovenia
        </h6>
      </div>
    </div>
  );
}
