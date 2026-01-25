"use client";

import en from "@/locales/en.json";
import id from "@/locales/id.json";
import { useLanguageStore } from "@/stores/useLanguageStore";

type TranslationKey = keyof typeof en;

const translations = {
	en,
	id,
};

export function useTranslation() {
	const { language, setLanguage, toggleLanguage } = useLanguageStore();

	const t = <K extends TranslationKey>(
		section: K,
	): (typeof translations)["en"][K] => {
		return translations[language][section];
	};

	return {
		t,
		language,
		setLanguage,
		toggleLanguage,
	};
}
