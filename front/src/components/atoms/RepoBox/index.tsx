import React, {useCallback} from "react";
import {RepoBoxData} from "../../../types/repoTypes";

type RepoBoxProps = {
  repoData : RepoBoxData
}
const RepoBox = (props: RepoBoxProps) => {
  const {repoData} = props

  return (
    <>
      <div>
        <p>name:{repoData.name}</p>
        <p>description:{repoData.description}</p>
        <a href={repoData.url}>github link</a>
      </div>
    </>
  )
};

export default RepoBox;
