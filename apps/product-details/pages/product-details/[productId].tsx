import styles from './index.module.css';
import { Header } from '@shoppers-hub/header';
import { useRouter } from 'next/router';

export function ProductDetails() {
    const router = useRouter();
    const routerParams = router.query;
    return (
        <>
            <Header />
            <h1 className={'font-bold'}>Product Details - {routerParams?.productId}</h1>
        </>
    )
}

export default ProductDetails;