const basePath = '/ui'
export const MappingPaths = {
    ROOT: basePath + '/',
    ERROR: basePath + 'error',
    PUBLIC: {
        ABOUT: basePath + '/about',
        CONTACT_US: basePath + '/contact_us',
        LANDING_ADVERTISERS: basePath + '/landing_advertisers',
        LANDING_BLOGGERS: basePath + '/landing_bloggers',
        LOGIN: basePath + '/login',
        REGISTRATION: basePath + '/registration',
        CHANGE_PASSWORD: basePath + '/change-password',
        CONFIRM_CODE: basePath + '/confirm-code',
        CREATE_NEW_PASSWORD: basePath + '/create-new-password',
        TERMS_AND_CONDITION: basePath + '/tos'
    },
    PRIVATE: {
        DASHBOARD: basePath + '/dashboard',
        DASHBOARD_ADVERTISERS: basePath + '/dashboard_advertisers',
        DASHBOARD_BLOGGERS: basePath + '/dashboard_bloggers',
        ACCOUNT: basePath + '/account',
        EXPLORE_ADVERTISES: basePath + '/explore_advertisers',
        EXPLORE_BLOGGERS: basePath + '/explore_bloggers',
        PRODUCT_PAGE: basePath + '/product_page',

        PAYMENTS_PAGE: basePath + '/deposit_withdraw',
        DEPOSIT_PAGE: basePath + '/deposit',
        WITHDRAW_PAGE: basePath + '/withdraw',
        DEPOSIT_SUCCESS_PAGE: basePath + '/deposit_success',
        DEPOSIT_FAIL_PAGE: basePath + '/deposit_fail',
        WITHDRAW_SUCCESS_PAGE: basePath + '/withdraw_success',
        WITHDRAW_FAIL_PAGE: basePath + '/withdraw_fail',
    }
}
