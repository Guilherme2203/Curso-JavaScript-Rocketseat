axios.get('https://api.github.com/users/guilherme2203')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });