import React from "react";
import { useGlobalContext } from "../context";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <img
          style={{ width: "400px", margin: "0 auto", display: "block" }}
          src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"
          alt="Loading..."
        />
      </>
    );
  }

  return (
    <div className="stories-div">
      {hits.map((currentPost) => {
        const { title, url, author, points, num_comments, objectID } = currentPost;
        return (
          <>
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments} comments</span> | <span>{points} Points</span>{" "}
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Stories;
