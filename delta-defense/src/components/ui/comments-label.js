import React, { useState, useEffect } from "react";
import { UseContext } from "../synergy/synergy";
// Ui
import { Icon, Label } from "semantic-ui-react";

const CommentsLabel = (props) => {
  const { comments } = UseContext();
  const { id } = props;
  const [commentsLength, setCommentsLength] = useState("");
  useEffect(() => {
    //console.log("comments", props);
    const commentsArray = comments.filter((item) => item.postId === id);
    setCommentsLength(commentsArray.length);
  }, [comments, id]);

  return (
    <Label>
      Comments
      <Label.Detail>{commentsLength}</Label.Detail>
    </Label>
  );
};
export default CommentsLabel;
