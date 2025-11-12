import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className='text-xs text-center pt-20 pb-10 text-gray-500'>&copy; {new Date().getFullYear()} Russu Iulia. All rights reserved.</p>
      </div>
    </footer>
  );
}
