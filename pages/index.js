import Products from "../component/Products";
import HowItWorks from "../component/HowItWorks";
import ApplicationProcess from "../component/ApplicationProcess";
import FAQ from "../component/FAQ";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <h1>Apply for Your Employer Identification Number (EIN)</h1>
          <hr />
          <p>
            An Employer Identification Numbers (EIN) or Tax Identification
            Number (Tax ID, or TIN) is required for those who want to form a
            business, create a Trust or an Estate in the United States.
          </p>
          <p>
            Select your entity and fill out the online Tax ID application to
            obtain an EIN number in 2 Hours to 3 business days depending on the
            delivery option you choose.
          </p>
          <Products />
          <p className="text-under-products">
            Learn more about legal entities if you are not sure which type of
            legal structure you should choose
          </p>
        </div>
        <div className="blue-line">
          <h4>Start the EIN Filing Process</h4>
        </div>
        <HowItWorks />
        <div className="blue-line">
          <h4>EIN Application Process Explained</h4>
        </div>
        <ApplicationProcess />
        <div className="blue-line">
          <h4>Frequently Asked Questions About EINs</h4>
        </div>
        <FAQ />
      </div>
    </>
  );
}
