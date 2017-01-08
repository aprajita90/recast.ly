var searchYouTube = ({key, query, max}, callback) => {
  $.get('https://www.googleapis.com/youtube/v4/search'), {
    part: snippets,
    key: key,
    q: query,
    maxResults: max
  };
};

window.searchYouTube = searchYouTube;
