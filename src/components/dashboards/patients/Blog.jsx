import trending1 from "../../../assets/images/education/trending-1.svg";
import trending2 from "../../../assets/images/education/trending-2.svg";
import trending3 from "../../../assets/images/education/trending-3.svg";
import trending4 from "../../../assets/images/education/trending-4.svg";
import recent1 from "../../../assets/images/education/recent-article-1.svg";
import recent2 from "../../../assets/images/education/recent-article-2.svg";
import recent3 from "../../../assets/images/education/recent-article-3.svg";
import recent4 from "../../../assets/images/education/recent-article-4.svg";
import recent5 from "../../../assets/images/education/recent-article-5.svg";
import recent6 from "../../../assets/images/education/recent-article-6.svg";
import author from "../../../assets/images/education/author.svg";
import PropTypes from "prop-types";

const trendingPosts = [
  {
    id: 1,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full`,
    image: trending1,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "",
  },
  {
    id: 2,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full`,
    image: trending2,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "",
  },
  {
    id: 3,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full`,
    image: trending3,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "",
  },
  {
    id: 4,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full`,
    image: trending4,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "",
  },
];

const recentArticles = [
  {
    id: 1,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent1,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
  {
    id: 2,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent2,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
  {
    id: 3,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent3,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
  {
    id: 4,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent4,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
  {
    id: 5,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent5,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
  {
    id: 6,
    title: "Get Help with New Nutrition Resources",
    description: `Get help with new nutrition even though 2022 is in full swing, keep your weight loss goals and healthy eating resolutions...`,
    image: recent6,
    author: {
      name: "Dr Eaxi Agu",
      profilePicture: author,
    },
    tags: [],
    datePublished: "5 jan 2023",
    length: 2,
  },
];

const Blog = ({ readMore }) => {
  return (
    <div>
      {/* Trending Posts */}
      <div className="mb-[1.38rem]">
        <div>
          <h2 className="text-[1.125rem] md:text-[1.5rem] font-semibold leading-normal text-[#262626] mb-[0.5rem]">
            Trending Post
          </h2>
        </div>
        <div className="flex justify-between gap-[1.38rem] lg:gap-[2.31rem] overflow-x-auto">
          {trendingPosts.map((trending) => {
            const { id, title, image, description, author } = trending;
            return (
              <article
                key={id}
                className="min-w-[19.5rem] lg:min-w-[15.5rem] bg-[#EDF8FF] sm:bg-white p-[1rem] rounded-[0.5rem]"
              >
                <div>
                  <img src={image} alt={title} className="w-full" />
                </div>
                <div className="my-[0.5rem]">
                  <h3 className="text-[0.875rem] font-bold leading-normal text-[#191919] mb-[0.25rem]">
                    {title}
                  </h3>
                  <p className="text-[0.75rem] leading-normal text-[#404040]">
                    {description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={author.profilePicture} alt="Author" />
                    <p className="text-[0.5rem] leading-normal text-[#191919]">
                      Written by {author.name}
                    </p>
                  </div>
                  <button
                    onClick={() => readMore(trending)}
                    className="text-[0.625rem] font-bold leading-normal text-[#666]"
                  >
                    Read more
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Recent Articles */}
      <div>
        <h2 className="text-[1.125rem] md:text-[1.5rem] font-semibold leading-normal text-[#262626] mb-[1.38rem]">
          Recent Articles
        </h2>
        <div className="grid grid-cols-2 justify-between gap-[0.63rem] xl:gap-x-[2.81rem] gap-y-[1.38rem]">
          {recentArticles.map((recent) => {
            const { id, title, image, description, datePublished, length } =
              recent;
            return (
              <article
                key={id}
                className=" bg-white p-[0.75rem] md:p-[1.25rem] flex flex-col md:flex-row gap-[0.75rem] items-center rounded-[0.5rem]"
              >
                <div className="md:min-w-[9rem] w-full lg:w-auto">
                  <img src={image} alt={title} className="w-full h-full" />
                </div>
                <div className="max-w-[21.3125rem]">
                  <h3 className="text-[0.75rem] md:text-[1rem] xl:text-[1.125rem] font-semibold leading-normal text-[#191919] mb-[0.5rem]">
                    {title}
                  </h3>
                  <p className="hidden sm:block text-[0.75rem] leading-normal text-[#191919] mb-[0.75rem]">
                    {description}
                  </p>
                  <p
                    onClick={() => readMore(recent)}
                    className="text-[0.625rem] leading-normal text-[#107BC0] md:text-[#191919]"
                  >
                    {datePublished} {"|"} {length} mins read
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  readMore: PropTypes.func,
};
export default Blog;
