import React from 'react';
import './HomePage.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearchDollar, 
    faBriefcase, 
    faUserTie, 
    faLaptopCode, 
    faPeopleCarry, 
    faCommentsDollar, 
    faTasks, 
    faSearch,
    faMobileAlt,
    faNewspaper,
    faQuestionCircle,
    faUserPlus,
    faFileContract,
    faDollarSign,
    faComments,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

// React Slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function HomePage() {
    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
    };
    const latestNews = [
        {
            id: uuidv4(),
            title: "Welcome to WiredIn!",
            content: "We're thrilled to unveil WiredIn – your new go-to hub for freelancing excellence. Let's get to work!",
        },
        {
            id: uuidv4(),
            title: "Early Bird Perks 🚀",
            content: "The first 100 freelancers to join us will receive exclusive benefits and early access to premium features. Spread the word!",
        },
        {
            id: uuidv4(),
            title: "Your Opinion Matters",
            content: "We're wired into your needs! Use the feedback button to share your thoughts and help us create the ultimate freelancing toolkit.",
        },
        {
            id: uuidv4(),
            title: "Insured First Projects",
            content: "Jump in with confidence – your first projects on WiredIn come with our insurance guarantee. We've got your back!",
        },
        {
            id: uuidv4(),
            title: "Join the Community",
            content: "Connect, collaborate, and create with fellow freelancers on our forums and social media channels. Welcome home!",
        },
    ];
    
    const faqs = [
        {
            id: uuidv4(),
            question: "How does WiredIn ensure fair opportunities?",
            answer: "We're dedicated to a balanced marketplace – with algorithm checks and community oversight, everyone gets their shot.",
        },
        {
            id: uuidv4(),
            question: "Need help with a project hiccup?",
            answer: "Our support team is on standby to assist with any issues, ensuring smooth sailing from start to finish.",
        },
        {
            id: uuidv4(),
            question: "What are WiredIn's fees?",
            answer: "Joining is free, and we only charge a transparent service fee on completed projects. More work means more rewards.",
        },
        {
            id: uuidv4(),
            question: "How do I benefit from the WiredIn network?",
            answer: "Expand your professional network, collaborate on projects, and grow your freelance business with our suite of tools and resources.",
        },
        {
            id: uuidv4(),
            question: "What types of projects can I find or post on WiredIn?",
            answer: "From web design to copywriting, WiredIn is a bustling marketplace for a wide range of professional services.",
        },
        {
            id: uuidv4(),
            question: "How does WiredIn handle disputes?",
            answer: "Our dispute resolution process is fair and fast, ensuring that both clients and freelancers are heard and a resolution is reached swiftly.",
        },
        {
            id: uuidv4(),
            question: "What about confidentiality and data protection?",
            answer: "WiredIn takes privacy seriously, employing stringent security measures to safeguard all user data.",
        },
    ];
    

    return (
        <div className="home-container">

            {/* Main Banner */}
            <div className="banner">
                <h1>Welcome to WiredIn</h1>
                <p>Connect with top talent and find freelance work opportunities!</p>
                {/* Add a call-to-action Link component for signup */}
                <Link to="/signup" className="signup-button">Sign Up Now! <FontAwesomeIcon icon={faArrowRight} size="XL" /></Link>
            </div>


            <div className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <FontAwesomeIcon icon={faSearchDollar} size="3x" />
                        <p>Competitive Rates</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faBriefcase} size="3x" />
                        <p>Diverse Opportunities</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faUserTie} size="3x" />
                        <p>Professional Network</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                        <p>Remote Work</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faPeopleCarry} size="3x" />
                        <p>Collaborative Environment</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCommentsDollar} size="3x" />
                        <p>Negotiable Terms</p>
                    </div>
                </div>
            </div>

           {/* How It Works Section */}
<div className="how-it-works-section">
    <h2>How It Works:</h2>

    <Slider {...sliderSettings}>
        {/* Step 1 */}
        <div className="step">
            <FontAwesomeIcon icon={faUserPlus} size="3x" />
            <h3>Step 1: Sign Up & Profile Creation</h3>
            <p>Create your WiredIn account and set up a profile showcasing your skills and experience. This is your first step to connecting with clients!</p>
        </div>

        {/* Step 2 */}
        <div className="step">
            <FontAwesomeIcon icon={faSearch} size="3x" />
            <h3>Step 2: Browse Projects</h3>
            <p>Look through the project listings to find work that suits your expertise. Filter searches to narrow down potential jobs.</p>
        </div>

        {/* Step 3 */}
        <div className="step">
            <FontAwesomeIcon icon={faFileContract} size="3x" />
            <h3>Step 3: Send Proposals</h3>
            <p>Found a project you're interested in? Craft a compelling proposal to pitch your services to potential clients.</p>
        </div>

        {/* Step 4 */}
        <div className="step">
            <FontAwesomeIcon icon={faComments} size="3x" />
            <h3>Step 4: Negotiate Terms</h3>
            <p>Once your proposal is accepted, discuss project details, timelines, and terms before starting the work.</p>
        </div>

        {/* Step 5 */}
        <div className="step">
            <FontAwesomeIcon icon={faTasks} size="3x" />
            <h3>Step 5: Work on Projects</h3>
            <p>Start working on the projects. WiredIn provides tools to help you manage tasks and communicate with clients seamlessly.</p>
        </div>

        {/* Step 6 */}
        <div className="step">
            <FontAwesomeIcon icon={faDollarSign} size="3x" />
            <h3>Step 6: Get Paid & Leave Feedback</h3>
            <p>After completing the work, receive payment through our secure platform. Leave feedback for the client and build your reputation!</p>
        </div>
    </Slider>
</div>


           {/* Mobile App Promotion Section */}
            <div className="mobile-app-promotion-section">
                <h2>WiredIn Mobile App - Coming Soon!</h2>
                <p>Manage your freelance gigs on the go. Our mobile app will make it easy to connect, collaborate, and complete projects anywhere, anytime. Stay tuned for the release!</p>
                <FontAwesomeIcon icon={faMobileAlt} size="3x" />
            </div>


             {/* Latest News Section as a Slider */}
             <div className="latest-news-section">
                <h2>Latest News <FontAwesomeIcon icon={faNewspaper} size="XL" /></h2>
                <Slider {...sliderSettings}>
                    {latestNews.map(news => (
                        <div key={news.id} className="news-article">
                            <h3>{news.title}</h3>
                            <p>{news.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>

             {/* Expanded FAQ Section */}
             <div className="faq-section">
                <h2>Frequently Asked Questions <FontAwesomeIcon icon={faQuestionCircle} size="XL" /></h2>
                {faqs.map(faq => (
                    <div key={faq.id} className="faq">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action Banner */}
            <div className="banner">
                <h1>Get Started Now!</h1>
                <p>Join our community and start swapping items.</p>
                <Link to="/signup" className="signup-button">Sign Up <FontAwesomeIcon icon={faArrowRight} size="XL" /></Link>
            </div>

        </div>
    );
}

export default HomePage;
