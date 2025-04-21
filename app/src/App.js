// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function ProductCategoryRow({category}) {
  return(
    <tr>
      <th colSpan = "2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow ({product}){
  const name = product.stocked ? product.name :
    <span style = {{color: 'red'}}>
      {product.name}
    </span>;
  
  return(
    <tr>
      <td>
        {name}
      </td>
      <td>
        {product.price}
      </td>
    </tr>
  );
}

function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}/>
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function SearchBar(){
  return(
    <from>
      <input type="text" placeholder ="search..."/>
      <label>
        <input type ="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </from>
  );
}

function FilterableProductTable({products}) {
  return(
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}