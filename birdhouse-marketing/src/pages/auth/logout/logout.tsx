/* eslint-disable no-debugger */
import React from 'react';
import {
  Navigate,
  useLoaderData,
} from 'react-router-dom';
import {kratos} from '../kratos';
import {LogoutPageLoaderData} from '../../../types/kratos';
import { DefaultErrorBoundary } from '../../../modules/DefaultErrorBoundary/DefaultErrorBoundary';

export const LogoutPage = () => {
  const { flow } = (useLoaderData() || {}) as LogoutPageLoaderData;

  return (
      window.location.assign(flow.logout_url)
  );
};

// for react-router lazy loading
export default LogoutPage;

export const loader = async () => {
  try {
    const response = await kratos.createBrowserLogoutFlow();
    return {
      flow: response.data,
    };
  } catch (e: any) {
    // check for axios@0.21 Error
    if (!e.isAxiosError) {
      throw e;
    }

    const { data } = e.response;
    if (data.ui) {
      return data;
    }
    throw e;
  }
};

export const ErrorBoundary = DefaultErrorBoundary;
