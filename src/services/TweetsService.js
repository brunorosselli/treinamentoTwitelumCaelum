export const TweetsService = {
  like: (idDoTweet) =>
    fetch(
      `https://twitelum-api.herokuapp.com/tweets/${idDoTweet}/like?X-AUTH-TOKEN=${localStorage.getItem(
        "TOKEN"
      )}`,
      { method: "POST" }
    ).then((response) => response.json()),

  carrega: () =>
    fetch(
      `https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem(
        "TOKEN"
      )}`
    ).then((response) => response.json()),

  adiciona: (conteudo) =>
    fetch(
      `https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem(
        "TOKEN"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ conteudo }),
      }
    ).then((respostaDoServer) => {
      return respostaDoServer.json();
    }),

  remove: (idTweetQueVaiSerRemovido) =>
    fetch(
      `https://twitelum-api.herokuapp.com/tweets/${idTweetQueVaiSerRemovido}?X-AUTH-TOKEN=${localStorage.getItem(
        "TOKEN"
      )}`,
      {
        method: "DELETE",
      }
    ).then((data) => data.json()),
};
