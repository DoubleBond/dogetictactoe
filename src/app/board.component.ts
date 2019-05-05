import m from "mithril";
export class BoardComponent {
  view(vnode) {
    return m("div", { class: "board" }, [
      vnode.attrs.board.map((node, index) =>
        m("div", {
          class: "node",
          style: {
            backgroundImage: `${node ? "url(" + node.avatar + ")" : ""}`,
            cursor: node ? "initial" : null
          },
          onclick:
            !node &&
            function() {
              vnode.attrs.onclick(index);
            }
        })
      )
    ]);
  }
}
