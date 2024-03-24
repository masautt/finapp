import React from "react";
import TitleBar from "./TitleBar";
import TransactionsTable from "./TransactionsTable";
import CategoryFilters from "./CategoryFilters";
import RecipientFilters from "./RecipientFilters";
import NecessityFilters from "./NecessityFilters";
import BusinessFilters from "./BusinessFilters";
import Content6 from "./ReimburseFilters";
import AmountFilters from "./AmountFilters";
import SubcategoryFilters from "./SubcategoryFilters";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layout text-2xl text-white">
          <div className="titlebar centered">
            <TitleBar />
          </div>
          <div className="transactionsTable centered">
            <TransactionsTable />
          </div>
          <div className="categoryFilters centered">
            <CategoryFilters />
          </div>

          <div className="recipientFilters centered">
            <RecipientFilters />
          </div>
          <div className="necessityFilters centered">
            <NecessityFilters />
          </div>
          <div className="businessFilters centered">
            <BusinessFilters />
          </div>
          <div className="reimburseFilters centered">
            <Content6 />
          </div>

          <div className="amountFitlers centered">
            <AmountFilters />
          </div>
          <div className="subcategoryFilters centered">
            <SubcategoryFilters />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
