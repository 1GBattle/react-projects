import React, { useEffect } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const BlogPostList = ({ fetchPosts, blogPosts }) => {
  useEffect(() => {
    console.log("blogPosts component mounted");
    fetchPosts();
  }, [fetchPosts]);

  const renderList = () => {
    return blogPosts.length > 0
      ? blogPosts.map((blogPost) => {
          return (
            <div className="item" key={blogPost.id}>
              <i className={"large middle aligned icon user"} />
              <div className={"content"}>
                <div className={"description"}>
                  <h2>{blogPost.title}</h2>
                  <p>{blogPost.body}</p>
                </div>
              </div>
              <UserHeader usedId={blogPost.userId} />
            </div>
          );
        })
      : null;
  };

  return <div className={"ui relaxed divided list"}>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    blogPosts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(BlogPostList);
