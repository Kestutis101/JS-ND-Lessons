fetch("https://f9732d44-9fe8-4c38-b316-9d48fe2b6e44.mock.pstmn.io/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://f9732d44-9fe8-4c38-b316-9d48fe2b6e44.mock.pstmn.io/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    test: "test",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
