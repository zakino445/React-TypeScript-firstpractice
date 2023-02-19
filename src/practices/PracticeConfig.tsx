export const PracticeConfig = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(100);
  return (
    <div>
      <p>練習問題:設定ファイルの参照</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
