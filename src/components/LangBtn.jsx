import React from "react";
import { useTranslation } from 'react-i18next';

export default function LangBtn() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex flex-row select-none">
      <div className="flex flex-row items-center right-1">
        <button onClick={() => changeLanguage('en')} className="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-white hover:text-gray-700 focus:text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
          <span className="text-md">En</span>
          <span className="ml-1">
            <img
              src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
              className="w-5 h-5"
              alt="English"
            />
          </span>
        </button>

        <button onClick={() => changeLanguage('ar')} className="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-white hover:text-gray-700 focus:text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
          <span className="text-md">Ar</span>
          <span className="ml-1">
            <img
              src="https://img.icons8.com/?size=100&id=CWjpjilAQpKB&format=png&color=000000"
              className="w-5 h-5"
              alt="Arabic"
            />
          </span>
        </button>
      </div>
    </div>
  );
}