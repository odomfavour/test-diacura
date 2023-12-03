import PropTypes from "prop-types";
import singlePostImage from "../../../assets/images/education/single-post.svg";
import author from "../../../assets/images/education/author.svg";
import { FaChevronLeft } from "react-icons/fa";

const post = {
  id: 1,
  title: "Get Help with New Nutrition Resources",
  intro: `JDRF joined thousands within the diabetes community at the American Diabetes Association’s (ADA) 83rd Scientific Sessions, where hundreds of experts presented significant advancements in diabetes research that may prove to be pivotal in improving lives and finding cures for T1D.`,
  description: `Held June 23-26 in San Diego, the ADA Scientific Sessions is one of the most prominent opportunities for researchers, healthcare professionals, and industry members to learn about the latest in diabetes research, treatment, and care. JDRF-supported research has been highlighted at the annual event since JDRF started funding research nearly 50 years ago. This year, scientists presented 140+ studies—with JDRF-funding at present or in the past—to encompass breakthrough clinical trials and significant research studies that are paving the way to novel treatments and technologies for T1D.`,
  subHeading: `The ADA Standards of Care for Diabetes has been updated to include Tzield™ (teplizumab-mzwv) to delay T1D in at-risk individuals. Read more about JDRF’s work—funding discovery research to clinical development to work with regulators—that brought Tzield to FDA approval.`,
  footnote: `JDRF joined thousands within the diabetes community at the American Diabetes Association’s (ADA) 83rd Scientific Sessions, where hundreds of experts presented significant advancements in diabetes research that may prove to be pivotal in improving lives and finding cures for T1D.`,
  image: singlePostImage,
  author: {
    name: "Dr Eaxi Agu",
    profilePicture: author,
  },
  tags: ["Clinical trials", "Conference", "Research", "Research News"],
  datePublished: "5 June 2023",
  length: 2,
};

const EducationSinglePost = ({setSinglePostPage }) => {
  return (
    <article className=" bg-white px-[1rem] py-[1.5rem] lg:pt-[2.75rem] lg:pb-[1.5rem] lg:px-[2.75rem]">
      {/* Back button */}
      <button
        onClick={() => setSinglePostPage(false)}
        className="flex items-center gap-[0.5rem] mb-[0.75rem]"
      >
        <FaChevronLeft /> <span className="text-[1.125rem]">Back</span>
      </button>

      {/* Single post container  */}
      <div>
        {/* Single post  */}
        <header>
          <div>
            <h1 className="text-[#107BC0] text-[1.25rem] lg:text-[2.5rem] font-bold leading-normal mb-[0.75rem]">
              {post.title}
            </h1>
            <div className="md:hidden flex items-center gap-[0.5rem] mb-[0.75rem]">
              <img src={post.author.profilePicture} alt="Author" />
              <p className="text-[0.5rem] leading-normal text-[#191919]">
                Written by {post.author.name}
              </p>
            </div>
            <p className="text-[0.875rem] font-semibold leading-normal flex flex-col sm:flex-row sm:items-center gap-[1rem] md:gap-[1.38rem]">
              <span className="text-[#191919]">
                Published {post.datePublished}
              </span>{" "}
              <span className="text-[#0D67A0]">{post.tags.join(", ")}</span>
            </p>
          </div>

          {/* Single post image */}
          <div className="my-[1.2rem] md:my-[2rem] bg-[#EDF8FF] md:bg-transparent p-[1rem] md:p-0 rounded-[0.5rem]">
            <img
              src={post.image}
              alt="Article image"
              className="w-full h-full"
            />
          </div>
        </header>

        {/* Single post main description */}
        <main>
          <div className="text-[#666]">
            <p className="mb-[1.3rem]">{post.intro}</p>
            <p>{post.description}</p>
          </div>
          <div className="text-center my-[1.3rem] md:my-[1.7rem]">
            <h2 className="text-[1.125rem] lgtext-[1.25rem] font-semibold leading-normal text-[#107BC0]">
              {post.subHeading}
            </h2>
          </div>
        </main>
        <footer>
          <p className="text-[#666]">{post.footnote}</p>
        </footer>
      </div>
    </article>
  );
};

EducationSinglePost.propTypes = {
  setSinglePostPage: PropTypes.func,
};
export default EducationSinglePost;
