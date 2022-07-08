import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout';

//import { DarkLayout } from '../components/layouts/DarkLayout';

export default function PricinPage() {
    return(
        <>
            <h1>Pricin Page</h1>
                <h1 className={'title'}>
                    Ir a <Link href="/">Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '}
                <code className={'code'}>pages/Pricin.js</code>
                </p>
        </>
    );
}


PricinPage.getLayout = function getLayout( page ) {
    return(
        <MainLayout>
                { page }
        </MainLayout>
    )
}