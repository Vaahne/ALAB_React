import './common.css';
import blogImage from '../images/blog-image-1.jpg';

export default function Article1(){
    
    return (
    <article>
            <time>11/12/20</time>
            <h1>On the Street in Brooklyn </h1>
            <img src={blogImage} alt="First Blog"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi aliquam itaque quidem ratione inventore culpa ut quia nihil maiores, sit sed minima temporibus molestias aperiam similique doloremque? Est, in.</p>
            <a class="continues" href="">Continues...</a>
    </article>);
}