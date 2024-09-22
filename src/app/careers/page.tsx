import CareerPage from "@/components/Career/Career";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactForm from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Careers" description="" />
      <CareerPage />
    </>
  );
};

export default ContactPage;
