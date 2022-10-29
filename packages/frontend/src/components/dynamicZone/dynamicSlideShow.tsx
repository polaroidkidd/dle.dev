import type { SlideShowFragment } from "@types";

export function DynamicSlideShow(props: SlideShowFragment): JSX.Element {
  return (
    <>
      {props.slideShow.data.map((data) => {
        return (
          <div key={data.attributes?.hash} id={data.attributes?.hash}>
            <div>alternativeText: {data.attributes?.alternativeText}</div>
            <div>ext: {data.attributes?.ext}</div>
            <div>height: {data.attributes?.height}</div>
            <div>mime: {data.attributes?.mime}</div>
            <div>width: {data.attributes?.width}</div>
            <div>name: {data.attributes?.name}</div>
            <div>hash: {data.attributes?.hash}</div>
          </div>
        );
      })}
    </>
  );
}
