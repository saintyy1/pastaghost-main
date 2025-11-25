import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Play, TrendingUp, Users, Clock } from "lucide-react";
import pastaChefLogo from "../../public/pasta-chef-logo.jpeg";
import kitchenVideo from "@/assets/kitchen-stream.mp4";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-2xl">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <nav className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold">
              <img 
                src={pastaChefLogo} 
                alt="PASTASOL Chef Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover ring-2 ring-amber-500/20" 
              />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                $PASTA
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#stream" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Live Stream
              </a>
              <a href="#mechanic" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                How It Works
              </a>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25 rounded-full px-6 font-semibold">
                Buy $PASTA
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
              <a 
                href="#stream" 
                className="block text-slate-400 hover:text-white transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Stream
              </a>
              <a 
                href="#mechanic" 
                className="block text-slate-400 hover:text-white transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25 rounded-full font-semibold">
                Buy $PASTA
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-400 font-medium">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    Live Kitchen • Real Business
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Real food.
                    <br />
                    <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                      Real profits.
                    </span>
                    <br />
                    Real token.
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    A pasta restaurant streaming 24/7. Your token holdings benefit directly from every sale. Watch it happen live.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl shadow-amber-500/30 rounded-full px-8 py-6 text-base font-semibold group">
                      Buy $PASTA on Pump.fun
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-8 py-6 text-base font-semibold backdrop-blur group">
                      <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Watch Live
                    </Button>
                  </div>
                </div>

                {/* Right Video */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                    <video 
                      key="hero-kitchen-video"
                      className="relative w-full aspect-square rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    >
                      <source src={kitchenVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-slate-400 text-sm">Live Streaming</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  50%
                </div>
                <div className="text-slate-400 text-sm">Profit to Buybacks</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-slate-400 text-sm">Transparent</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Different Section */}
        <section className="py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">$PASTA</span> is different
              </h2>
              <p className="text-lg text-slate-400">
                Not another meme coin. A real business with real value.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-10 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-3xl">
                      💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Real business, real value</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        We run an actual restaurant. Your investment goes toward real equipment, real ingredients, real staff. See the profit flow happen live.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-10 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-3xl">
                      📡
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Transparent & live</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        Our kitchen is streaming 24/7. When we make sales, you see it. When we buy back tokens, you see it. No hidden charts or fake metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-10 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-3xl">
                      ⚖️
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Built to last</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        We use buybacks—not risky gimmicks. As we make money, we burn tokens from circulation. The math is simple. It's legal. It works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stream Section */}
        <section id="stream" className="py-20 sm:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Watch the kitchen.
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Control the menu.
                  </span>
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Chef Image */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                    <img 
                      src={pastaChefLogo} 
                      alt="PASTASOL Chef" 
                      className="relative w-full aspect-square rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                    />
                  </div>
                </div>

                {/* Interaction List */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold mb-8">How you interact:</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Chat votes on what we cook next
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Big purchases trigger special kitchen moments
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl">👑</span>
                      </div>
                      <div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Top token holders get menu items named after them
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="mechanic" className="py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                A transparent, sustainable buyback mechanism that benefits all holders
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Flow */}
              <div className="relative space-y-8">
                {/* Connecting Line */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-amber-500/50 via-orange-500/50 to-amber-500/50 hidden sm:block" />

                {/* Step 1 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/30 z-10">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🍽️</span>
                        <h3 className="text-xl font-bold">Restaurant Sales</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        Customers order pasta from our live kitchen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/30 z-10">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">💰</span>
                        <h3 className="text-xl font-bold">Buyback Fund</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        50% of profits go to token buybacks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/30 z-10">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">📈</span>
                        <h3 className="text-xl font-bold">Token Purchase</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        We buy 50% of $PASTA tokens from the market and burn them
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/30 z-10">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🔥</span>
                        <h3 className="text-xl font-bold">Token Burn</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        50% Tokens removed, supply decreases
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Event Callout */}
              <div className="mt-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-2xl flex items-center justify-center">
                      <Clock className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">Daily Live Buyback Event</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Every evening at <span className="text-amber-400 font-semibold">8 PM UTC</span>, watch us execute the buyback live on stream. 100% transparent. 100% verifiable on-chain.
                      </p>
                    </div>
                    <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 rounded-full px-6 whitespace-nowrap">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Ready to join the
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  future of food tokens?
                </span>
              </h2>
              
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Start earning from real restaurant profits. Watch every transaction happen live.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl shadow-amber-500/30 rounded-full px-10 py-6 text-lg font-semibold group">
                  Buy $PASTA Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-10 py-6 text-lg font-semibold backdrop-blur">
                  Join Telegram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="text-slate-400 text-sm">
                Contract: <code className="bg-slate-900/50 px-3 py-1.5 rounded-lg text-amber-400 font-mono text-xs border border-white/5">EPASTAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>
              </p>
              <p className="text-slate-500 text-sm">
                &copy; 2025 $PASTA. We're just making good food and good tokens.
              </p>
              <p className="text-slate-600 text-xs max-w-2xl mx-auto">
                Disclaimer: Crypto is risky. Do your own research. We're not financial advisors.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;