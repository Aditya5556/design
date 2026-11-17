import { motion, useReducedMotion } from 'motion/react';
import { SchematicKind } from '../data/inventions';

interface SchematicOverlayProps {
  kind: SchematicKind;
}

/**
 * Pure SVG kinetic motion layer aligned to the 16:9 (1600x900) sketches
 * so mechanical & tech elements inside each drawing visibly animate.
 */
export function SchematicOverlay({ kind }: SchematicOverlayProps) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 900"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {kind === 'wright-flyer' && (
          <g>
            {/* Spinning front propeller arc */}
            <motion.g
              style={{ originX: '520px', originY: '466px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="520"
                cy="466"
                r="142"
                stroke="#1B365D"
                strokeWidth="2"
                strokeDasharray="24 34"
                strokeOpacity="0.65"
              />
              <line
                x1="520"
                y1="324"
                x2="520"
                y2="608"
                stroke="#B45309"
                strokeWidth="2.2"
                strokeOpacity="0.55"
              />
            </motion.g>

            {/* Spinning landing wheels */}
            <motion.g
              style={{ originX: '574px', originY: '666px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="574"
                cy="666"
                r="34"
                stroke="#1B365D"
                strokeWidth="2"
                strokeDasharray="8 7"
                strokeOpacity="0.7"
              />
            </motion.g>
            <motion.g
              style={{ originX: '756px', originY: '684px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="756"
                cy="684"
                r="34"
                stroke="#1B365D"
                strokeWidth="2"
                strokeDasharray="8 7"
                strokeOpacity="0.7"
              />
            </motion.g>

            {/* Flowing aerodynamic lift streamlines across upper wing */}
            <motion.path
              d="M 220 315 Q 680 140 1460 190"
              stroke="#1B365D"
              strokeWidth="2.2"
              strokeDasharray="18 22"
              strokeOpacity="0.68"
              animate={{ strokeDashoffset: [0, -160] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 140 530 Q 650 470 1390 430"
              stroke="#B45309"
              strokeWidth="2"
              strokeDasharray="14 26"
              strokeOpacity="0.62"
              animate={{ strokeDashoffset: [0, -160] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            />
          </g>
        )}

        {kind === 'microchip-wafer' && (
          <g>
            {/* Rotating outer compass astrolabe ring around the silicon wafer */}
            <motion.g
              style={{ originX: '785px', originY: '442px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="785"
                cy="442"
                r="294"
                stroke="#1B365D"
                strokeWidth="2"
                strokeDasharray="14 10"
                strokeOpacity="0.68"
              />
            </motion.g>

            {/* Counter-rotating bottom-left circular polar wafer grid */}
            <motion.g
              style={{ originX: '302px', originY: '714px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="302"
                cy="714"
                r="142"
                stroke="#B45309"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeOpacity="0.72"
              />
            </motion.g>

            {/* Racing electrical signal pulses inside the right microchip die */}
            <motion.path
              d="M 922 200 H 1282 V 542 H 922 Z"
              stroke="#1B365D"
              strokeWidth="2.5"
              strokeDasharray="24 28"
              strokeOpacity="0.82"
              animate={{ strokeDashoffset: [0, -208] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 945 270 H 1095 V 370 H 1260"
              stroke="#B45309"
              strokeWidth="3.2"
              strokeDasharray="16 34"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -200] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 1255 240 H 1140 V 480 H 950"
              stroke="#1B365D"
              strokeWidth="3"
              strokeDasharray="14 32"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -184] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              cx="1098"
              cy="370"
              r="14"
              stroke="#B45309"
              strokeWidth="2.5"
              animate={{ scale: [0.8, 1.45, 0.8], opacity: [0.45, 0.95, 0.45] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        )}

        {kind === 'robotic-hand' && (
          <g>
            {/* Large planetary brass gear rotating */}
            <motion.g
              style={{ originX: '344px', originY: '434px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="344"
                cy="434"
                r="82"
                stroke="#B45309"
                strokeWidth="2.6"
                strokeDasharray="10 7"
                strokeOpacity="0.85"
              />
              <circle cx="344" cy="434" r="24" stroke="#1B365D" strokeWidth="2" />
            </motion.g>

            {/* Meshed upper gear counter-rotating */}
            <motion.g
              style={{ originX: '508px', originY: '358px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="508"
                cy="358"
                r="54"
                stroke="#1B365D"
                strokeWidth="2.4"
                strokeDasharray="8 6"
                strokeOpacity="0.82"
              />
            </motion.g>

            {/* Lower pinion gear rotating */}
            <motion.g
              style={{ originX: '442px', originY: '494px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="442"
                cy="494"
                r="34"
                stroke="#B45309"
                strokeWidth="2.2"
                strokeDasharray="6 5"
                strokeOpacity="0.85"
              />
            </motion.g>

            {/* Wrist rotation ring oscillating */}
            <motion.g
              style={{ originX: '916px', originY: '420px' }}
              animate={{ rotate: [-14, 14, -14] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <circle
                cx="916"
                cy="420"
                r="76"
                stroke="#1B365D"
                strokeWidth="2.2"
                strokeDasharray="12 10"
                strokeOpacity="0.78"
              />
            </motion.g>

            {/* Tendon actuation pulses flowing from gears to fingers */}
            <motion.path
              d="M 420 412 L 880 410 L 1365 555"
              stroke="#B45309"
              strokeWidth="2.4"
              strokeDasharray="14 26"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -160] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 520 385 L 910 385 L 1465 480"
              stroke="#1B365D"
              strokeWidth="2.2"
              strokeDasharray="14 26"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -160] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
          </g>
        )}

        {kind === 'orbital-network' && (
          <g>
            {/* Outer satellite orbit ring rotating around Earth */}
            <motion.g
              style={{ originX: '800px', originY: '398px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse
                cx="800"
                cy="398"
                rx="640"
                ry="268"
                stroke="#1B365D"
                strokeWidth="2"
                strokeDasharray="14 14"
                strokeOpacity="0.68"
              />
              <circle cx="800" cy="130" r="8" fill="#B45309" />
              <circle cx="800" cy="130" r="18" stroke="#B45309" strokeWidth="2" strokeOpacity="0.7" />
              <circle cx="800" cy="666" r="7" fill="#1B365D" />
            </motion.g>

            {/* Counter-rotating inner orbital halo */}
            <motion.g
              style={{ originX: '800px', originY: '398px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="800"
                cy="398"
                r="285"
                stroke="#B45309"
                strokeWidth="1.8"
                strokeDasharray="8 12"
                strokeOpacity="0.68"
              />
            </motion.g>

            {/* Live data beam pulses between satellites and central dish */}
            <motion.path
              d="M 240 165 L 800 500 L 1365 180"
              stroke="#B45309"
              strokeWidth="2.6"
              strokeDasharray="14 30"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -176] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 260 660 L 800 500 L 1340 650"
              stroke="#1B365D"
              strokeWidth="2.4"
              strokeDasharray="14 30"
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, -176] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: 'linear' }}
            />
          </g>
        )}

        {kind === 'space-telescope' && (
          <g>
            {/* Outer celestial geometry halo rotating behind primary mirror */}
            <motion.g
              style={{ originX: '795px', originY: '325px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="795"
                cy="325"
                r="265"
                stroke="#1B365D"
                strokeWidth="1.8"
                strokeDasharray="12 12"
                strokeOpacity="0.65"
              />
            </motion.g>

            {/* Focal optical beam convergence pulsing to secondary mirror */}
            <motion.g
              animate={{ opacity: [0.35, 0.92, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <line
                x1="785"
                y1="110"
                x2="1158"
                y2="322"
                stroke="#B45309"
                strokeWidth="2.2"
                strokeDasharray="10 10"
              />
              <line
                x1="765"
                y1="520"
                x2="1158"
                y2="322"
                stroke="#B45309"
                strokeWidth="2.2"
                strokeDasharray="10 10"
              />
              <circle cx="1158" cy="322" r="12" stroke="#1B365D" strokeWidth="2.2" />
            </motion.g>

            {/* Orbiting planetary spheres on left & right margins */}
            <motion.g
              style={{ originX: '166px', originY: '146px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="166"
                cy="146"
                r="88"
                stroke="#1B365D"
                strokeWidth="1.6"
                strokeDasharray="6 10"
                strokeOpacity="0.7"
              />
              <circle cx="166" cy="58" r="5" fill="#B45309" />
            </motion.g>

            <motion.g
              style={{ originX: '166px', originY: '774px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="166"
                cy="774"
                r="88"
                stroke="#B45309"
                strokeWidth="1.6"
                strokeDasharray="6 10"
                strokeOpacity="0.7"
              />
              <circle cx="254" cy="774" r="5" fill="#1B365D" />
            </motion.g>

            <motion.g
              style={{ originX: '1432px', originY: '146px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="1432"
                cy="146"
                r="92"
                stroke="#1B365D"
                strokeWidth="1.6"
                strokeDasharray="8 8"
                strokeOpacity="0.65"
              />
            </motion.g>
          </g>
        )}
      </svg>
    </div>
  );
}
