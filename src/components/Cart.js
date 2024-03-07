import { useRef } from 'react';
import { OnClick } from '../hooks/OnClick';
import productImage from '../assets/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/icon-delete.svg';

function Cart({ setOpenCart, cartProductQuantity, setCartProductQuantity }) {
	// Create a ref that we add to the element for which we want to detect outside clicks
	const ref = useRef();
	// Call hook passing in the ref and a function to call on outside click
	OnClick(ref, () => setOpenCart(false));

	return (
		<div className='cart' ref={ref}>
			<div className='cart__heading'>
				<h4 className='fs-400 fw-700 clr-neutral-700'>Cart</h4>
			</div>
			<div className='cart__items grid'>
				{cartProductQuantity === 0 ? (
					<p className='fs-400 fw-700 clr-neutral-700 m-auto'>Your cart is empty</p>
				) : (
					<div className='cart__item flex'>
						<div className='item flex'>
							<img src={productImage} alt='' />
							<div className='item__info'>
								<p className='item__name fw-400 fs-400 line-height-500 clr-neutral-700'>
									Fall Limited Edition Sneakers
								</p>
								<span className='d-inline-block fw-400 fs-400 line-height-500 clr-neutral-700'>
									$125.00 x {cartProductQuantity}
								</span>{' '}
								<span className='fw-700 fs-400 line-height-500 clr-neutral-900'>
									${125 * cartProductQuantity}.00
								</span>
							</div>
							<img onClick={() => setCartProductQuantity(0)} src={deleteIcon} alt='' />
						</div>

						<button className='btn flex fw-700 fs-400'>Checkout</button>
					</div>
				)}
			</div>
		</div>
	);
}
export default Cart;