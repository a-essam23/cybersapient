"use client";
import Accordion from "@components/accordion";
import FaqsButton from "./faqs-button";
import FaqsCard from "./faqs-card";

const qas = [
  {
    question: "How can I add my cards on CRED?",
    answer:
      "CRED automatically detects credit cards linked to your account. If your cards are not detected, just tap the 'credit cards' icon, click 'add a card', fill in the details, and you're good to go.",
  },
  {
    question: "Can I manage all my credit cards on CRED?",
    answer:
      "Yes. CRED supports cards from major Indian banks like HDFC, ICICI, SBI, Axis, Kotak, and AMEX. Track spends, monitor EMIs, spot hidden charges, and keep an eye on reward points—all in one place. You also get timely bill payment reminders for your cards.",
  },
  {
    question: "What is CRED Protect?",
    answer:
      "CRED Protect helps you manage your credit cards by automatically detecting bills and statements. It also alerts you to hidden charges, tracks EMIs, sends smart bill reminders, and provides spending insights. This ensures you stay updated on your card activity with all essential information in one place.",
  },
  {
    question: "How do I pay my credit card bills?",
    answer:
      "To pay your credit card bills, select the card and choose from available payment options like UPI, net banking, or debit cards. CRED uses the Bharat Bill Payment System (BBPS) platform for secure and instant bill payments for the supported banks.",
  },
  {
    question: "How does CRED keep my data secure?",
    answer:
      "CRED uses encryption and secure servers to protect user data. Security measures include two-factor authentication and regular system audits to ensure data privacy and protection.",
  },
  {
    question: "What is Know Your Perks?",
    answer:
      "Know Your Perks gives you a detailed breakdown of your card's benefits—reward points, exclusive offers, and fee structures—along with all the terms and conditions you need to know.",
  },
  {
    question: "Why can't I see perks for my card?",
    answer:
      "We're rolling this feature out in phases to ensure accuracy and reliability. If your card isn't supported yet, sit tight—we're working on bringing it to you soon.",
  },
];

const FaqsSection = () => {
  return (
    <Accordion
      style={{
        background:
          "radial-gradient(63.85% 195.77% at 50.93% 100%, rgb(17, 17, 17) 0%, rgb(0, 0, 0) 100%)",
      }}
      className={(isOpen) =>
        `mt-[90px] border-b border-white/40 md:mt-0 w-full flex flex-col text-black/70 ${
          isOpen ? "gap-10" : ""
        }`
      }
      trigger={FaqsButton}
    >
      <div className="text-center gap-[60px] box-border flex flex-col p-[90px_50px] md:p-[150px_100px]">
        {qas.map((qa) => (
          <FaqsCard
            answer={qa.answer}
            question={qa.question}
            key={qa.question}
          />
        ))}
      </div>
    </Accordion>
  );
};

export default FaqsSection;
