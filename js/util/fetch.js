
const handleResponse = async (response) => {
    const data = await response.json();
    if (response.ok) {
        return data;
    }
    return {
        error: 'An error occured'
    };
};

const handleError = (error) => {
    return { error };
};

const getApi = async (url) => {
    const token = localStorage.getItem('token');
    return fetch(`${BACKEND_URL}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token || '',
        },
    })
        .then(handleResponse)
        .catch(handleError);
};


const postApi = async (method, url, data) => {
    const token = localStorage.getItem('token');
    return fetch(`${BACKEND_URL}${url}`, {
        method,
        mode: 'cors',
        cache: 'reload',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token || '',
        },
        body: data || '',
    })
        .then(handleResponse)
        .catch(handleError);
};
// const handleLoggout = async (response) => {
//     if (response.ok) {
//       window.sessionStorage.clear();
//       const data = await response.json();
//       window.location = '/';
//       return data;
//     }
//     return 'Network response was not ok.';
//   };