const studentURL = "https://testapi.io/api/Marijus/resource/students";

const getStudentList = async () => {
  const response = await fetch(studentURL);
  const data = await response.json();
  console.log(data);
};

// const postURL = "https://testapi.io/api/Marijus/resource/students";

// const postStudentPost = async () => {
//   try {
//     const response = await fetch(postURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "Kęstutis",
//         town: "Klaipėda",
//         hometown: "Klaipėda",
//       }),
//     });
//     const info = await response.json();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const putURL = "https://testapi.io/api/Marijus/resource/students/";

// const putStudentInfo = async (studentId) => {
//   try {
//     const response = await fetch(putURL + studentId, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "Kęstutis_Updated",
//         town: "Klaipėda",
//         hometown: "Klaipėda",
//         profession: "Student",
//         age: 31,
//       }),
//     });
//     const info = await response.json();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const deleteURL = "https://testapi.io/api/Marijus/resource/students";

// const deleteProduct = async (studentId) => {
//   try {
//     const response = await fetch(deleteURL + "/" + studentId, {
//       method: "DELETE",
//     });
//     console.log(response);
//     const info = await response.json();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

getStudentList();
// postStudentPost();
// putStudentInfo(14);
// deleteProduct();

const BASE_URL = "https://testapi.io/api/MarijusCafe/resource/students";

//! create and POST dummy
const dummyStudent = {
  name: "Jonas",
  town: "Vilnius",
  hometown: "Kaunas",
};

const postDummy = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dummyStudent),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//! DELETE dummy
const deleteDummy = async (dummyId) => {
  try {
    const response = await fetch(BASE_URL + "/" + dummyId, {
      method: "DELETE",
    });
    if (response.ok) console.warn(`User id: ${dummyId} deleted successfully`);
  } catch (err) {
    console.error(err);
  }
};

//? leiskit po vieną funkciją iš žemiau, kad pasižiūrėt ar viskas sueina ir įdėkit id iš response
//? į PUT ir POST;
// getStudents();
// postDummy();
// deleteDummy(13);
