let BASE_URL = process.env.BASE_URL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // BASE_URL = 'http://localhost:3500'
    BASE_URL = 'https://api.lijovijayan.dev'
} else {
    BASE_URL = 'https://api.lijovijayan.dev'
}

export const ENV = {
    api: {
        country: {
            list: `${BASE_URL}/demo-app/api/v1/countries`,
            getById: `${BASE_URL}/demo-app/api/v1/countries/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/countries`
        },
        state: {
            list: `${BASE_URL}/demo-app/api/v1/states`,
            getById: `${BASE_URL}/demo-app/api/v1/states/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/states`
        },
        city: {
            list: `${BASE_URL}/demo-app/api/v1/cities`,
            getById: `${BASE_URL}/demo-app/api/v1/cities/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/cities`
        },
        college: {
            list: `${BASE_URL}/demo-app/api/v1/colleges`,
            getById: `${BASE_URL}/demo-app/api/v1/colleges/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/colleges`
        },
        student: {
            list: `${BASE_URL}/demo-app/api/v1/students`,
            getById: `${BASE_URL}/demo-app/api/v1/students/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/students`
        },
        cource: {
            list: `${BASE_URL}/demo-app/api/v1/cources`,
            getById: `${BASE_URL}/demo-app/api/v1/cources/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/cources`
        },
        skill: {
            list: `${BASE_URL}/demo-app/api/v1/skills`,
            getById: `${BASE_URL}/demo-app/api/v1/skills/{0}`,
            getWithFilter: `${BASE_URL}/demo-app/api/v1/skills`
        }
    }
}
