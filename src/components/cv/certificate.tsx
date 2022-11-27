import classNames from "classnames";

export interface ICertificate {
  name: string;
  date: string;
  issuer: string;
}

export function Certificate({ date, issuer, name }: ICertificate) {
  return (
    <div className={classNames("border rounded border-red-300", "mb-2 p-2")}>
      <div>name: {name}</div>
      <div>date: {date}</div>
      <div>issuer: {issuer}</div>
    </div>
  );
}
