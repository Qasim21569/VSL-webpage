import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrophyIcon, 
  FireIcon, 
  ChartBarIcon, 
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/solid';
import CountUp from 'react-countup';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ufc');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const sports = {
    ufc: {
      title: 'UFC Fighting',
      description: 'Expert analysis on every fight card with detailed breakdowns',
      winRate: '87%',
      picks: 156,
      svgPath: '/UFC_logo.svg'
    },
    nfl: {
      title: 'NFL Football', 
      description: 'Weekly picks covering spreads, totals, and player props',
      winRate: '83%',
      picks: 234,
      svgPath: '/nfl-1.svg'
    },
    baseball: {
      title: 'MLB Baseball',
      description: 'Daily picks during season with run line and total analysis',
      winRate: '81%',
      picks: 189,
      svgPath: '/mlb-1.svg'
    }
  };

  const testimonials = [
    {
      name: "Mike Rodriguez",
      profit: "$12,400",
      quote: "Best investment I've made. These picks are absolutely insane!",
      sport: "UFC"
    },
    {
      name: "Sarah Chen",
      profit: "$8,900", 
      quote: "Finally found someone who actually knows what they're talking about.",
      sport: "NFL"
    },
    {
      name: "Tony Williams",
      profit: "$15,200",
      quote: "Went from losing money to making serious profit. Game changer!",
      sport: "Baseball"
    }
  ];

  const faqs = [
    {
      question: "How do I receive the daily picks?",
      answer: "All picks are delivered via email and our exclusive member portal every morning by 9AM EST."
    },
    {
      question: "What sports do you cover?",
      answer: "We specialize in UFC, NFL, and MLB with detailed analysis for each pick including reasoning and confidence levels."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! 30-day money-back guarantee if you're not completely satisfied with our service."
    },
    {
      question: "How many picks do I get per month?",
      answer: "You'll receive 25-30 premium picks per month across all three sports, plus bonus playoff picks."
    }
  ];

      return (
      <div className="bg-black text-white overflow-x-hidden">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0">
          {/* Light purple accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>
        </div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Top Badge */}
          

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">CASH</span> IN WITH <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">CONFIDENCE</span> WITH<br />
            OUR PATENTED <span className="text-white">VSL-SYSTEM</span><span className="text-xs sm:text-sm align-super text-purple-400">™</span>
          </motion.h1>

          

          

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-10 max-w-2xl mx-4 sm:mx-auto border border-purple-400/60 shadow-2xl shadow-purple-500/30"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              <span className="bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">$300/MO</span> FOR DAILY SPORTS BET PICKS
            </div>
            <div className="text-purple-100 text-lg sm:text-xl font-bold">
              UFC / NFL / BASEBALL
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl flex items-center space-x-3 group hover:from-purple-500 hover:to-purple-400 transition-all w-full sm:w-auto max-w-sm sm:max-w-none"
            >
              <span>GET INSTANT ACCESS</span>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center mb-8">
              <StarIcon className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-purple-400 font-bold text-lg">We are TOP RATED on Trustpilot</span>
            </div>
            
            <div className="bg-gradient-to-r from-purple-950/80 to-black/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-4 sm:mx-auto border border-purple-500/40 shadow-2xl shadow-purple-500/20">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <span className="text-white font-black text-lg sm:text-xl">VSL</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Very Sports Likely</h3>
                    <p className="text-sm sm:text-base text-gray-400">Reviews 127 • Excellent</p>
                    <div className="flex text-purple-400 mt-1">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3 h-3 sm:w-4 sm:h-4" />)}
                    </div>
                    <p className="text-purple-400 font-semibold text-sm sm:text-base">4.8</p>
                  </div>
                </div>
                <div>
                  <div className="text-gray-300 mb-2">
                    <span className="font-semibold">Category</span>
                  </div>
                  <p className="text-gray-400">
                    Very Sports Likely is <span className="text-white font-bold">1 out of 3 best</span> companies in the category
                  </p>
                  <p className="text-purple-400 font-semibold">Online Sports Betting Vendor</p>
                  <p className="text-gray-400">on Trustpilot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Returns Section */}
      <section className="py-20 bg-purple-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                          <h2 className="font-display text-5xl md:text-6xl font-black mb-6 tracking-wider">
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">OUR RETURNS</span>
              </h2>
            <p className="text-xl text-gray-300">Real client results from our VSL-SYSTEM™</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-4 sm:mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl p-8 border-2 border-purple-400/40 relative overflow-hidden shadow-2xl shadow-purple-500/20"
            >
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                2023/2024
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">UFC/NFL/BASEBALL</h3>
                <h4 className="text-2xl sm:text-3xl font-black text-purple-300">RETURNS</h4>
                <div className="bg-purple-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mt-4 inline-block">
                  ACTUAL CLIENTS
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { investment: '$200', return: '$45,488' },
                  { investment: '$500', return: '$113,270' },
                  { investment: '$1,000', return: '$227,440' },
                  { investment: '$5,000', return: '$1,137,200' },
                  { investment: '$10,000', return: '$2,274,400' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-black/50 p-4 rounded-lg border border-purple-500/20">
                    <span className="text-white font-bold text-lg">{item.investment}</span>
                    <span className="text-purple-300 font-bold text-lg">{item.return}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-700/30 to-purple-900/30 rounded-2xl p-8 border-2 border-purple-400/40 relative overflow-hidden shadow-2xl shadow-purple-500/20"
            >
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                2023/2024
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">PREMIUM PICKS</h3>
                <h4 className="text-2xl sm:text-3xl font-black text-purple-300">RETURNS</h4>
                <div className="bg-purple-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mt-4 inline-block">
                  ACTUAL CLIENTS
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { investment: '$200', return: '$39,300' },
                  { investment: '$500', return: '$98,500' },
                  { investment: '$1,000', return: '$197,000' },
                  { investment: '$5,000', return: '$985,000' },
                  { investment: '$10,000', return: '$1,970,000' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-black/50 p-4 rounded-lg border border-purple-500/20">
                    <span className="text-white font-bold text-lg">{item.investment}</span>
                    <span className="text-purple-300 font-bold text-lg">{item.return}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-20 bg-gradient-to-b from-purple-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              OUR <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">VSL-SYSTEM™</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-4 sm:mx-auto">
              Patented methodology that consistently identifies high-probability betting opportunities across multiple sports
            </p>
          </motion.div>

          <div className="flex justify-center mb-12 px-4">
            <div className="bg-gray-800 rounded-full p-2 flex space-x-1 sm:space-x-2 overflow-x-auto">
              {Object.keys(sports).map((sport) => (
                <button
                  key={sport}
                  onClick={() => setActiveTab(sport)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base whitespace-nowrap ${
                    activeTab === sport 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {sport.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-purple-950/80 to-black/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/40 shadow-2xl shadow-purple-500/20 mx-4 sm:mx-0"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="mb-6 flex justify-start">
                  <img 
                    src={sports[activeTab as keyof typeof sports].svgPath} 
                    alt={sports[activeTab as keyof typeof sports].title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-300">
                  {sports[activeTab as keyof typeof sports].title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                  {sports[activeTab as keyof typeof sports].description}
                </p>
                <div className="flex space-x-8">
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {sports[activeTab as keyof typeof sports].winRate}
                    </div>
                    <div className="text-gray-400">Win Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      {sports[activeTab as keyof typeof sports].picks}+
                    </div>
                    <div className="text-gray-400">Winning Picks</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-purple-500/30">
                <h4 className="text-lg sm:text-xl font-bold mb-4 text-purple-300">Recent Wins</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-purple-600/30 p-3 rounded-lg border border-purple-500/30">
                    <span>Over 2.5 Rounds</span>
                    <span className="text-purple-300 font-bold">✓ WON</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-600/30 p-3 rounded-lg border border-purple-500/30">
                    <span>Moneyline +150</span>
                    <span className="text-purple-300 font-bold">✓ WON</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-600/30 p-3 rounded-lg border border-purple-500/30">
                    <span>Spread -3.5</span>
                    <span className="text-purple-300 font-bold">✓ WON</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              REAL MEMBERS, <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">REAL PROFITS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">See what our members are saying about their success</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="font-bold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-purple-400 text-xs sm:text-sm">{testimonial.sport} Specialist</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="text-xl sm:text-2xl font-bold text-purple-300">
                  {testimonial.profit} <span className="text-xs sm:text-sm text-gray-400">profit</span>
                </div>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-purple-950/40 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Get Your <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">All-Access Pass</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              One simple plan. Everything you need to start winning with confidence. No hidden fees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-950/80 to-black/90 border-2 border-purple-500 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden max-w-2xl mx-4 sm:mx-auto shadow-2xl shadow-purple-500/30"
          >
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Best Value
            </div>
            
            <div className="text-left mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pro Membership</h3>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2">
                $300<span className="text-xl sm:text-2xl text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 text-base sm:text-lg mb-6">
                Daily sports bet picks for UFC, NFL, & Baseball. Maximize your profits with our expert team.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(139,92,246,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg mb-8 hover:from-purple-500 hover:to-purple-400 transition-all"
            >
              Start Winning Today
            </motion.button>

            <div className="space-y-4 text-left">
              <div className="space-y-3">
                {[
                  'Daily Sports Bet Picks (UFC/NFL/Baseball)',
                  'Full Access to our Patented VSL-SYSTEM™',
                  'Expert Analysis & In-depth Research',
                  'Exclusive Community Access',
                  '24/7 Priority Support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-6 h-6 text-purple-400" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-purple-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              FREQUENTLY <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">ASKED</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">Everything you need to know about our service</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl border border-purple-500/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 transform rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-6 pt-0 text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-t from-purple-900/50 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              START YOUR <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">WINNING JOURNEY</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Join our exclusive community of serious bettors who trust the VSL-SYSTEM™ for consistent profits. 
              Your success story starts today.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(147,51,234,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl mb-6 hover:from-purple-500 hover:to-purple-400 transition-all flex items-center space-x-3 mx-auto border-2 border-purple-400/50 shadow-2xl shadow-purple-500/40"
            >
              <TrophyIcon className="w-6 h-6" />
              <span>SECURE YOUR MEMBERSHIP</span>
            </motion.button>
            
            <p className="text-gray-400">
              ⚡ Instant access • 💰 Risk-free guarantee • 🔒 Secure payment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent mb-4">
            VERY SPORTS LIKELY
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Very Sports Likely. All rights reserved. | 
            <span className="text-purple-400"> Privacy Policy</span> | 
            <span className="text-purple-400"> Terms of Service</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;