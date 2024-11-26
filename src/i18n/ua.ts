import ukrainianMessages from "ra-language-ukrainian";
import { TranslationMessages } from "react-admin";

export const ua: TranslationMessages = {
  ...ukrainianMessages,
  resources: {
    faq: {
      name: "Питання/Відповідь",
      fields: {
        header: "Заголовок питання",
        body: "Відповідь",
        createdate: "Cтворено",
        lastupdate: "Редаговано",
      },
    },
    news: {
      name: "Новини",
      fields: {
        header: "Заголовок питання",
        body: "Відповідь",
        createdate: "Cтворено",
        lastupdate: "Редаговано",
        picture: "Зображення",
      },
    },
    links: {
      name: "Посилання",
      fields: {
        name: "Ресурс",
        link: "Посилання на ресур",
      },
    },
    users: {
      name: "Користувачі",
      fields: {
        name: "ПІБ",
        email: "Пошта",
        phone: "Телефон",
        sexTypeId: "Стать",
        genderTypeId: "Гендер",
        birthdate: "Дата Народження",
      },
    },
    sexTypes: {
      name: "Статі",
      fields: {
        title: "Назва",
      },
    },
    genderTypes: {
      name: "Гендери",
      fields: {
        title: "Назва",
      },
    },
    fabulas: {
      name: "Правопорушення",
      fields: {
        type: "Тип",
        createdate: "Відправлено",
        userId: "ПІБ",
        description: "Опис",
        media: "Медіа",
        location: "Локація",
        picture: "Фото",
        attachment: "Файли",
      },
    },
  },
  nav: {
    appConfigItem: "Налаштування",
    appContentItem: "Контент додатку",
    appUserInfoItem: "Інфо з додатку",
  },
  type: {
    other: "Інше",
    legalSupport: "Правова допомога",
    militaryCrime: "Воєнний злочин",
    psychologicalSupport: "Психологічна допомога",
    accident: "Порушення",
  },
};
