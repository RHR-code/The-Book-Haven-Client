import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-20  flex flex-col gap-10  p-10 border-t-2 border-gray-300 ">
      <a className="font-black text-xl md:text-3xl text-primary">Books Haven</a>
      <div className="footer sm:footer-horizontal  text-base-content">
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a className="link link-hover">bookhaven@gmail.com</a>
          <a className="link link-hover">+08801234567891</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h2 className="max-w-50 font-bold text-lg">
            Connect with us through our socials
          </h2>
          <div className="flex text-2xl items-center gap-5 mt-5">
            <a data-tooltip-id="my-tooltip" data-tooltip-content={"Facebook"}>
              <FaFacebook />
            </a>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={"Twitter/X"}>
              <FaXTwitter />
            </a>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={"Youtube"}>
              <FaYoutube />
            </a>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={"Instagram"}>
              <FaInstagram />
            </a>
          </div>
          <Tooltip place="top-end" id="my-tooltip" />
        </nav>
      </div>
      <aside className="text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by RHR
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
