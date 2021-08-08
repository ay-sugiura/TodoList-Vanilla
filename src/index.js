import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  // li.innerText = inputText;

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = inputText;

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了処理
    const completeTarget = completeButton.parentNode.parentNode;
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
    //console.log(completeTarget);
    completeTarget.childNodes[0].removeChild(completeButton);
    completeTarget.childNodes[0].removeChild(deleteButton);
    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    completeTarget.childNodes[0].appendChild(backButton);
    backButton.addEventListener("click", () => {
      /**戻るボタンの処理 */
      const backTarget = backButton.parentNode.parentNode;
      document.getElementById("incomplete-list").appendChild(backTarget);
      backTarget.childNodes[0].removeChild(backButton);
      backTarget.childNodes[0].appendChild(completeButton);
      backTarget.childNodes[0].appendChild(deleteButton);
    });
  });

  //button(削除)　生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.setAttribute("id", "delete-btn-id");
  deleteButton.addEventListener("click", () => {
    //削除処理
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //divにボタンをつける
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liの下にdivを入れる。
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
