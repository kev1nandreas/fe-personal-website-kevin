/**
 * Backend content (Project, Experience) is stored bilingually as separate
 * `_id`/`_en` columns rather than through an i18n library. This picks the
 * field matching the active site language.
 */
export function pickLang<T>(language: "en" | "id", valueEn: T, valueId: T): T {
	return language === "id" ? valueId : valueEn;
}
