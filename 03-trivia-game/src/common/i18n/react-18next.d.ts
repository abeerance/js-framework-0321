import "react-i18next";
import en from "../translations/en.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
