
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {i18n.language.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage("en")}>EN</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("fi")}>FI</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("es")}>ES</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
