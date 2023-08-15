import {Configuration, FrontendApi} from '@ory/kratos-client';
import axios from '@ory/kratos-client/node_modules/axios';
import {KRATOS_SELF_SERVICE_BASE_URL} from '../constants/endpoint.kratos.js';
import {MappingPaths} from '../constants/mapping.paths.js';

const configuration = new Configuration({
    basePath: KRATOS_SELF_SERVICE_BASE_URL,
    baseOptions: {
        withCredentials: true,
    },
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("error is: " + error)

        // check for axios@0.21 Error
        if (error?.isAxiosError) {
            if (error?.response?.status === 401) {
                const searchParams = new URLSearchParams();
                searchParams.append('from', window.location.pathname);
                if (error?.response?.data?.error?.message) {
                    searchParams.append('message', error.response.data.error.message);
                }
                window.location.href = `${MappingPaths.PUBLIC.LOGIN}?${searchParams.toString()}`;
            }
        } else {
            console.log(error)
        }

        return Promise.reject(error);
    },
);

export const kratos = new FrontendApi(configuration);
export const EAuthLoginFlowId = {
    SessionAlreadyAvailable: 'session_already_available',
    SecurityCsrfViolation: 'security_csrf_violation',
    SessionAal1Required: 'session_aal1_required',
    SecurityIdentityMismatc: 'security_identity_mismatch',
};
