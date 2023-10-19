
// HEADER

export const pages = [{name: 'Login', link: "/"},
    {name: 'Wallet', link: "/wallet"},
    {name: 'About', link: "/about"},
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

// CREATE WALLET PAGE

export const cheaf = [
    {
        value: '1',
        label: "Поставщик",
    },
    {
        value: '2',
        label: "АО “Мосэнергосбыт",
    },
    {
        value: '3',
        label: "ООО “МосОблЕИРЦ",
    },
    {
        value: '4',
        label: "АО “Мосэнергосбыт + ТКО",
    },
    {
        value: '5',
        label: "АО “Мосводоканал",
    },
]

export const company = [
    {
        value: '1',
        label: "Статус отношения к ЛС",
    },
    {
        value: '2',
        label: "Собственник",
    },
    {
        value: '3',
        label: "Другое",
    },
    {
        value: '4',
        label: "Наниматель",
    },
    {
        value: '5',
        label: "Зарегистрированный",
    },
    {
        value: '6',
        label: "Проживает",
    },
];


export const listWallet = [
    {
        id: "54215-048-05",
        name: "Клубная ул., д. 3, кв. 48",
        money: "500,00 ₽",
        type: "home",
        status: "expired"
    },
    {
        id: "54215-048-06",
        name: "Клубная ул., д. 3, кв. 48",
        money: "500,00 ₽",
        type: "water",
        status: "actual"
    },
    {
        id: "54215-048-07",
        name: "Клубная ул., д. 3, кв. 48",
        money: "500,00 ₽",
        type: "gas",
        status: "actual"
    }
]
