/* try {
  console.log('start');
  console.log(value);
  console.log('end');
} catch (e) {
  console.log('Произошла ошибка!!!');
} */

/* console.log('Start');
setTimeout(() => {
  console.log("Я выполнился через 3 сек");
}, 3000);
console.log('end'); */

/* console.log('Start');
setTimeout(() => {
  console.log(value); //err
}, 3000);
console.log('end'); */

/* try {
console.log('Start');
setTimeout(() => {
  console.log(value); //не выполнится т.к. используется отложенный вызов
}, 3000);
console.log('end');
} catch (error) {
  console.log('Произошла ошибка!!!'); }*/

/* try {
    console.log('Start');
    setTimeout(() => {
      try {
      console.log(value); }
      catch (e) {
        console.log("ERROR");
      }
    }, 3000);
    console.log('end');
    } catch (error) {
      console.log('Произошла ошибка!!!');
    } */

//генерирование ошибки
/* const a = 10;
try {
  if (a === 10) {
    throw new Error("My custom error");
  }
  console.log(a);
} catch (e) {
  console.log(e.name, e.message);
} */

/* const a = 10;
try {
  try {
    if (a === 10) {
      throw new SyntaxError("My custom error");
    }
    console.log(a);
  } catch (e) {
    if (e.name === "Error") {
      console.log(e.name, e.message);
    } else {
      throw new Error("Обработали ошибку");
    }
  }
} catch (e) {
  console.log(e.message);
}
 */

//XMLHttpRequest

/* const baseURL = "https://reqres.in/api";
const getResponseData = (data) => {
  console.log(data, "Done");

  const element = document.createElement("div");
  element.style.backgroundColor = "red";
  element.style.fontSize = "40px";

  element.innerHTML = `Пользователь с id = ${data.id}, создан в ${data.createdAt}`;

  document.body.appendChild(element);
};
/* const getRequest = (page, callback) => {

  const xhr = new XMLHttpRequest();

  xhr.open(`GET`, `${baseURL}/users?page=${page}`);

  xhr.send();

  xhr.responseType = "json";

  xhr.onload = function () {

    callback(xhr.response.data);
  };
}; */

/* const postRequest = (body, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${baseURL}/users`);

  xhr.send(JSON.stringify(body));

  xhr.responseType = "json";

  xhr.onload = function () {
    callback(xhr.response);
  };
};
postRequest({ name: "Neo", job: "Men" }, getResponseData); */

/* //fetch

const baseURL = "https://reqres.in/api";
const getResponseData = (data) => {
  console.log(data, "Done");

  const element = document.createElement("div");
  element.style.backgroundColor = "red";
  element.style.fontSize = "40px";

  element.innerHTML = `Пользователь с id = ${data.id}, создан в ${data.createdAt}`;

  document.body.appendChild(element);
};

const postRequestXMR = (body, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${baseURL}/users`);

  xhr.send(JSON.stringify(body));

  xhr.responseType = "json";

  xhr.onload = function () {
    callback(xhr.response);
  };
};

postRequestXMR({ name: "Neo", job: "Men" }, getResponseData);
const getRequest = async (page) => {
  const res = await fetch(`${baseURL}/users?page=${page}`);
  const data = await res.json();
  console.log(data);
};
getRequest(1);

const postRequest = async (body) => {
  const res = await fetch(`${baseURL}/users`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();
  getResponseData(data);
};
postRequest({ name: "Neo", job: "Men" });
 */