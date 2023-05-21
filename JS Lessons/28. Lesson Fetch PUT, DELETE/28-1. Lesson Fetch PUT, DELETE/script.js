//! PUT request with fetch
//? 1st example

const JSON_PLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

// const getPosts = async () => {
//   const response = await fetch(JSON_PLACEHOLDER_BASE_URL);
//   const data = await response.json();
//   console.log(data);
// };

// getPosts();

// const updatePost = async (postId) => {
//   const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title: "updated title", body: "updated body" }),
//   });
//   const info = await response.json();
//   console.log(info);
// };

// updatePost(55);

//? 2nd example

// const DUMMY_BASE_URL = "https://dummy.restapiexample.com/api/v1/";

// const getEmployees = async () => {
//   try {
//     const response = await fetch(DUMMY_BASE_URL + "employees");
//     const employees = await response.json();
//     console.log(employees);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getEmployees();

// const updateEmployee = async (employeeId) => {
//   try {
//     const response = await fetch(DUMMY_BASE_URL + "/update/" + employeeId, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "test",
//         salary: "123",
//         age: "23",
//       }),
//     });
//     const info = await response.json();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updateEmployee(21);

const FAKE_URL = "https://fakestoreapi.com/products/";

const deleteProduct = async (productID) => {
  const response = await fetch(FAKE_URL + productID, {
    method: "DELETE",
  });
  console.log(response);
  const info = await response.json();
  console.log(info);
};

deleteProduct(5);
