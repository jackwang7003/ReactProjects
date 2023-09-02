export default function Login() {
    return (
        <div className='d-felx justify-content-center align-terms-center bg-primary'>
            <div className="bg-white p-3 rounded-lg" >
              
             <form>
                <div className = 'mb-3'>
                   <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' className="form-control rounded-0" />
                </div>
                <div className = 'mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' className="form-control rounded-0" />
                </div>
                <button type='submit' className="btn btn-success w-25">Login</button>
                
                <div><a href='Register'>Don't have an account? Register here</a></div>
                
                    
                
             </form>
            </div>

        </div>
    );
}