const BASE_URL = "http://localhost:8765";

function API() {
  const getBets = ({ urlPath, id } = { urlPath: "event", id: 1 }) => {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${urlPath}/${id}`)
        .then(res => res.json())
        .then(
          data => {
            resolve(data);
          },
          err => {
            reject(new Error("something went wrong"));
          }
        );
    });
  };

  return {
    getBets
  };
}

export default API();
