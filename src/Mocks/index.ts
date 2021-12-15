import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import type {
  typeSocialIcons,
  typeInternalLinks,
  typeTermsData,
  typePrivacyData,
} from "../Types";

const socialIcons: typeSocialIcons = [
  {
    name: "Home",
    url: "/",
    type: "internal",
    icon: faGlobe,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    type: "external",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    type: "external",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    type: "external",
    icon: faTwitter,
  },
];

const internalLinks: typeInternalLinks = [
  {
    name: "الرئيسية",
    url: "/",
  },
  {
    name: "الالعاب",
    url: "/games",
  },
  {
    name: "الخصوصية",
    url: "/privacy",
  },
  {
    name: "الشروط والاحكام",
    url: "/terms",
  },
];

const gamesData = [
  "01.Splishy_Fish",
  "02.FunnyAnimals",
  "03.ClassicMatch3",
  "04.TrafficRacer",
  "05.BlocksSuperMatch3",
  "06.HappyHalloweenMatch3",
  "07.HappyChefBubbleShooter",
  "08.SeaAnimals",
  "09.Christmas_Candy",
  "10.LollipopsMatch3",
  "11.SpeedRacer",
  "12.CandyMatch3",
  "13.SmilesMatch3",
  "14.ValentinesMatch3",
  "15.ChristmasMatch3",
  "16.AnimalsCrashMatch3",
  "17.HalloweenMatch3",
  "18.ScaryRun",
  "19.Billiards",
  "20.CrazyMatch3",
  "21.Cars",
  "22.MonsterMatch3",
  "23.SweetMatch3",
  "24.CrazyCar",
  "25.SummerMatch3",
  "26.BubbleShooter",
  "27.FunnyFacesMatch3",
  "28.SpaceMatch3",
  "29.MathGameForKids",
  "30.TrackRacer",
  "31.GoofRunner",
  "32.ChristmasGifts",
  "33.ChristmasBubbles",
  "34.StickPanda",
  "35.ChristmasBalls",
  "36.RoadRacer",
  "37.JewelsMatch",
  "38.PopsBilliards",
  "39.MiniRacer",
  "40.FrogSuperBubbles",
];

const termsData: typeTermsData = [
  "بالنقر على زر الاشتراك أعلاه ، فإنك توافق على الشروط والأحكام أدناه",
  "ستبدأ الاشتراك المدفوع بعد ارسال البن كود تلقائيًا.",
  "لا التزام ، يمكنك إلغاء اشتراكك في أي وقت عن طريق إرسال [unsub elegant] لعملاء فودافون على الرقم 6699 ولعملاء اتصالات علي الرقم 1722 ولعملاء أورانج على الرقم 5030 ولعملاء WE على الرقم 4041.",
  "للدعم, تواصل معنا على support@elegant.games.",
  "الفترة التجريبية صالحة للعملاء الجدد فقط.",
];

const privacyData: typePrivacyData = [
  "في ElegantGames ، التي يمكن الوصول إليها من Elegant.games ، فإن إحدى أولوياتنا الرئيسية هي خصوصية زوارنا. يحتوي مستند سياسة الخصوصية هذا على أنواع من المعلومات التي يتم جمعها وتسجيلها بواسطة ElegantGames وكيفية استخدامها. إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا ، فلا تتردد في الاتصال بنا. تنطبق سياسة الخصوصية هذه فقط على أنشطتنا عبر الإنترنت وهي صالحة لزوار موقعنا فيما يتعلق بالمعلومات التي شاركوها و / أو جمعوها في ElegantGames. لا تسري هذه السياسة على أي معلومات يتم جمعها في وضع عدم الاتصال أو عبر قنوات أخرى غير هذا الموقع. موافقة باستخدام موقعنا ، فإنك توافق على سياسة الخصوصية وتوافق على شروطها . المعلومات التي نجمعها سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها ، وأسباب مطالبتك بتقديمها ، عند النقطة التي نطلب منك فيها تقديم معلوماتك الشخصية. إذا اتصلت بنا مباشرة ، فقد نتلقى معلومات إضافية عنك مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومحتويات الرسالة و / أو المرفقات التي قد ترسلها إلينا وأي معلومات أخرى قد تختار تقديمها.",
];

export { socialIcons, internalLinks, gamesData, termsData, privacyData };
