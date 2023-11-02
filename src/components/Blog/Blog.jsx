import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author, readingTime, authorImg, postedDate, hashtags } =
    blog;

  return (
    <div className="mb-20 ">
      <img
        className="w-[80%] my-12"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <h2 className="text-4xl mb-4 font-semibold">{title}</h2>
      <p className="text-2xl text-gray-600 mb-4">{hashtags}</p>
      <div className="flex justify-between mt-8">
        <div className="flex ">
          <img
            className="w-24 rounded-full mr-6"
            src={authorImg}
            alt={` ${author} is the author of the content`}
          />
          <div>
            <h1 className="text-2xl">{author}</h1>
            <p>Posted Date: {postedDate}</p>
          </div>
        </div>
        <div className="flex">
          <span className="text-2xl text-gray-400">{readingTime} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-yellow-400"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
export default Blog;
