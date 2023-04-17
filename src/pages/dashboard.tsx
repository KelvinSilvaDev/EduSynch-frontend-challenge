import { Sidebar } from "@/components/Sidebar";
import { Balance } from "@/components/Dashboard/Balance";
import { Variation } from "@/components/Dashboard/Variation";
import { Wallet } from "@/components/Dashboard/Wallet";

const Dashboard = () => {
  return (
    <section className="flex">
      <aside>
        <Sidebar />
      </aside>
      <main className=" px-8 py-20 flex w-full flex-col items-center align-middle justify-start bg-[#F9F9F9] h-[83vh]">
        <div className="w-full flex py-8 gap-4">
          <Balance />
          <Variation />
        </div>
        <Wallet/>
      </main>
    </section>
  );
};

export default Dashboard;
