
import Image from "next/image";
import Link from "next/link";
import ServicesCard from "../ServicesCard";
import Html from '../../public/html.svg'
import Mobile from '../../public/mobile.svg'
import Backend from "../../public/backend.svg"
import Responsive from '../../public/responsive.svg'
import Scalable from '../../public/scalable.svg'
import UserFriendly from '../../public/userFriendly.svg'


const servicesRoutes = [
  {
    src: Html,
    title: "Frontend Development",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  {
    src: Mobile,
    title: "Mobile Development",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  {
    src: Backend,
    title: "Backend Development",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  {
    src: Responsive,
    title: "Responsive Layouts",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  {
    src: Scalable,
    title: "Scalable Applications",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  {
    src: UserFriendly,
    title: "User Friendly",
    text:"I build websites with top-notch technologies which can be accessed across all platforms"
  },
  
  
]
const Services = () => {
  return (
    <section className="px-20 h-[80vh] flex flex-col justify-center mt-20">

      <div className="text-center mb-12">
        <p className="text-4xl font-semibold text-[#F9FAFB]">Services</p>
      </div>
     
     <div className=" pt-5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
      {servicesRoutes.map((route, index) => {
          return (
            <div key={index}>
          <ServicesCard
            src={route.src}
            text={route.text}
            title={route.title}
          />
        </div>
          );
        })}
        
       </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Services;