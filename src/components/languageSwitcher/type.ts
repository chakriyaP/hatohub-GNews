// Define the language keys and their display names
export type LanguageKey =
  | "ar"
  | "zh"
  | "nl"
  | "en"
  | "fr"
  | "de"
  | "el"
  | "he"
  | "hi"
  | "it"
  | "ja"
  | "ml"
  | "mr"
  | "no"
  | "pt"
  | "ro"
  | "ru"
  | "es"
  | "sv"
  | "ta"
  | "te"
  | "uk";

export const languages: Record<LanguageKey, string> = {
  ar: "العربية",
  zh: "中文",
  nl: "Nederlands",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  he: "עברית",
  hi: "हिन्दी",
  it: "Italiano",
  ja: "日本語",
  ml: "മലയാളം",
  mr: "मराठी",
  no: "Norsk",
  pt: "Português",
  ro: "Română",
  ru: "Русский",
  es: "Español",
  sv: "Svenska",
  ta: "தமிழ்",
  te: "తెలుగు",
  uk: "Українська",
};

export interface LanguageSwitcherProps {
  onChange: (lang: LanguageKey) => void; // Optional callback for parent component
}
