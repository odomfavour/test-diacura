import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import GenericLayouts from "../layouts/GenericLayouts";

const Faq = () => {
  return (
    <div>
      <GenericLayouts>
        <main className="lg:mt-[5.23rem] lg:mb-[4.06rem]">
          <FrequentlyAskedQuestions align={"text-left"} />
        </main>
      </GenericLayouts>
    </div>
  );
};

export default Faq;
