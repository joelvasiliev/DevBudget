"use server";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18NextConfig from "../../../next-i18next.config.js";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["dashboard"], nextI18NextConfig)),
  },
});
