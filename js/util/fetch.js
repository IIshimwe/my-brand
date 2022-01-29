const token = localStorage.getItem('token');

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

const getApi = async (url) => fetch(`http://localhost:9000/${url}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': token || '',
    },
})
    .then(handleResponse)
    .catch(handleError);

const postApi = async (method, url, data) => fetch(`http://localhost:9000/${url}`, {
    method,
    mode: 'cors',
    cache: 'reload',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': token || '',
    },
    body: data || '',
})
    .then(handleResponse)
    .catch(handleError);

// const handleLoggout = async (response) => {
//     if (response.ok) {
//       window.sessionStorage.clear();
//       const data = await response.json();
//       window.location = '/';
//       return data;
//     }
//     return 'Network response was not ok.';
//   };