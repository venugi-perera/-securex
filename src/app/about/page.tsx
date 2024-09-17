"use client";
import Image from "next/image";
import Link from "next/link";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Company" description="" />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <p className="py-3">WHO WE ARE </p>
            <p className="py-3">
              SECUREX (PVT) LTD is founded by a retired senior commissioned
              officer of Sri Lanka Navy. Securex Lanka Management includes a
              Senior Navy Officer as Security Consultant and a Retired District
              Judge as Legal Consultant.
            </p>
            <p className="py-3">
              Securex Lanka has been providing exceptional, reliable and
              professional security services to business organizations and
              residents throughout the country. As one of the most respected
              security service providers, we pride ourselves on maintaining a
              close relationship with our clients. We have always had a hands-on
              management philosophy that has contributed to our continuous
              growth.
            </p>
            <p className="py-3">
              Our well trained, professional security officers are dedicated to
              provide a first class security service to the expectations of our
              valued clients.
            </p>
            <p className="py-3">
              We have earned a high reputation with our business customers and
              with all levels of law enforcement agencies by working in close
              liaison and cooperation.
            </p>
            <p className="py-3">
              In Sri Lanka there is an acute need for security, safety and
              protection which you will find it exclusively from Securex Lanka-
              which is available at your disposal.
            </p>
            <p className="py-3">
              And we are proud to be a member of SRI LANKA SECURITY SERVICE
              PROVIDERS’ ASSOCIATION (SLASSPA) & INDUTRIAL SECURITY FOUNDATION
              in Sri Lanka.
            </p>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <Link href="/" className={`header-logo block w-full py-8`}>
              <Image
                src="/images/logo/logo12.png"
                alt="logo"
                className="w-full dark:hidden"
                width={140}
                height={0}
              />
              <Image
                src="/images/logo/logo12.png"
                alt="logo"
                className="hidden w-full dark:block"
                width={140}
                height={0}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
