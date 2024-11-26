import { FieldProps, useFieldValue, useTranslate } from "react-admin";

function camelCase(type: string) {
  return type
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word: string, index: number) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

export const TypeField = (props: FieldProps) => {
  const value = useFieldValue(props);
  const translate = useTranslate();
  const result = translate("type." + camelCase(value));

  return <>{result ? <span>{result}</span> : null}</>;
};
