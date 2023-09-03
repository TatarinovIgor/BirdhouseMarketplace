import { LoginFlow, LogoutFlow } from '@ory/kratos-client';

export type LoginPageLoaderData = {
  flow: LoginFlow;
};

export type LoginPageActionData = {
  errors: string[];
};

export type LogoutPageLoaderData = {
  flow: LogoutFlow;
};

export type LogoutPageActionData = {
  errors: string[];
};



export type nodes = {
  attributes: {
    name?: string;
    value?: string;
  };
};

export type BrowserRecoveryFlow = {
  active: string;
  expires_at: string;
  id: string;
  issued_at: string;
  request_url: string;
  state: string;
  type: string;
  ui: {
    action: string;
    method: string;
    nodes: nodes[];
  };
};
