import * as motion from "framer-motion/client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"



export default function Hero() {
    return (
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="container px-4 py-6 sm:py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex-1 w-full order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] w-full max-w-[500px] md:max-w-xl lg:max-w-2xl mx-auto">
              <Image
                src="/placeholder.jpg"
                alt="Law Office"
                fill
                priority
                className="rounded-lg shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 500px, (max-width: 768px) 32rem, (max-width: 1024px) 36rem, 42rem"
              />
            </div>
          </motion.div>
  
          {/* Text Content Second */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold tracking-tight text-primary">
              Advocating for Your Rights with Integrity and Expertise
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-prose mx-auto md:mx-0">
              Dedicated legal professionals committed to achieving the best outcomes for our clients.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pt-2"
            >
              <Button 
                size="lg" 
                className="group text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:translate-y-[-2px]"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }