import React from "react";

type Props = {
  ref: React.MutableRefObject<any>
}
const TestComponent: React.FC<Props> = () => {
  return (
    <div><h1>This is a test component</h1></div>);
};
test("Render useAnimatedVisibility with viability set to true", () => {
  // const testRef = React.useRef<React.MutableRefObject<HTMLElement>>(null!);
  // const handler = (e: MouseEvent | TouchEvent) => {
  //   console.log(e);
  // };
  // const tree = renderer.create(<TestComponent ref={testRef}/>);
  // const animatedVisibility = useAnimatedVisibility(testRef.current, handler, true);
  // console.log(tree.toJSON());
});
