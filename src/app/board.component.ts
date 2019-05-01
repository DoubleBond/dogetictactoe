import m from "mithril";
export class BoardComponent {
  view(vnode) {
    return m("div", { class: "board" }, [
      vnode.attrs.board.map((node, index) =>
        m("div", {
          class: "node",
          style: `background-image: ${node ? "url(" + node.avatar + ")" : ""}`,
          onclick: () => {
            vnode.attrs.onclick(index);
          }
        })
      )
    ]);
  }
}
