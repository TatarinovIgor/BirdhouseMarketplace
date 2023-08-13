import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import * as S from './DefaultErrorBoundary.style';

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
};

export const DefaultErrorBoundary = () => {
  const error = useRouteError();
  const { t } = useTranslation();
  const message = getErrorMessage(error);

  return (
    <S.Container>
      <h2>{t('error.boundary.title')}</h2>
      <h3>{message}</h3>
    </S.Container>
  );
};
