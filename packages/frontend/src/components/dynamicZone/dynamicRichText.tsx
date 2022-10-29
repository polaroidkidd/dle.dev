export interface IDynamicRichText {
  richText: string;
  __typename: string;
}

export function DynamicRichText({ richText }: Pick<IDynamicRichText, "richText">): JSX.Element {
  return <div>richText: {richText}</div>;
}
