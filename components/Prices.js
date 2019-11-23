class Prices extends React.Component{
    state = {
        currency: 'USD'
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Sport Type:</strong> <span className="badge badge-primary">{this.props.bpi.Body.Events[0].Fixture.Sport.Name}</span>, 
                        <strong>Location:</strong>  <span className="badge badge-primary">{this.props.bpi.Body.Events[0].Fixture.Location.Name}</span>,
                        <strong>Id:</strong> <span className="badge badge-primary">{this.props.bpi.Body.Events[0].Fixture.League.Id}</span>, 
                        <strong>League</strong> <span className="badge badge-primary">{this.props.bpi.Body.Events[0].Fixture.League.Name}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Prices