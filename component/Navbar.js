import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h6>GamesKart</h6>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;