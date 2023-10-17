export const servicesFromData = [
    "Обмен рублей",
    "Обмен евро",
    "Оплата QR-кодом",
]


export const services = [
    "Кредиты",
    "Депозиты",
    "Денежные переводы",
    "Автокредиты",
    "Ипотека",
    "Потребительские займы",
    "Интернет-банкинг",
    "Банковские карты"]

export const pages = [{name: 'Login', link: "/"},
    {name: 'Map', link: "/map"},
    {name: 'About', link: "/about"},
    {name: 'Wallet', link: "/wallet"},
];


export const menuItems = [
    {
        id: 1,
        name: "offices",
        text: "Показывать офисы"
    },
    {
        id: 2,
        name: "atms",
        text: "Показывать банкоматы"
    },
    {
        id: 3,
        name: "credits",
        text: "Кредиты"
    },
    {
        id: 4,
        name: "deposits",
        text: "Депозиты"
    },
    {
        id: 5,
        name: "mortgage",
        text: "Ипотека"
    },
]


type menuItemsInitType = {
    [key: string]: boolean
}

const menuItemsInit:menuItemsInitType = menuItems.reduce(function (result, element) {
    return {
        ...result,
        [element.name]: false,
    }
}, {})

menuItemsInit.offices = true;
menuItemsInit.atms = true;

export {menuItemsInit}
