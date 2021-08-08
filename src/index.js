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
    alert("完了");
  });

  //button(削除)　生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除処理
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    //未完了リストから削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divにボタンをつける
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liの下にdivを入れる。
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  //   <li>
  //   <div class="list-row">
  //     TODOです
  //     <button>完了</button>
  //     <button>削除</button>
  //   </div>
  // </li>
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
