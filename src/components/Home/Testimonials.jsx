import {Link} from 'react-router-dom'

const Testimonials = () => {
  return (
    <section>
        <div>
            <div>
                <h2>Check out what our clients are saying about us</h2>
                <p>So what are you waiting for join us now</p>
                <Link to={"/"}>Get started</Link>
            </div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>John Eze</h3>
                        <p>
                        &quote;Transformative! This app made managing my diabetes seamless. Personalized plans, expert guidance, and a supportive community. Grateful for this game-changer!&quote;
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>Sarah Alex</h3>
                        <p>&quote;As a long-time diabetes warrior, Diacura has revolutionized my approach. The comprehensive tracking, expert advice, and vibrant community inspire me daily.&quote;</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials