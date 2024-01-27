
export default function ActivitiesWidget() {
    return (
        <>
            <div className='text-light'>
                <div className='pb-4 fs-4'>
                    Activities
                </div>
                <div className="row">
                    <div className="col-sm-3 mb-4">
                        <div className="card bg-primary text-light">
                            <div className="card-body">
                                <h5 className="card-title">5 Times Prayer</h5>
                                <p className="card-text">Everyday five time prayer is held in jamat at the specific times above.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card bg-primary text-light">
                            <div className="card-body">
                                <h5 className="card-title">Quran Classes</h5>
                                <p className="card-text">Classes held every other day to teach kids arabic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card bg-primary text-light">
                            <div className="card-body">
                                <h5 className="card-title">Monthly Visitations</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4">
                        <div className="card bg-primary text-light">
                            <div className="card-body">
                                <h5 className="card-title">Taleem</h5>
                                <p className="card-text">Some brothers will be reading hadis after magrib/isha prayers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}