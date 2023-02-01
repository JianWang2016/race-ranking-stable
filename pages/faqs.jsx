import Link from "next/link";

import { Container } from "@/components/Container";

const faqs = [
  [
    {
      question: "Question 1?",
      answer:
        "dolor sit amet consectetur adipisicing elit. Quidem aliquam provident sequi hic recusandae minus saepe expedita reprehenderit assumenda similique libero eveniet at voluptatem enim, molestiae voluptatibus magni ipsam perspiciatis."
    },
    {
      question: "Question 2?",
      answer:
       "ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam repudiandae quas est cumque deleniti nam mollitia nihil ducimus tenetur esse fuga, distinctio adipisci repellendus dolor expedita hic repellat? Similique."
    },
    {
      question: "Question 3?",
      answer:
        "ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem dicta harum ratione, deleniti, eaque dolor ipsam molestiae sed perferendis natus commodi repudiandae labore enim modi ab amet tempora repellendus."
    },
  ],
  [
    {
      question: "Question 4",
      answer:
        "ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vel molestiae delectus eveniet necessitatibus sapiente, modi tempore optio nihil porro, perspiciatis esse quibusdam et! Adipisci sunt tenetur sed ut incidunt"
    },
    {
      question: "Question 5",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias cupiditate totam, impedit, nemo ipsa odio doloremque molestiae vel aut quasi ea necessitatibus. Perferendis, facere. Repudiandae ad ab omnis obcaecati!"
    },

  ],
];

function Faqs() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faqs-title"
          className="text-3xl font-medium tracking-tight text-gray-900"
        >
          Frequently asked questions
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          If you have anything else you want to ask,{" "}
          <Link
            href="/contact"
            className="text-gray-900 underline"
          >
            reach out to us
          </Link>
          .
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        {faqs.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="space-y-10">
              {column.map((faq, faqIndex) => (
                <li key={faqIndex}>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Faqs;
