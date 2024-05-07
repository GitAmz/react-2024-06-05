import { Dish } from "../dish/component";
import { Review } from "../review/component";
import styles from './styles.module.css'

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <ul className={styles.ul}>
        {restaurant.menu.map((dish) => (
          <Dish  dish={dish} />
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul className={styles.ul}>
        {restaurant.reviews.map((review) => (
          <Review  review={review}></Review>
        ))}
      </ul>
    </div>
  );
};
