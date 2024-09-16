import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: 'Kessiah', lastName:'Providence', email:'kessiahp91@gmail.com'};

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
      banks={[]}
      />
    </section>
  );
};

export default Home;
