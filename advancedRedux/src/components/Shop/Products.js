import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:"p1", 
    price: 6,
    title: 'book',
    description: 'the first book!'
  },
  {
    id:"p2", 
    price: 13,
    title: 'book 1',
    description: 'the second book!'
  }
]
const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(product => {
            return <ProductItem product={product} key={product.id}/>
          })
        }
        
      </ul>
    </section>
  );
};

export default Products;
