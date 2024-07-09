import LatestBlogs from "@/components/LagestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 10,
    },
  });
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
