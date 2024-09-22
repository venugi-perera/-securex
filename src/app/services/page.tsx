import Breadcrumb from "@/components/Common/Breadcrumb";
import featuresData from "@/components/Features/featuresData";
import SingleFeature from "@/components/Features/SingleFeature";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb pageName="Services" description="" />
      <div className="mb-12 grid grid-cols-1 gap-x-6 gap-y-14 pl-20 md:grid-cols-2 lg:grid-cols-3 ">
        {featuresData.map((feature) => (
          <SingleFeature key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  );
};

export default page;
