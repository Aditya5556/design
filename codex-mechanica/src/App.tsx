import { motion, useReducedMotion } from 'motion/react';
import { INVENTIONS } from './data/inventions';
import { InventionImage } from './components/InventionImage';
import { SchematicOverlay } from './components/SchematicOverlay';

export default function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-stone-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-16 sm:space-y-24">
        {INVENTIONS.map((plate, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.figure
              key={plate.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Pure High-Resolution 16:9 Sketch Image with Moving Mechanisms */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#EFEAE0] border border-stone-300/90 shadow-[0_24px_60px_-32px_rgba(28,25,23,0.4)]">
                <motion.div
                  className="w-full h-full"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: isEven ? [-4, 4, -4] : [4, -4, 4],
                          scale: [1.008, 1.022, 1.008],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 7 + index * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                  }
                >
                  <InventionImage
                    src={plate.imagePath}
                    alt={plate.imageAlt}
                    title={plate.title}
                    plateNumber={`0${index + 1}`}
                  />
                </motion.div>

                <SchematicOverlay kind={plate.schematic} />
              </div>

              {/* Synchronized Moving Motivational Quote Directly Beneath Plate */}
              <figcaption className="mt-6 sm:mt-8 max-w-3xl text-center px-4">
                <motion.blockquote
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 5.8 + index * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                  }
                  className="font-serif italic text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug text-stone-900"
                >
                  “{plate.quote}”
                </motion.blockquote>
                <p className="mt-2.5 text-sm font-medium tracking-wide text-stone-600">
                  — {plate.quoteAuthor}
                </p>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </main>
  );
}
