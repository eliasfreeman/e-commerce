import './sidebar.js';
import { getElement } from './store.js';

const fetchProduct = async function () {
  const param = new URLSearchParams(window.location.search);
  const id = param.get('id');
  //   console.log(id);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
};

const init = async () => {
  const data = await fetchProduct();
  console.log(data);
  displaySingleProduct(data);
};

const displaySingleProduct = function (data) {
  let html = ` <img
          src="${data.image}"
          alt=""
          class="singleproduct-img" />
        <div class="singleProduct-text">
          <h2>${data.title}</h2>
          <p>${data.category.toUpperCase()}</p>
          <p>
           ${data.description}
          </p>
          <div>
            <p>$${data.price}</p>
            <button class="addCart" data-id="${data.id}">add to cart</button>
          </div>
        </div>`;

  const element = getElement('.singleproduct-center');
  element.innerHTML = html;
};

init();