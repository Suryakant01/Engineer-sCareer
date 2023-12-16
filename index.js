function getJokes() {
    return new Promise((resolve, reject) => {
        let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?type=single";
          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              resolve(data.joke);
            })
            .catch((err) => {
              reject(err);
            });
        });
    }
    
    async function showJokes() {
        try {
          let joke = await getJokes();
          console.log(joke);
          let textSelected = document.getElementsByClassName("joke-here")[0];
          textSelected.innerHTML = joke;
        } catch (error) {
            console.error(error);
        }
    }
    
    document.getElementsByTagName("button")[0].addEventListener("click", function() {
      
      showJokes();
    });
      
    

  
