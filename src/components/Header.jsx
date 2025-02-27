import {Routes} from 'react-router-dom'

function Nav () {
    return (
        <main>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<App />} >📔</Route>
                    <Route path="/about" element={<About />} >About</Route>
                  </Routes>
                </BrowserRouter>
            
                <h1>Dear human, you have been slacking. I have created this Task Manager to make things simpilar for you. Use it. -sincerly 🐾</h1>
        </main>
    )
}

export default Nav