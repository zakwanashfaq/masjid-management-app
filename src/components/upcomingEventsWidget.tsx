

export default function UpcomingEventsWidget() {
    return (
        <>
            <div className='text-light'>
                <div className='pb-4'>
                    Upcoming Events
                </div>
                <div className="d-flex flex-column">
                    <div className="card bg-dark">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-primary bg-opacity-25 text-light border-dark"><EventWidget /></li>
                            <li className="list-group-item bg-primary bg-opacity-50 text-light border-dark"><EventWidget /></li>
                            <li className="list-group-item bg-primary bg-opacity-25 text-light border-dark"><EventWidget /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


function EventWidget() {
    return (
        <div className="text-light mb-3">
            <div className="card-body">
                <h5 className="card-title fs-6">Ghast</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer border-dark">5:30pm, 12 Novemeber 2023</div>
        </div>
    );
}