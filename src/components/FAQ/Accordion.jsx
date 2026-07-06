import Accordion from "../Common/Accordion"; // adjust the path if needed

<div className="faq-list">
  {faqs.map((faq) => (
    <Accordion
      key={faq.id}
      title={faq.question}
      content={faq.answer}
      isOpen={active === faq.id}
      onToggle={() => toggle(faq.id)}
    />
  ))}
</div>