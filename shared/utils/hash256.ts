import sha256 from "crypto-js/sha256";
export default function (input: string) {
  return sha256(input).toString();
}
