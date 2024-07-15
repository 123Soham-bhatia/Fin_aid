import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer';
import FAQ from './FAQ';
import TextImageComponent from './TextImageComponent';
import FeedbackForm from './FeedbackForm';

const home = () => {
    return <div>
<Navbar />
<HomePage />
<TextImageComponent />
<FeedbackForm />
<FAQ />
<Footer />


    </div>;
}

export default home;