const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_ENDPOINT = "https://jsonplaceholder.typicode.com/comments";
const mainElement = document.querySelector("main");

async function makeRequest(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

async function generateHtml() {
  const [users, posts, comments] = await Promise.all([
    makeRequest(USERS_ENDPOINT),
    makeRequest(POSTS_ENDPOINT),
    makeRequest(COMMENTS_ENDPOINT),
  ]);

  users.forEach((user) => {
    const containerDiv = document.createElement("div");
    const userEmailH1 = document.createElement("h1");
    userEmailH1.textContent = user.email;
    containerDiv.append(userEmailH1);

    const userPosts = posts.filter((post) => post.userId === user.id);
    userPosts.forEach((post) => {
      const postsComments = comments.filter(
        (comment) => comment.postId === post.id
      );
      const postElement = document.createElement("p");
      postElement.textContent = post.body;
      postElement.style.color = "blue";
      containerDiv.append(postElement);

      postsComments.forEach((comment) => {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment.body;
        containerDiv.append(commentElement);
      });
    });
    const hrElement = document.createElement("hr");
    containerDiv.append(hrElement);
    mainElement.append(containerDiv);
  });
}

generateHtml();

async function makeRequest() {
  const ENDPOINT = "http://img.omdbapi.com/?apikey=d1311396&i=tt1285016";
  const res = await fetch(ENDPOINT);
  const data = res.json();
}

makeRequest();
