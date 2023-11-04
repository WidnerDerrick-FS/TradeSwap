import React from 'react';
import './HomePage.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShippingFast, 
    faShieldAlt, 
    faThumbsUp, 
    faPhone, 
    faUserClock, 
    faUsers,
    faUserPlus, 
    faList, 
    faEye, 
    faExchangeAlt, 
    faComments, 
    faHandshake,
    faMobileAlt,
    faNewspaper,
    faQuestionCircle
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
        autoplaySpeed: 3500   // Slide changes every 2 seconds. Adjust as needed.
    };
    const latestNews = [
        {
            id: uuidv4(),
            title: "Grand Opening",
            content: "We're excited to announce the launch of TradeSwap! Join us on our mission to revolutionize the way you trade items online.",
        },
        {
            id: uuidv4(),
            title: "Launch Giveaway",
            content: "To celebrate our grand opening, we're giving away free Barter Points to the first 100 users who sign up and complete a trade!",
        },
        {
            id: uuidv4(),
            title: "Looking for Feedback",
            content: "As a new platform, your feedback is invaluable. Use the feedback button to let us know your thoughts and help us improve.",
        },
        {
            id: uuidv4(),
            title: "First 1000 Trades Insured",
            content: "To ensure a smooth start, we're offering insurance on the first 1000 approved trades made through our platform. Trade with confidence!",
        },
        {
            id: uuidv4(),
            title: "Join Our Community",
            content: "Our community is growing! Join our forums and social media groups to connect with other traders, share tips, and get exclusive updates.",
        },
        // ... Add more news articles as needed ...
    ];
    const faqs = [
        {
            id: uuidv4(),
            question: "How does TradeSwap ensure the quality of listed items?",
            answer: "We have a dedicated team reviewing each listing to maintain high standards and to ensure the descriptions match the item's condition.",
        },
        {
            id: uuidv4(),
            question: "What can I do if a trade doesn't go as planned?",
            answer: "Contact our support team immediately. We offer mediation services to resolve disputes and protect our users.",
        },
        {
            id: uuidv4(),
            question: "Is there a fee to use TradeSwap?",
            answer: "Signing up and listing items is completely free. We only charge a small transaction fee once a successful trade is completed.",
        },
        {
            id: uuidv4(),
            question: "How do I earn and use Barter Points?",
            answer: "You earn Barter Points with every successful trade. Points can be used for discounts on transaction fees or exclusive offers.",
        },
        {
            id: uuidv4(),
            question: "Can I trade anything on TradeSwap?",
            answer: "Almost anything can be traded on TradeSwap, as long as it's legal and conforms to our community guidelines.",
        },
        {
            id: uuidv4(),
            question: "How are disputes between traders handled?",
            answer: "We have a resolution center to facilitate discussions between parties. If needed, TradeSwap will step in to mediate and find a fair resolution.",
        },
        {
            id: uuidv4(),
            question: "What measures are in place to protect user privacy?",
            answer: "User privacy is a top priority. We use strong encryption and do not share personal information with third parties without consent.",
        },
    ];

    return (
        <div className="home-container">

            {/* Main Banner */}
            <div className="banner">
                <h1>Welcome to TradeSwap</h1>
                <p>The best platform for exchanging items. Physical or Digital!</p>
            </div>

            <div className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <FontAwesomeIcon icon={faShippingFast} size="3x" />
                        <p>Fast Trades</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                        <p>Secure Exchanges</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faThumbsUp} size="3x" />
                        <p>Trusted By Many</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faPhone} size="3x" />
                        <p>24/7 Support</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faUserClock} size="3x" />
                        <p>User-Friendly</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faUsers} size="3x" />
                        <p>Active Community</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
<div className="how-it-works-section">
    <h2>How TradeSwap Works:</h2>

    <Slider {...sliderSettings}>
        {/* Step 1 */}
        <div className="step">
            <FontAwesomeIcon icon={faUserPlus} size="3x" />
            <h3>Step 1: Register & Profile Setup</h3>
            <p>Join TradeSwap by signing up with your details. Customize your profile, set preferences, and get ready to start trading!</p>
        </div>

        {/* Step 2 */}
        <div className="step">
            <FontAwesomeIcon icon={faList} size="3x" />
            <h3>Step 2: List Items</h3>
            <p>Add the items you want to swap. Provide clear photos, describe the item's condition, and set your swapping preferences.</p>
        </div>

        {/* Step 3 */}
        <div className="step">
            <FontAwesomeIcon icon={faEye} size="3x" />
            <h3>Step 3: Discover & Browse</h3>
            <p>Explore the vast array of items listed by other users. Use filters to narrow down your search and find the perfect match.</p>
        </div>

        {/* Step 4 */}
        <div className="step">
            <FontAwesomeIcon icon={faExchangeAlt} size="3x" />
            <h3>Step 4: Propose a Swap</h3>
            <p>Found something interesting? Propose a swap to the item owner, suggesting your items in exchange.</p>
        </div>

        {/* Step 5 */}
        <div className="step">
            <FontAwesomeIcon icon={faComments} size="3x" />
            <h3>Step 5: Secure Communication</h3>
            <p>Chat securely with the other user. Discuss and finalize swap details, ensuring a safe and agreeable trade.</p>
        </div>

        {/* Step 6 */}
        <div className="step">
            <FontAwesomeIcon icon={faHandshake} size="3x" />
            <h3>Step 6: Swap & Review</h3>
            <p>Once both parties are satisfied, finalize the swap. After the trade, leave a review to share your experience.</p>
        </div>
            </Slider>
        </div>
          {/* Mobile App Promotion Section */}
          <div className="mobile-app-promotion-section">
                <h2>TradeSwap Mobile App - Coming Soon!</h2>
                <p>Experience the easiest way to swap items on the go. Our mobile app is on its way - keep an eye out for updates!</p>
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
                <Link to="/signup" className="signup-button">Sign Up</Link>
            </div>

        </div>
    );
}

export default HomePage;
