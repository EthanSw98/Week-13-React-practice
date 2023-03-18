
export default function Form(){

        return(
            <div className='card'>
                <h3>Log In</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="UN">Username</label>
                        <input type="text" className="form-control" id="UN" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='PW'>Password</label>
                        <input type="text" className='form-control' id='PW' placeholder='Password'></input>
                    </div>
                </form>
            </div>
        );

}