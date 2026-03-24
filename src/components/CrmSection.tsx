import { motion } from "framer-motion";
import { LayoutDashboard, Target, HardDrive, MessageSquare, TrendingUp, Headset } from "lucide-react";

const CrmSection = () => {
  return (
    <section id="crm" className="section-padding relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Command Center
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            Next Level CRM
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Manage, track, and store customer data with robust systems’
            integrations and tailor-made dashboards that put your needs first.
          </p>
        </motion.div>

        {/* Bento Grid: Features & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          
          {/* Left Column: Features */}
          <div className="flex flex-col gap-6 justify-center">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card/50 border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <LayoutDashboard className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Elite Customer Data Dashboard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organises customers and their corresponding data points such as contact details, actions, history, and preferences inside a beautifully native interface.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card/50 border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Target className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generates actionable reports and insights on customer behavior, sales performance, and team productivity, aiding decision-making and rapid strategy refinement.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card/50 border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <HardDrive className="text-purple-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Customer Data Storage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secure, high-performance cloud storage architecture with absolutely no downtime. Scalable infrastructure built for massive parallel processing.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Single Minimal Visual */}
          <div className="flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-[500px] lg:h-full min-h-[400px] rounded-3xl border border-white/5 overflow-hidden relative group shadow-2xl bg-gradient-to-b from-card/20 to-transparent"
            >
              <img 
                src="/crm.jpg" 
                alt="Elite CRM Dashboard" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Subtle Floating Label */}
              <div className="absolute bottom-12 left-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="px-5 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 text-white font-display text-sm flex items-center gap-3 shadow-2xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Effortless Data Synergy
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold">
            Benefits you expect from best in class CRM tools:
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="text-primary w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold mb-3">Improves Communication</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helps manage customer interactions across multiple channels (email, phone, chat, WhatsApp etc.), ensuring timely follow-ups and personalised engagement.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
              <TrendingUp className="text-blue-500 w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold mb-3">Tracks Sales and Marketing</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Monitors sales activities, tracks leads, and automates marketing tasks strictly to nurture prospects automatically through the sales funnel.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card/40 border border-border/50 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
              <Headset className="text-emerald-500 w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold mb-3">Enhances Customer Service</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Provides tools for accurately managing support tickets, resolving customer issues, and maintaining an intelligent knowledge base for quicker problem resolution.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CrmSection;
