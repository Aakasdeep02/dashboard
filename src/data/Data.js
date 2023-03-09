import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,

} from "@iconscout/react-unicons";
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [31, 100, 28, 545, 42, 109, 200],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d598",
        },
        barValue: 60,
        value: "25,970",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [23, 40, 60, 43, 67, 109, 90],
            },
        ],
    },
]


export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: " has ordered Apple smart watch 2500 battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: " has received samsung gadget for charging battery",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: " has ordered Apple smart watch, Samsung Gear 2500 battery.",
        time: "25 hours ago",
    }
]