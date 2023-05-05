function newRegister() {
    /* 요소 노드, 텍스트 노드 만들기 */
    var newItem = document.createElement("li");
    var txtNode = document.createTextNode(subject.value);
  
    /* 자식 노드 연결 */
    newItem.appendChild(txtNode);
    document.getElementById("itemList").appendChild(newItem);
  
    /* 노드 삭제 */
    var items = document.querySelectorAll("li");
    for (i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
        if (this.parentNode)
          this.parentNode.removeChild(this);
      });
    }
  }