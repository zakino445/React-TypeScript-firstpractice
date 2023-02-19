/* eslint-disable */

export const typeList = () => {
  // TypeScriptの基本の型
  //boolean 論理
  let bool: boolean = true;

  //number 数値
  let number: number = 0;

  //string 文字
  let str: string = "A";

  //Array 配列
  let arr1: Array<number> = [0, 1, 2];
  let arr2: number[] = [0, 1, 2];

  //tuple 配列の順番で指定
  let tuple: [number, string] = [0, "A"];

  //any なんでも
  let any1: any = false;

  //void デフォルトで設定されているため、書かなくてもよい
  const funcA = (): void => {
    const test = "TEST";
  };

  //null nullを表す
  let null1: null = null;

  // undefined 何もない
  let undefined1: undefined = undefined;

  //object objを表す
  let obj1: object = {};
  let obj2: { id: number; name: string } = { id: 0, name: "ABC" };
};
