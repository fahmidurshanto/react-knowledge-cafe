import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, author, readingTime, authorImg, postedDate, hashtags } =
    blog;

  return (
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <h2 className="text-4xl">{title}</h2>
      <p>{hashtags}</p>
      <div className="flex justify-between">
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
        <div>
          <p>Reading time {readingTime} min read</p>
        </div>
      </div>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
