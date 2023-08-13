import {
  FrontendApiCreateBrowserLoginFlowRequest,
  FrontendApiToSessionRequest,
  FrontendApiCreateBrowserLogoutFlowRequest,
} from '@ory/kratos-client';
import { useQuery } from '@tanstack/react-query';
import { kratos } from './kratos';

export const useLoginBrowserFlowQuery = (requestParameters?: FrontendApiCreateBrowserLoginFlowRequest) =>
  useQuery({
    queryKey: ['auth', 'login', 'browser', 'flow'],
    queryFn: () => kratos.createBrowserLoginFlow(requestParameters).then((res) => res.data),
  });

export const useSessionQuery = (requestParameters?: FrontendApiToSessionRequest) =>
  useQuery({
    queryKey: ['auth', 'session'],
    queryFn: () => kratos.toSession(requestParameters).then((res) => res.data),
  });

export const useLogoutBrowserFlow = (request?: FrontendApiCreateBrowserLogoutFlowRequest) =>
  useQuery({
    queryKey: ['auth', 'logout', 'browser', 'flow'],
    queryFn: () => kratos.createBrowserLogoutFlow(request).then((res) => res.data),
  });
