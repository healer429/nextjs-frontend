import React from "react";
import SingleFAQ from "./SingleFAQ";

function FAQ() {
  return (
    <div className="content faq">
      <SingleFAQ
        count="1"
        q="Is there a fee for this service?"
        a="This service is intended to make filing for your EIN fast, secure and electronic. It includes a dedicated specialist who reviews and ensures your documentation is complete and accurate, as well as manages the submission to the IRS and any communication with the IRS on your behalf. There is a one-time fee that covers this service."
      />
      <SingleFAQ
        count="2"
        q="What is an EIN?"
        a="An Employer Identification Number or EIN is a Tax Identification Number for businesses that is nine digits long and assigned by the IRS. They use the number to identify which taxpayers will need to require business tax forms as well as personal."
      />
      <SingleFAQ
        count="3"
        q="I already have an EIN. How do I find it?"
        a="If you have an EIN but lost, misplaced, or cannot remember it, you can contact the IRS to search their database for it. The number for the Business & Specialty Tax Line is 800-829-4933 and is available Monday-Friday, from 7am to 7pm. An assistor will ask you identifying questions to ensure security, and then provide your number to you over the telephone."
      />
      <SingleFAQ
        count="4"
        q="What is an EIN used for?"
        a="An EIN allows businesses to file tax returns, apply for a business bank account, apply for a business loan, get certain permits or licenses, as well as reporting payroll, FICA, Social Security, and Medicare taxes.  Companies like Amazon and Etsy will often require sellers to register with an EIN."
      />
      <SingleFAQ
        count="5"
        q="What's the difference between a Tax ID and an EIN?"
        a="There is no difference between an EIN and a Tax ID Number. However, there is another number referred to as a State Tax ID Number which should not be confused with a Federal Tax ID Number or Employer Identification Number (EIN)."
      />
      <SingleFAQ
        count="6"
        q="Do I need an EIN to open a business bank account?"
        a="Most banks will require an EIN or Tax ID to open a business bank account. Some banks may allow Sole Proprietors to open a business bank account by utilizing their Social Security Number instead. But even then, some banks may require an EIN instead."
      />
      <SingleFAQ
        count="7"
        q="Why do I need an EIN?"
        a="There are several reasons why you might need an EIN (Tax ID) Number, but the most common include: starting a new business, opening a bank account, hiring of 1 or more employees, operating a new LLC, forming an Estate after a death, filing federal income taxes, establishing a Trust account, organizing a Non-Profit, getting a business license and other IRS compliance reasons."
      />
      <SingleFAQ
        count="8"
        q="Does an EIN expire?"
        a="A Tax ID doesn’t have an expiration date. It’s good for the life of the entity or person in the case of a Sole Proprietor. Please note that Sole Proprietors can only be issued one Tax ID Number from the IRS."
      />
    </div>
  );
}

export default FAQ;
