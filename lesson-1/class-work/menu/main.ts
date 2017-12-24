interface IMenuItem {
    title: string;
    items: string[];
}

const menuList: IMenuItem[] = [
    {
        items: ["Angular", "React", "Vue"],
        title: "JavaScript",
    }, {
        items: ["Angular", "Polymer"],
        title: "Dart",
    },
];

function generateMenu(list: IMenuItem[]): string {
    let content: string = `<ul>`;
    for (const a of list) {
        if (a.items && a.title) {
            content += `<li><a class='title'>${a.title}</a>`;
            content += generateMenu(a.items);
        } else {
            return content;
        }
        for (const item of a.items) {
            if (content.indexOf(item.title) !== -1) break;
            content += `<li><a>${item.title}</a></li>`;
        }
        content += `</ul></li>`;
    }
    return content;
}

let navMenuList: HTMLDivElement | null = document.querySelector(".menu");
if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
    navMenuList.onclick = (ev: MouseEvent) => {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList = el.classList;
        if (!classList.contains("title")) {
            return;
        }
        const parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle("menu-open");
    };
}
