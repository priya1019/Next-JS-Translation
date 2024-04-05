import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
} from "../locales";

export default function Home() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const t2 = useScopedI18n("scope.more");
  const locale = useCurrentLocale();

  return (
    <div>
      <p>
        Current locale: <span>{locale}</span>
      </p>
      <h1>{t("hello morning")}</h1>

      <button
        type="button"
        className="pr-10"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button type="button" onClick={() => changeLocale("es")}>
        ES
      </button>
    </div>
  );
}
