import { UseContext } from "../components/synergy/synergy";

const commentsFinder = (postId) => {
  const { comments } = UseContext();
  const relatedComments = comments.filter(
    (comment) => comment.postId === postId
  );
  return relatedComments;
};

export default commentsFinder;
