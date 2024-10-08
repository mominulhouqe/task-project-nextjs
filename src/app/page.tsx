import EnginnerTeam from "@/components/ui/EnginnerTeam";
import ProductTeam from "@/components/ui/ProductTeam";
import Quebly from "@/components/ui/Quebly";
import SignUpForm from "@/components/ui/SignUp";
import Testmonial from "@/components/ui/Testmonial";

const HomePage = async () => {
  return (
   <div>
     <div className="md:w-[960px] mx-auto">
      <Quebly />
      <ProductTeam />
      <EnginnerTeam />
    </div>
      <Testmonial />
      <SignUpForm />
    
   </div>
  );
};

export default HomePage;
