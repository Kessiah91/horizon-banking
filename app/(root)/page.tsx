import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2310.67}
          />
        </header>

        recent transactions
      </div>

      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.13}, {currentBalance: 475.14}]}
      />
    </section>
  );
};

export default Home;
