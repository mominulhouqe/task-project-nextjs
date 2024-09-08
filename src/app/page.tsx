import EnginnerTeam from "@/components/ui/EnginnerTeam";
import ProductTeam from "@/components/ui/ProductTeam";
import Quebly from "@/components/ui/Quebly";

const HomePage = async () => {
  return (
    <div className="md:w-[960px] mx-auto">
      <Quebly />
      <ProductTeam />
      <EnginnerTeam />
    </div>
  );
};

export default HomePage;
