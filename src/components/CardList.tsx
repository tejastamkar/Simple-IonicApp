import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard, PostCard } from "./Card";
export const BlogList: React.FC = () => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
          },
        }
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setloader(false);
    }
  }, [data]);

  return loader ? (
    <>Loading....</>
  ) : (
    <>
      {data.map((data, index) => (
        <BlogCard title={data["title"]} subtitle={data["body"]} key={index} />
      ))}
    </>
  );
};
export const PostList: React.FC = () => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/photos", {
          params: {
            _limit: 10,
          },
        })
        .then((result) => {
          setData(result.data);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setloader(false);
    }
  }, [data]);

  return loader ? (
    <>Loading....</>
  ) : (
    <>
      {data.map((data, index) => (
        <PostCard title={data["title"]} image={data["url"]} key={index} />
      ))}
    </>
  );
};
