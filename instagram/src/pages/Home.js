import { Box } from "@material-ui/core";
import PostCard from "../components/PostCard";
import firebase from "../utils/firebase";
import List from "@material-ui/core/List";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Home() {

  let [posts, setPosts] = useState([]);
  useEffect(function(){
     axios.get("/posts/").then((response)=>{
      setPosts(response.data);
     })
  } , [])
  return (
    <List
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {posts.map(function(post, index){
        return <PostCard post = {post} />

      })}
    </List>
  );
}
