import { useState } from "react";
import Blog from "../patients/Blog";
import EducationSinglePost from "../patients/EducationSinglePost";

const DoctorsEducationTab = () => {
  const [singlePostPage, setSinglePostPage] = useState(!true);
  const [singlePost, setSinglePost] = useState({});

  //View single page
  const readMore = (post) => {
    setSinglePost(post);
    setSinglePostPage(true);
  };

  return (
    <section>
         {singlePostPage ? (
        <EducationSinglePost
          posts={singlePost}
          setSinglePostPage={setSinglePostPage}
        />
      ) : (
        <Blog readMore={readMore} />
      )}
    </section>
  )
}

export default DoctorsEducationTab