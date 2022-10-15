import { test } from "../../../api/Index/test.api";
export function getTest() {
  test().then((res) => {
    console.log(res);
  });
}
