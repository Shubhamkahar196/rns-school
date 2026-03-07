import Navbar from "@/component/Navbar";
import Facilities from "@/component/Facilities";
import InquiryForm from "@/component/InquiryForm";
import Hero from "@/component/Hero";
import About from "./about/page";

export default function Home() {
  return (
      <div>
{/* <Navbar/> */}
<Hero/>
<About/>
<Facilities/>
{/* <InquiryForm/> */}

      </div>
    
  );
}
