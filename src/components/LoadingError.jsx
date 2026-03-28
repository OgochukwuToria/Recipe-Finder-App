import { Spinner, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function Loading() {
  const { t } = useTranslation();
  return <div className="text-center py-4"><Spinner animation="border" /> {t("loading")}</div>;
}

export function ErrorState() {
  const { t } = useTranslation();
  return <Alert variant="danger">{t("errorLoading")}</Alert>;
}
