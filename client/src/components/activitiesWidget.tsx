
export default function ActivitiesWidget() {
    return (
        <>
            <div className=''>
                <div className='pb-4 fs-3'>
                    Activities
                </div>
                <div className="card-group">
                    <div className="card bg-primary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title">5 Times Prayer</h5>
                            <p className="card-text">Everyday five time prayer is held in jamat at the specific times above.</p>

                        </div>
                    </div>
                    <div className="card bg-secondary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title">Quran Classes</h5>
                            <p className="card-text">Classes held every other day to teach kids arabic by QuttubNL.</p>
                        </div>
                    </div>
                    <div className="card bg-primary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title">Monthly Visitations</h5>
                            <p className="card-text">Visiting brothers from our local community and bringing them for salah in congregation.</p>
                        </div>
                    </div>
                    <div className="card bg-secondary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title">Taleem</h5>
                            <p className="card-text">Some brothers will be reading hadis after magrib/isha prayers</p>
                        </div>
                    </div>
                    <div className="card bg-primary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title">Weekly Speech</h5>
                            <p className="card-text">A reminder given on stories of sahabah, hadiths and iman on weekends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}