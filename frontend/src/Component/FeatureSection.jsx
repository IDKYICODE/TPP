import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import middleImage from "../assets/middle.png";

const features = [
  { title: "Eat Healthy Food", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon1 },
  { title: "Pesticide Free", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon2 },
  { title: "Sweet Exotic Food", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon3 },
  { title: "Order Flexibility", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon4 },
  { title: "Variety & Selection", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon5 },
  { title: "Livestock Product", description: "Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa", icon: icon6 },
];

const FeatureSection = () => {
  return (
    <div className="items-center px-50 py-10 ">
      <h2 className="text-2xl font-bold mb-6">What makes us different?</h2>
      <p className="text-gray-600 mb-8">A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
      <div className="flex flex-col lg:flex-row items-center justify-between space-x-10">
        <div className="flex flex-col space-y-6 w-1/3">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={feature.icon} alt={feature.title} />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={middleImage} alt="Feature Image" className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col space-y-6 w-1/3">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={feature.icon} alt={feature.title} />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;