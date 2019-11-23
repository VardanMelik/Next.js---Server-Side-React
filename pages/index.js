import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Sports Book Data</h1>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
)

Index.getInitialProps = async () => {
    const res  = await fetch('http://lsports.melkonian.nl/data/inplay/getsnapshot.json')
    const data = await res.json()

    return {
        bpi: data
    }
}

export default Index