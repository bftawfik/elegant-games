import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import type {
  typeSocialIcons,
  typeInternalLinks,
  typeGameListData,
  typeTermsData,
  typePrivacyData,
} from "./Types";

import Router from "./Router/Router";

import StaticDataProvider from "./Components/AppDataProvider/AppDataProvider";

import "./App.scss";

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

const listData: typeGameListData = [
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
  {
    name: "hello",
    gameId: "5",
    imgUrl:
      "https://www.ourfastcdn.com/elegantgames/mygames/21.Cars/HTML5-Game/icon-256.png",
  },
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

function App() {
  // const [stateUserTheme, setStateUserTheme] = useState("lightr");

  // useEffect(() => {
  //   document.documentElement.className = "";
  //   document.documentElement.classList.add(`theme-${stateUserTheme}`);
  // }, [stateUserTheme]);

  return (
    <div className="App">
      <StaticDataProvider
        value={{ socialIcons, internalLinks, listData, termsData, privacyData }}
      >
        <Router />
      </StaticDataProvider>
    </div>
  );
}

export default App;
