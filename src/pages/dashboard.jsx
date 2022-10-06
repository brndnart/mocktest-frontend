import Head from 'next/head'
import DashboardComponent from '../components/Dashboard/Dashboard'

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <DashboardComponent />
        </>
    )
}
